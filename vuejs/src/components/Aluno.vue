<template>
  <div v-if="aulasCompletas.length">
    <ul>
      <li v-for="aula in aulasCompletas" :key="aula">
        {{ aula }}
      </li>
    </ul>
  </div>
  <div v-else>Não existem aulas completas</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "aluno",
  computed: { ...mapState(["aulasCompletas"]) },
};
</script>

<style></style>
