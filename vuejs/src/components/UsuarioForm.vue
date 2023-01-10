<template>
  <form @submit.prevent>
    <label for="nome">Nome</label>
    <input
      type="text"
      id="nome"
      name="nome"
      v-model="nome"
      autocomplete="username"
    />

    <label for="email">Email</label>
    <input
      type="email"
      id="email"
      name="email"
      v-model="email"
      autocomplete="email"
    />

    <label for="senha">Senha</label>
    <input
      type="password"
      id="senha"
      name="senha"
      v-model="senha"
      autocomplete="current-password"
    />

    <label for="cep">CEP</label>
    <input type="number" id="cep" name="cep" v-model="cep" />

    <label for="rua">Rua</label>
    <input type="text" id="rua" name="rua" v-model="rua" />

    <label for="bairro">Bairro</label>
    <input type="text" id="bairro" name="bairro" v-model="bairro" />

    <label for="cidade">Cidade</label>
    <input type="text" id="cidade" name="cidade" v-model="cidade" />

    <label for="estado">Estado</label>
    <input type="text" id="estado" name="estado" v-model="estado" />

    <div class="button">
      <slot></slot>
    </div>
  </form>
</template>

<script>
import { mapFields } from "@/helpers/index.js";

export default {
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "rua",
        "cep",
        "senha",
        "numero",
        "bairro",
        "cidade",
        "estado",
      ],
      base: "user",
      mutation: "UPDATE_USUARIO",
    }),
  },
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

button {
  margin-top: 10px;
  grid-column: 2;
}
</style>
