const options = {
  el: "#app",
  data: {
    color: "",
  },
  methods: {
    generateRandomColor() {
      this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    },
  },
  computed: {},
  watch: {},
};

const vm = new Vue(options);
