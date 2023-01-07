<template>
  <div id="app">
    <nav class="nav">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'cursos' }">Cursos</router-link>
      <router-link :to="{ name: 'contato' }">Contato</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.nav {
  display: flex;
  gap: 2rem;
  background: #123;
  font-size: 2rem;
  justify-content: center;
}

.nav a {
  color: white;
}

a {
  text-decoration: none;
}

.router-link-exact-active {
  text-decoration: underline;
}
</style>
