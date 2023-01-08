<template>
  <nav>
    <a href="">xampson</a>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
nav {
  display: flex;
  gap: 2rem;
  font-size: 2rem;
  background: #43bc85;
  justify-content: center;
  padding: 1rem;
}
nav a {
  color: white;
}

.router-link-exact-active {
  text-decoration: underline;
}
</style>
