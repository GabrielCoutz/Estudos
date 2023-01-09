<template>
  <ul v-if="paginasTotal > 1">
    <li v-for="pagina in paginas" :key="pagina">
      <router-link :to="{ query: query(pagina) }">
        {{ pagina }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1,
    },
    produtosTotal: {
      type: Number,
      default: 1,
    },
  },

  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina,
      };
    },
  },

  computed: {
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
    paginas() {
      const paginaAtual = Number(this.$route.query._page);
      const range = 9;
      const offset = Math.ceil(range / 2);
      const total = this.paginasTotal;
      const paginasArray = [];

      for (let i = 0; i <= total; i++) {
        paginasArray.push(i);
      }
      paginasArray.splice(0, paginaAtual - offset);
      paginasArray.splice(range, paginaAtual);
      return paginasArray;
    },
  },
};
</script>

<style scoped>
ul {
  grid-column: 1/-1;
}
li {
  display: inline-block;
  transition: all 0.1s;
}

li a {
  padding: 4px 12px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active {
  background: #87f;
  color: white;
}

li:hover {
  transform: scale(1.1);
}
</style>
