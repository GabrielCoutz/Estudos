<template>
  <div class="container">
    <nav class="links-cursos">
      <router-link :to="{ name: 'curso', params: { curso: 'javascript' } }">
        javascript
      </router-link>
      <router-link :to="{ name: 'curso', params: { curso: 'html-e-css' } }">
        html e css
      </router-link>
      <router-link :to="{ name: 'curso', params: { curso: 'ux-design' } }">
        ux-design
      </router-link>
      <router-view></router-view>
    </nav>
  </div>
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
.container {
  display: grid;
  gap: 2rem;
}
</style>
