<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <router-view></router-view>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main {
  flex: 1;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  color: #345;
  background: url("./assets/pattern.svg") repeat top;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: #345;
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}
.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: white;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all 0.3s;
  border: none;
  font-family: monospace;
  cursor: pointer;
}

.btn:hover {
  background: #65d;
  transform: scale(1.1);
}
</style>
