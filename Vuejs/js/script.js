const options = {
  el: "#app",
  data: {
    products: [],
    product: false,
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
      const { nome, preco, id } = this.product;
      this.product.estoque--;

      this.cart.push({ nome, preco, id });
    },

    removeItemFromCart(index) {
      this.cart.splice(index, 1);
    },

    checkLocalStorage() {
      const localCart = window.localStorage.getItem("cart");
      console.log(localCart);
      if (localCart) this.cart = JSON.parse(localCart);
    },
  },
  watch: {
    cart(value) {
      window.localStorage.setItem("cart", JSON.stringify(value));
    },
  },
  computed: {
    totalCart() {
      return this.cart.reduce((acc, { preco }) => acc + preco, 0);
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
    this.checkLocalStorage();
  },
};

const vm = new Vue(options);
