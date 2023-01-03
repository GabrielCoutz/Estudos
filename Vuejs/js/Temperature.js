async function fetchData() {
  const { consolidated_weather } = await (
    await fetch("https://api.origamid.dev/weather/rio")
  ).json();
  return consolidated_weather;
}

export default {
  name: "Temperature",
  data() {
    return {
      temperature: "",
    };
  },
  methods: {
    async getTemperature() {
      const number = await fetchData();
      this.temperature = `${Math.round(number[0].max_temp)}°`;
    },
  },
  mounted() {
    this.getTemperature();
  },
  template: "<p>Tempratura do Rio: {{temperature}}</p>",
};
