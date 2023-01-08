<template>
  <div>
    <ul>
      <li v-for="{ nome, duracao } in aulas" :key="nome">
        <h2>{{ nome }}</h2>
        <span>{{ duracao }}</span>
        <button @click="completarAula(nome)">Completar aula</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "aula",
  data() {
    return {
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 15,
        },
        {
          nome: "JavaScript",
          duracao: 30,
        },
        {
          nome: "UX Design",
          duracao: 20,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["completarAula"]),
  },
};
</script>

<style scoped>
ul {
  display: flex;
  gap: 2rem;
  margin: 0 1rem;
}
li {
  padding: 1rem;
  display: grid;
  box-shadow: 0 0 10px #dddddd;
  gap: 0.5rem;
  justify-content: start;
}
</style>
