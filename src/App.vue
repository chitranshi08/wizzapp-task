<script>
import { RouterLink, RouterView } from "vue-router";
import { store } from "./store.js";
export default {
  data() {
    return {
      store,
    };
  },
  computed: {
    themeClass() {
      return this.store.theme == "light" ? "light" : "dark";
    },
  },
};
</script>

<template>
  <header :class="themeClass">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/card">Card</RouterLink>
      <RouterLink to="/setting">Setting</RouterLink>
    </nav>
  </header>
  <div :class="[themeClass, 'container']">
    <RouterView />
  </div>
</template>

<style scoped>
nav {
  padding: 15px;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
}
nav a {
  margin-right: 15px;
}
</style>
