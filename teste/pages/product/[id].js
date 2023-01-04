import React from "react";
import { useRouter } from "next/router";
const Product = ({ data }) => {
  const { query } = useRouter();
  console.log(query.id, data);
  return <div>Product</div>;
};

async function teste(id) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  const product = await stripe.prices.retrieve(id);
  // query: "active:'true' AND metadata['categoria']:'Exclusivos'",

  return product;
}
export async function getServerSideProps({ params }) {
  const { id } = params;
  const data = await teste(id);

  return {
    props: {
      data,
    },
  };
}

export default Product;
