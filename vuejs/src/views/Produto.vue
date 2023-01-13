<template>
  <section>
    <div v-if="produto" class="produto">
      <ul class="fotos" v-if="produto.fotos">
        <li v-for="(foto, index) in produto.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo" />
        </li>
      </ul>
      <div class="info">
        <h1>{{ produto.nome }}</h1>
        <p class="preco">{{ produto.preco | numeroPreco }}</p>
        <p class="descricao">{{ produto.descricao }}</p>
        <transition v-if="produto.vendido" mode="out-in">
          <button class="btn" v-if="!finalizar" @click="finalizar = true">
            Comprar
          </button>
          <FinalizarCompra v-else :produto="produto" />
        </transition>
        <button v-else class="btn" disabled>Produto vendido</button>
      </div>
    </div>
    <PaginaCarregando v-else />
  </section>
</template>

<script>
import { api } from "@/services/index.js";
import FinalizarCompra from "@/components/FinalizarCompra.vue";

export default {
  name: "Produto",
  data() {
    return {
      produto: null,
      finalizar: false,
    };
  },
  components: {
    FinalizarCompra,
  },
  props: ["id"],
  methods: {
    async getProduto() {
      const { data } = await api.get(`/produto/${this.id}
    `);
      this.produto = data;
    },
  },
  created() {
    this.getProduto();
  },
};
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}

.preco {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}

.descricao {
  font-size: 1.2rem;
}

.fotos {
  grid-row: 1/3;
}

.info {
  top: 20px;
  position: sticky;
}

img {
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  border-radius: 4px;
}

.btn {
  margin-top: 60px;
  width: 200px;
}

.produto:hover {
  transform: none;
}
</style>
