import CurrencyRelation from "./CurrencyRelation.js";

async function fetchData() {
  const { marketCap } = await (
    await fetch("https://api.origamid.dev/stock/aapl/quote")
  ).json();
  return marketCap;
}

export default {
  name: "MarketValue",
  data() {
    return {
      apple: "",
    };
  },
  methods: {
    async getMarketCap() {
      const data = await fetchData();
      this.apple = data;
    },
  },
  filters: {
    numberToCurrency(number) {
      return number.toLocaleString("BRL", {
        currency: "BRL",
        style: "currency",
      });
    },
  },
  mounted() {
    this.getMarketCap();
  },
  components: {
    CurrencyRelation,
  },
  template: `
  <div>
    <p>{{apple | numberToCurrency}}</p>
    <CurrencyRelation></CurrencyRelation>
  </div>
    `,
};
