async function fetchData() {
  return await (await fetch("https://api.origamid.dev/exchange/usd")).json();
}

export default {
  name: "CurrencyRelation",
  data() {
    return {
      relation: 0,
    };
  },
  methods: {
    async getCurrencyRelation() {
      const { rates } = await fetchData();
      this.relation = rates.BRL;
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
    this.getCurrencyRelation();
  },
  template: `<p>1 Dolar vale: {{relation | numberToCurrency}}</p>`,
};
