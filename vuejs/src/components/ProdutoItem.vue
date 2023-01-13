<template>
  <router-link :to="{ name: 'Produto', params: { id: produto.id } }">
    <div class="produto" v-if="produto">
      <img
        :src="produto.fotos[0].src"
        :alt="produto.fotos[0].titulo"
        v-if="produto.fotos"
        class="produto-img"
      />
      <div class="info">
        <p class="preco">{{ produto.preco | numeroPreco }}</p>
        <h2 class="titulo">{{ produto.nome }}</h2>
        <slot></slot>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProdutoItem",
  props: ["produto"],
};
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  gap: 20px;
  margin-bottom: 40px;
  position: relative;
}
.produto-img {
  border-radius: 4px;
  overflow: hidden;
  height: 100px;
}

.produto:hover {
  transform: none;
}

@media (max-width: 500px) {
  .produtos {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
</style>
