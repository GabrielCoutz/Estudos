const options = {
  el: "#app",
  data: {
    interprises: ["aapl", "googl"],
    marketValues: [],
    finished: false,
  },
  methods: {
    async fetchData(interpriseName) {
      const data = await (
        await fetch(`https://api.origamid.dev/stock/${interpriseName}/quote`)
      ).json();
      this.marketValues.push(data);
      if (this.marketValues.length === this.interprises.length)
        this.finished = true;
    },
    initFetch() {
      this.interprises.forEach(this.fetchData);
    },
    numberToCurrency(number) {
      return number.toLocaleString("BRL", {
        style: "currency",
        currency: "BRL",
      });
    },
  },
};

const vm = new Vue(options);
