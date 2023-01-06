import client from "./index";

const fetchProducts = async () => {
  const { data } = await client.products.list();
  const newData = data.map(async (item) => ({
    ...item,
    category: item.metadata.categoria,
    priceId: item.default_price,
    price: await getProductPrice(item.default_price),
  }));
  return newData;
};

const getProductPrice = async (id) => {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
  const { unit_amount } = await stripe.prices.retrieve(id);
  return centToReal(unit_amount);
};

// o valor do produto é recebido com o menor valor da moeda
// Ex: 10 reais viram 1000 centavos
function centToReal(cent) {
  return cent / 100;
}

// const numberToCurrency = (number) => {
//   return number.toLocaleString("BRL", { currency: "BRL", style: "currency" });
// };

const context = () => {
  return { fetchProducts };
};

export default context;
