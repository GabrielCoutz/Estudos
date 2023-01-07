<template>
  <div>
    <div v-if="loading">
      <h1>Loading ...</h1>
    </div>
    <div v-else>
      <h1>{{ aulasCurso.curso.nome }}</h1>
      <h3>{{ aulasCurso.nome }}</h3>

      <iframe
        width="560"
        height="315"
        :src="`https://www.youtube.com/embed/${aulasCurso.youtube}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["aula"],
  data() {
    return {
      loading: true,
      aulasCurso: null,
    };
  },
  methods: {
    async fetchData(aulas) {
      this.loading = true;
      this.aulasCurso = await (
        await fetch(`http://localhost:3000/aula/${aulas}`)
      ).json();
      this.loading = false;
    },
  },
  beforeRouteUpdate(to, _, next) {
    this.fetchData(to.params.aula);
    next();
  },
  created() {
    this.fetchData(this.$route.params.aula);
  },
};
</script>

<style></style>
