const options = {
  el: "#app",
  data: {
    products: [],
    product: {},
  },
  methods: {
    async fetchProducts() {
      this.products = await (await fetch("./api/produtos.json")).json();
    },

    async fetchProduct(id) {
      this.product = await (await fetch(`./api/${id}`)).json();
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
  created() {
    this.fetchProducts();
  },
};

const vm = new Vue(options);
