const options = {
  el: "#app",
  data: {
    products: [],
    product: false,
    totalCart: 0,
    cart: [],
  },
  methods: {
    async fetchProducts() {
      this.products = await (await fetch("./api/produtos.json")).json();
    },

    async fetchProduct(id) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      this.product = await (
        await fetch(`./api/produtos/${id}/dados.json`)
      ).json();
    },

    closeModal({ target, currentTarget }) {
      if (target === currentTarget) this.product = false;
    },

    addToCart() {
      this.product.estoque--;
      this.cart.push(this.product);
      this.totalCart = this.cart.length;
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
