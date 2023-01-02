import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Image from "next/image";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

async function teste() {
  const stripe = require("stripe")(process.env.PK_KEY);

  const product = await stripe.products.search({
    query: "active:'true' AND metadata['categoria']:'Exclusivos'",
  });

  return product;
}

export default function PreviewPage({ data }) {
  console.log(data);
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);

  return (
    <>
      <div>
        <Image src={data[0].images[0]} width={300} height={300} />
      </div>
      <form action="/api/checkout_sessions" method="POST">
        <section>
          <button type="submit" role="link">
            Checkout
          </button>
        </section>
        <style jsx>
          {`
            section {
              background: #ffffff;
              display: flex;
              flex-direction: column;
              width: 400px;
              height: 112px;
              border-radius: 6px;
              justify-content: space-between;
            }
            button {
              height: 36px;
              background: #556cd6;
              border-radius: 4px;
              color: white;
              border: 0;
              font-weight: 600;
              cursor: pointer;
              transition: all 0.2s ease;
              box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
            }
            button:hover {
              opacity: 0.8;
            }
          `}
        </style>
      </form>
    </>
  );
}

async function teste2(fileId) {
  const stripe = require("stripe")(process.env.PK_KEY);

  const upload = await stripe.files.retrieve(`{{${fileId}}}`);
  return upload;
}

export async function getServerSideProps() {
  const { data } = await teste();

  return {
    props: {
      data,
    },
  };
}
