<template>
  <section>
    <h2>Adicionar Produto</h2>
    <ProdutoAdicionar />
    <h2>Seus produtos</h2>
    <transition-group v-if="usuarioProdutos" name="list" tag="ul">
      <li v-for="produto in usuarioProdutos" :key="produto.id">
        <ProdutoItem :produto="produto">
          {{ produto.descricao }}
        </ProdutoItem>
      </li>
    </transition-group>
  </section>
</template>

<script>
import ProdutoAdicionar from "@/components/ProdutoAdicionar.vue";
import ProdutoItem from "@/components/ProdutoItem.vue";
import { mapState, mapActions } from "vuex";
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
h2 {
  margin-bottom: 20px;
}
</style>
