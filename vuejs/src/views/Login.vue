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
    </form>
    <p class="perdeu">
      <a href="" target="_blank">Esquecei a senha</a>
    </p>
    <LoginCriar />
  </section>
</template>

<script>
import LoginCriar from "@/components/LoginCriar.vue";
export default {
  data() {
    return {
      login: {
        email: "",
        senha: "",
      },
    };
  },
  components: {
    LoginCriar,
  },

  methods: {
    logar() {
      this.$store.commit("UPDATE_LOGIN", true);
      this.$store.dispatch("getUsuario", this.login.email);
      this.$router.push({ name: "Usuario" });
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
