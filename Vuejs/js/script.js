const options = {
  el: "#app",
  data: {
    preco: 69,
    total: 0,
    data: "",
  },
  methods: {
    async fetchData() {
      const data = await (
        await fetch("https://api.origamid.dev/stock/aapl/quote")
      ).json();
      this.data = data;
    },
  },
};

const vm = new Vue(options);
