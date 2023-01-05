import { gql } from "graphql-request";

export const allProductsQuery = gql`
  query {
     {
      id
      name
      default_price
      metadata{
        categoria
      }
    }
  }
`;

const products = async (_, __, { fetchProducts }) => {
  const query = allProductsQuery;
  const products = await fetchProducts(query);
  return products;
};

const productResolvers = {
  Query: {
    products,
  },
};

export default productResolvers;
