import client from "./index";

const fetchProducts = async () => {
  const { data } = await client.products.list();
  const newData = data.map((item) => ({
    ...item,
    category: item.metadata.categoria,
  }));
  return newData;
};

const context = () => {
  return { fetchProducts };
};

export default context;
