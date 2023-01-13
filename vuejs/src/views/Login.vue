<template>
  <section class="login">
    <h1>Login</h1>
    <form @submit.prevent>
      <label for="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        v-model="login.email"
        placeholder="exemplo@gmail.com"
        autocomplete="username"
      />
      <label for="senha">Senha</label>
      <input
        type="password"
        name="senha"
        id="senha"
        v-model="login.senha"
        autocomplete="current-password"
      />
      <button class="btn" @click.prevent="logar">Logar</button>
      <ErroNotificacao :erros="erros" />
    </form>
    <p class="perdeu">
      <a
        href="https://restapi.local/wp-login.php?action=lostpassword"
        target="_blank"
        >Esquecei a senha</a
      >
    </p>
    <LoginCriar />
  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue";
import ErroNotificacao from "@/components/ErroNotificacao.vue";

export default {
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
      erros: [],
    };
  },
  components: {
    LoginCriar,
    ErroNotificacao,
  },

  methods: {
    async logar() {
      this.erros = [];
      await this.$store
        .dispatch("logarUsuario", this.login)
        .then((r) => {
          this.$store.dispatch("getUsuario");
          this.$router.push({ name: "Usuario" });
        })
        .catch((error) => {
          const { response } = error;
          const { data } = response;
          this.erros.push(data.message);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}

form {
  display: grid;
}

.btn {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
