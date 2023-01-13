<template>
  <section>
    <h2>Endereço de envio</h2>
    <ErroNotificacao :erros="erros" />
    <UsuarioForm>
      <button @click.prevent="finalizarCompra" class="btn">
        Finalizar compra
      </button>
    </UsuarioForm>
  </section>
</template>

<script>
import UsuarioForm from "@/components/UsuarioForm.vue";
import { api } from "@/services/index.js";
import { mapState } from "vuex";
import ErroNotificacao from "@/components/ErroNotificacao.vue";

export default {
  name: "FinalizarCompra",
  props: ["produto"],
  data() {
    return {
      erros: [],
    };
  },
  components: {
    UsuarioForm,
    ErroNotificacao,
  },
  computed: {
    ...mapState(["user"]),
    compra() {
      return {
        comprador_id: this.user.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.user.cep,
          rua: this.user.rua,
          numero: this.user.numero,
          cidade: this.user.cidade,
          bairro: this.user.bairro,
          estado: this.user.estado,
        },
      };
    },
  },
  methods: {
    async criarTransacao() {
      await api.post("/transacao/", this.compra);
      this.$router.push({ name: "Compras" });
    },
    async criarUsuario() {
      try {
        await this.$store.dispatch("criarUsuario", this.$store.state.user);
        await this.$store.dispatch("logarUsuario", this.$store.state.user);
        await this.$store.dispatch("getUsuario");
        this.$router.push({ name: "Usuario" });
        await this.criarTransacao();
      } catch (error) {
        const { response } = error;
        const { data } = response;
        this.erros.push(data.message);
      }
    },
    finalizarCompra() {
      this.erros = [];
      if (this.$store.state.login) this.criarTransacao();
      else this.criarUsuario();
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}

.btn {
  background: #e80;
}
</style>
