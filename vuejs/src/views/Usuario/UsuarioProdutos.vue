<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProdutoAdicionar />
    <h2>Seus produtos</h2>
    <transition-group v-if="usuarioProdutos" name="list" tag="ul">
      <li v-for="produto in usuarioProdutos" :key="produto.id" class="card">
        <ProdutoItem :produto="produto">
          {{ produto.descricao }}
        </ProdutoItem>
        <button class="deletar" @click="deletarProduto(produto.id)">
          Deletar produto
        </button>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar.vue";
import ProdutoItem from "@/components/ProdutoItem.vue";

import { mapState, mapActions } from "vuex";
import { api } from "@/services/index.js";

export default {
  components: {
    ProdutoAdicionar,
    ProdutoItem,
  },

  computed: {
    ...mapState(["login", "usuario", "usuarioProdutos"]),
  },

  methods: {
    ...mapActions(["getUsuarioProdutos"]),

    async deletarProduto(id) {
      const desejaDeletar = confirm(
        "Are you sure you want to delete this product?"
      );

      if (desejaDeletar) {
        await api.delete(`/produto/${id}`);
        this.getUsuarioProdutos();
      }
    },
  },

  watch: {
    login() {
      this.getUsuarioProdutos();
    },
  },

  created() {
    if (this.login) this.getUsuarioProdutos();
  },
};
</script>

<style scoped>
.card {
  position: relative;
}
h2 {
  margin-bottom: 20px;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.deletar {
  position: absolute;
  top: 0;
  right: 0;
  background: url("../../assets/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  text-indent: -148px;
  overflow: hidden;
  border: none;
  padding: 20px;
  cursor: pointer;
  z-index: 1;
}
</style>
