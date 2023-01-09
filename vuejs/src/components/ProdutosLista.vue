<template>
  <section class="produtos=container">
    <ul v-for="{ fotos, nome, preco, descricao, id } in produtos" :key="id">
      <li>
        <img v-if="fotos" :src="fotos[0]" :alt="nome" />
        <p>{{ preco }}</p>
        <h1>{{ nome }}</h1>
        <p>{{ descricao }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import { api } from "@/services/index.js";

export default {
  data() {
    return {
      produtos: [],
    };
  },
  methods: {
    async getProdutos() {
      this.produtos = await api.get("/produto");
    },
  },
  created() {
    this.getProdutos();
  },
};
</script>

<style></style>
