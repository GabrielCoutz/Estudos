Vue.component("BotaoContador", {
  data() {
    return {
      total: 0,
    };
  },
  template: "<button @click='increaseTotal'>Total: {{total}}</button>",
  methods: {
    increaseTotal() {
      this.total++;
    },
  },
});

const LocalComponent = {
  name: "LocalComponent",
  template: "<div>LocalComponent</div>",
};

const options = {
  el: "#app",
  data: { mensagem: "xampson" },
  components: {
    LocalComponent,
  },
};

const vm = new Vue(options);
