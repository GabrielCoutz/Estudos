<template>
  <div id="app">
    <div>
      <NavBar />
      <Curso />
      <Aluno />
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Curso from "./components/Curso.vue";
import Aluno from "./components/Aluno.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Curso,
    Aluno,
  },
  data() {
    return {};
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}
</style>
