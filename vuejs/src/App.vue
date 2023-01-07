<template>
  <div id="app">
    <div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link :to="{ name: 'cursos', params: { curso: 'javascript' } }"
          >javascript</router-link
        >
        <router-link :to="{ name: 'cursos', params: { curso: 'html' } }"
          >html</router-link
        >
        <router-link :to="{ name: 'cursos', params: { curso: 'css' } }"
          >css</router-link
        >
      </nav>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
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

nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
