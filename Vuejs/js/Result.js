export default {
  name: "Result",
  props: ["marketData"],
  data() {
    return {
      companyData: this.marketData,
    };
  },
  template: `
  <ul>
    <li v-for='value,key in companyData' :key='key'>{{key}}: {{value}}</li>
  </ul>`,
};
