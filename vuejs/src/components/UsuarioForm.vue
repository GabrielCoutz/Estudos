<template>
  <form @submit.prevent>
    <div v-if="mostrarDadosLogin" class="usuario">
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
    </div>
    <label for="cep">CEP</label>
    <input
      type="number"
      id="cep"
      name="cep"
      v-model="cep"
      @keyup="preencherCep"
      min="0"
    />

    <label for="numero">Numero</label>
    <input type="number" id="numero" name="numero" v-model="numero" min="0" />

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
import { getCep } from "@/services/index.js";
export default {
  computed: {
    ...mapFields({
      fields: [
        "nome",
        "email",
        "senha",
        "cep",
        "rua",
        "numero",
        "bairro",
        "cidade",
        "estado",
      ],
      base: "user",
      mutation: "UPDATE_USUARIO",
    }),
    mostrarDadosLogin() {
      return !this.$store.state.login || this.$route.name === "usuarioEditar";
    },
  },
  methods: {
    async preencherCep() {
      const cep = this.cep;
      if (cep.length === 8) {
        const { data } = await getCep(cep);

        this.rua = data.logradouro;
        this.estado = data.uf;
        this.cidade = data.localidade;
        this.bairro = data.bairro;
      }
    },
  },
};
</script>

<style scoped>
form,
.usuario {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}

.usuario {
  grid-column: 1/3;
}

.button {
  margin-top: 10px;
  grid-column: 1/-1;
}
</style>
