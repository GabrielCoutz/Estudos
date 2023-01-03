import MarketValue from "./MarketValue.js";
import Temperature from "./Temperature.js";

Vue.component("Temperature", Temperature);

const options = {
  el: "#app",
  components: {
    MarketValue,
  },
};

const vm = new Vue(options);
