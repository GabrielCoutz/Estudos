const options = {
  el: "#app",
  data: {
    number: 0,
  },
  methods: {},
  watch: {
    number() {
      document.title = this.number;
    },
  },
};

const vm = new Vue(options);
