const options = {
  el: "#app",
  data: {
    products: [],
    product: false,
    cart: [],
    activeCart: false,
    mensagemAlerta: "",
    alertaAtivo: false,
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
      this.showAlert("Item adicionado");
    },

    removeItemFromCart(index) {
      this.cart.splice(index, 1);
      this.showAlert("Item removido");
    },

    checkLocalStorage() {
      const localCart = window.localStorage.getItem("cart");
      console.log(localCart);
      if (localCart) this.cart = JSON.parse(localCart);
    },

    showAlert(message) {
      this.mensagemAlerta = message;
      this.alertaAtivo = true;
      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1500);
    },

    router() {
      const hash = document.location.hash.replace("#", "");
      if (hash) this.fetchProduct(hash);
    },

    outsideClick({ target, currentTarget }) {
      if (target === currentTarget) this.activeCart = false;
    },

    compareStock() {
      const items = this.cart.filter(({ id }) => id === this.product.id);

      this.product.estoque -= items.length;
    },
  },

  watch: {
    cart(value) {
      window.localStorage.setItem("cart", JSON.stringify(value));
    },

    product() {
      if (this.product) this.compareStock();
      document.title = this.product.nome || "Techno";
      const hash = this.product.id || "";
      history.pushState(null, null, `#${hash}`);
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
    this.router();
  },
};

const vm = new Vue(options);
