<template>
  <div id="app">
    {{ showUserName }}
  </div>
</template>

<script>
import user from "./mixins/User.js";

export default {
  name: "App",
  mixins: [user],
  components: {},
};
</script>

<style></style>
