<template>
  <section>
    <h2>Crie sua conta</h2>
    <ErroNotificacao :erros="erros" />
    <transition mode="out-in">
      <button v-if="!criar" class="btn" @click="criar = true">
        Criar conta
      </button>
      <UsuarioForm v-else>
        <button class="btn btn-form" @click="criarUsuario">
          Criar usuário
        </button>
      </UsuarioForm>
    </transition>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
import ErroNotificacao from "@/components/ErroNotificacao.vue";

export default {
  name: "LoginCriar",
  components: {
    UsuarioForm,
    ErroNotificacao,
  },
  data() {
    return {
      criar: false,
      erros: [],
    };
  },
  methods: {
    async criarUsuario() {
      this.erros = [];
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.user);
        await this.$store.dispatch("logarUsuario", $this.$store.state.user);
        await this.$store.dispatch("getUsuario");
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

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.btn-form {
  max-width: 100%;
}
</style>
