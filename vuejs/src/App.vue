<template>
  <div id="app">
    <keep-alive>
      <component :is="activeComponent"></component>
    </keep-alive>
    <select v-model="activeComponent">
      <option value="" selected disabled>Selecione o componente</option>
      <option value="Sobre">Sobre</option>
      <option value="Servicos">Servicos</option>
      <option value="Formulario">Formulario</option>
    </select>
  </div>
</template>
<script>
import Sobre from "./components/Sobre.vue";
import Servicos from "./components/Servicos.vue";
import Formulario from "./components/Formulario.vue";

export default {
  name: "App",
  components: {
    Sobre,
    Servicos,
    Formulario,
  },
  data() {
    return {
      activeComponent: "",
    };
  },
};
</script>

<style></style>
