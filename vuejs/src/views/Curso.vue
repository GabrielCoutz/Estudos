<template>
  <div>
    <div v-if="loading">
      <h1>Loading...</h1>
    </div>
    <div v-else>
      <h1>Curso {{ curso }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  props: ["curso"],
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    teste() {
      this.loading = true;
      console.log("xamopson");
      this.loading = false;
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.teste();
    next();
  },
};
</script>

<style></style>
