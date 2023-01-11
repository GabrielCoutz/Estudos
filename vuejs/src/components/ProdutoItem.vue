<template>
  <div class="produto" v-if="produto">
    <router-link :to="{ name: 'Produto', params: { id: produto.id } }">
      <img
        :src="produtos.fotos[0].src"
        :alt="produtos.fotos[0].titulo"
        v-if="produto.fotos"
        class="produto-img"
      />
      <div class="info">
        <p class="preco">{{ produto.preco | numeroPreco }}</p>
        <h2 class="titulo">{{ produto.nome }}</h2>
        <slot></slot>
      </div>
    </router-link>
  </div>
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

.info {
  align-self: flex-end;
}

.produto-img {
  border-radius: 4px;
  overflow: hidden;
  height: 100px;
}

.produto:hover {
  transform: none;
}
</style>
