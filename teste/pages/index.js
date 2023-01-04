import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Card from "../src/components/Card";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PreviewPage({ data, teste }) {
  console.log(data, teste);
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
    <ul>
      <Card data={data} />
    </ul>
  );
}

async function getAllProducts() {
  const stripe = require("stripe")(process.env.PK_KEY);
  const product = await stripe.products.list();
  return product;
}

async function getProductPrice(id) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const product = await stripe.prices.retrieve(id);
  return product;
}

export async function getServerSideProps() {
  const { data } = await getAllProducts();
  const teste = Promise.all(
    await data.map(async (item) => ({
      ...item,
      price: await getProductPrice(item.default_price),
    }))
  );
  return {
    props: {
      data,
      teste,
    },
  };
}
