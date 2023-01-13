<template>
  <section>
    <ErroNotificacao :erros="erros" />
    <UsuarioForm>
      <button class="btn" @click.prevent="atualizarUsuario">
        Atualizar dados
      </button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
import { api } from "@/services/index.js";
import ErroNotificacao from "@/components/ErroNotificacao.vue";

export default {
  name: "Editar",
  data() {
    return {
      erros: [],
    };
  },

  components: {
    UsuarioForm,
    ErroNotificacao,
  },

  methods: {
    async atualizarUsuario() {
      try {
        this.erros = [];
        await api.put(`/usuario`, this.$store.state.user);
        this.$store.dispatch("getUsuario");
        this.$router.push({ name: "Usuario" });
      } catch (error) {
        const { response } = error;
        const { data } = response;
        this.erros.push(data.message);
      }
    },
  },
};
</script>

<style></style>
