<template>
  <section>
    <div v-if="compras">
      <h2>Compras</h2>
      <div
        class="produtosWrapper"
        v-for="(compra, index) in compras"
        :key="index"
      >
        <ProdutoItem v-if="compra.produto" :produto="compra.produto">
          <p class="vendedor">
            <span>Vendedor</span>
            {{ compra.vendedor_id }}
          </p>
        </ProdutoItem>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from "@/components/ProdutoItem.vue";
import { api } from "@/services/index.js";
import { mapState } from "vuex";

export default {
  name: "Compras",
  components: {
    ProdutoItem,
  },
  data() {
    return {
      compras: null,
    };
  },
  computed: {
    ...mapState(["user", "login"]),
  },
  methods: {
    async getCompras() {
      const { data } = await api.get(`/transacao?tipo=comprador_id`);
      this.compras = data;
    },
  },
  watch: {
    login() {
      this.getCompras();
    },
  },
  created() {
    if (this.login) this.getCompras();
  },
};
</script>

<style scoped>
.produtoWrapper {
  margin-bottom: 40px;
}
.vendedor span {
  color: #e90;
}

h2 {
  margin-bottom: 40px;
}
</style>
