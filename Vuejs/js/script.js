const options = {
  el: "#app",
  data: {
    selected: "",
    countries: {},
  },
  methods: {
    async fetchCountries() {
      const data = await (
        await fetch("https://restcountries.com/v2/all")
      ).json();
      this.countries = data;
    },
  },
  computed: {
    countryCapital() {
      const { capital } = this.countries.find(
        (country) => country.name === this.selected
      );
      return capital;
    },
  },
};

const vm = new Vue(options);
