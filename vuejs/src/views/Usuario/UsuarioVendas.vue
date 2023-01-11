<template>
  <section>
    <div v-if="vendas">
      <h2>Vendas</h2>
      <div
        class="produtosWrapper"
        v-for="(venda, index) in vendas"
        :key="index"
      >
        <ProdutoItem v-if="venda.produto" :produto="venda.produto">
          <p class="comprador">
            <span>Comprador</span>
            {{ venda.comprador_id }}
          </p>
        </ProdutoItem>
        <div class="entrega">
          <h3>Entrega</h3>
          <ul v-if="venda.endereco">
            <li v-for="(value, key) in venda.endereco" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProdutoItem from "@/components/ProdutoItem.vue";
import { api } from "@/services/index.js";
import { mapState } from "vuex";

export default {
  name: "Vendas",
  components: {
    ProdutoItem,
  },
  data() {
    return {
      vendas: null,
    };
  },
  computed: {
    ...mapState(["user", "login"]),
  },
  methods: {
    async getVendas() {
      const { data } = await api.get(`/transacao?vendedor_id=${this.user.id}`);
      this.vendas = data;
    },
  },
  watch: {
    login() {
      this.getVendas();
    },
  },
  created() {
    if (this.login) this.getVendas();
  },
};
</script>

<style scoped>
.produtoWrapper {
  margin-bottom: 40px;
}
.comprador span {
  color: #e90;
}

h2 {
  margin-bottom: 40px;
}

.entrega {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  gap: 20px;
  margin-bottom: 60px;
}

h3 {
  justify-self: end;
  margin: 0;
}
</style>
