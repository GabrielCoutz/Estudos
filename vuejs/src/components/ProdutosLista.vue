<template>
  <section class="produtos-container">
    <transition mode="out-in">
      <div v-if="produtos && produtos.length" key="produtos">
        <ul class="produtos">
          <li
            v-for="({ fotos, nome, preco, descricao, id }, index) in produtos"
            :key="id + index"
            class="produto"
          >
            <router-link :to="{ name: 'Produto', params: { id } }">
              <img v-if="fotos" :src="fotos[0]" :alt="nome" />
              <p class="preco">{{ preco | numeroPreco }}</p>
              <h1 class="titulo">{{ nome }}</h1>
              <p>{{ descricao }}</p>
            </router-link>
          </li>
        </ul>
        <ProdutosPaginar
          :produtosTotal="produtosTotal"
          :produtosPorPagina="produtosPorPagina"
        />
      </div>
      <div v-else-if="produtos && produtos.length === 0" key="sem-resultados">
        <p class="sem-resultados">
          Busca sem resultados. Tente buscar com outro termo.
        </p>
      </div>
      <div key="carregando" v-else>
        <PaginaCarregando />
      </div>
    </transition>
  </section>
</template>

<script>
import { api } from "@/services/index.js";
import { serialize } from "@/helpers/index.js";
import ProdutosPaginar from "@/components/ProdutosPaginar.vue";

export default {
  data() {
    return {
      produtos: null,
      produtosPorPagina: 8,
      produtosTotal: 0,
    };
  },

  methods: {
    async getProdutos() {
      this.produtos = null;
      setTimeout(async () => {
        const response = await api.get(this.url);
        this.produtos = response.data;
        this.produtosTotal = response.totalItens;
      }, 1000);
    },
  },

  computed: {
    url() {
      const endpoint = "/produto";
      const limit = `?_limit=${this.produtosPorPagina}`;
      const query = serialize(this.$route.query);

      return endpoint + limit + query;
    },
  },

  created() {
    this.getProdutos();
  },

  watch: {
    url() {
      this.getProdutos();
    },
  },

  components: {
    ProdutosPaginar,
  },
};
</script>

<style>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}

.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin: 30px;
}

@media (max-width: 500px) {
  .produtos {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin: 10px;
  }
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  background: white;
  border-radius: 4px;
  transition: all 0.3s;
}

.produto:hover {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}

.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}

.titulo {
  margin-bottom: 10px;
}

.preco {
  color: #e80;
  font-weight: bold;
}

.sem-resultados {
  text-align: center;
}
</style>
