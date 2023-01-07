<template>
  <div>
    <div v-if="loading">
      <h1>Loading...</h1>
    </div>
    <div v-else class="container">
      <h1>Curso {{ curso }}</h1>
      <span>{{ infoCurso.descricao }}</span>
      <ul>
        <li v-for="aula in infoCurso.aulas" :key="aula.id">
          <router-link :to="{ name: 'aulas', params: { aula: aula.id } }">{{
            aula.nome
          }}</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  data() {
    return {
      loading: true,
      infoCurso: null,
    };
  },
  methods: {
    async fetchData(curso) {
      this.loading = true;
      this.infoCurso = await (
        await fetch(`http://localhost:3000/curso/${curso}`)
      ).json();
      this.loading = false;
    },
  },
  beforeRouteUpdate(to, _, next) {
    this.fetchData(to.params.curso);
    next();
  },
  created() {
    this.fetchData(this.$route.params.curso);
  },
};
</script>

<style>
ul {
  display: flex;
  gap: 1rem;
}

li {
  list-style: none;
}

.container {
  display: grid;
  gap: 2rem;
}
</style>
