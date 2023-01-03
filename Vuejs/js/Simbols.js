import Result from "./Result.js";

async function fetchData(simbol) {
  return await (
    await fetch(`https://api.origamid.dev/stock/${simbol}/quote`)
  ).json();
}

export default {
  name: "Simbols",
  data() {
    return {
      simbols: {
        aapl: "Apple",
        goog: "Google",
        msft: "Microsoft",
        amzn: "Amazon",
        fb: "Facebook",
      },
      marketAction: "",
      selectedAction: "",
    };
  },
  methods: {
    async getAction() {
      const action = await fetchData(this.selectedAction);
      this.marketAction = action;
    },
  },
  template: `
  <div>
    <form @submit.prevent>
      <select v-model='selectedAction'>
        <option value='' disabled selected>Selecione a empresa</option>
        <option v-for='value,key in simbols' :key='key' :value='key'>{{value}}</option>
      </select>
      <button @click='getAction'>Enviar</button>
    </form>
    <div v-if='marketAction'>
      <result :marketData='marketAction'></result>
    </div>
  </div> 
  `,
  components: {
    Result,
  },
};
