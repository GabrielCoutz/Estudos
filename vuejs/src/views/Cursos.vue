<template>
  <nav class="links-cursos">
    <router-link :to="{ name: 'curso', params: { curso: 'javascript' } }">
      javascript
    </router-link>
    <router-link :to="{ name: 'curso', params: { curso: 'html' } }">
      html
    </router-link>
    <router-link :to="{ name: 'curso', params: { curso: 'css' } }">
      css
    </router-link>
    <router-view></router-view>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.links-cursos {
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  gap: 1rem;
  margin: 1rem;
}
.links-cursos a {
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 0 10px rgb(192, 192, 192);
  color: black;
}
</style>
