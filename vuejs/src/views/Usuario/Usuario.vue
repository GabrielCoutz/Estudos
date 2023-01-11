<template>
  <section class="usuario">
    <nav class="side-nav">
      <ul>
        <li>
          <router-link :to="{ name: 'Usuario' }">Produtos</router-link>
          <router-link :to="{ name: 'Vendas' }">Vendas</router-link>
          <router-link :to="{ name: 'Compras' }">Compras</router-link>
          <router-link :to="{ name: 'Editar' }">Editar usuário</router-link>
          <button @click="deslogar">Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
export default {
  name: "Usuario",
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.usuario {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  gap: 30px;
  padding: 20px;
}

@media (max-width: 500px) {
  .usuario {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
}

.side-nav a,
button {
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

button {
  border: none;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  font-family: monospace;
  cursor: pointer;
}

button:hover {
  background-color: #87f !important;
  color: white;
}

a.router-link-exact-active {
  background: #87f;
  color: white;
}
</style>
