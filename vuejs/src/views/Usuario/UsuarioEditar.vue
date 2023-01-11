<template>
  <section>
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

export default {
  name: "Editar",
  components: {
    UsuarioForm,
  },
  methods: {
    async atualizarUsuario() {
      await api.put(
        `/usuario/${this.$store.state.user.id}`,
        this.$store.state.user
      );
      this.$store.dispatch("getUsuario");
      this.$router.push({ name: "Usuario" });
    },
  },
};
</script>

<style></style>
