<script>
import { store } from "./../store.js";
export default {
  data() {
    return {
      store,
    };
  },
  computed: {
    isLightTheme() {
      return this.store.theme == "light" ? true : false;
    },
  },
};
</script>
<template>
  <div class="about">
    <h1 class="page-title">Theme</h1>
    <form>
      <input
        @click="store.setTheme('light')"
        type="radio"
        name="theme"
        :checked="isLightTheme"
      />
      <label>Light Theme</label>

      <input
        class="dark-theme-button"
        @click="store.setTheme('dark')"
        type="radio"
        name="theme"
        :checked="!isLightTheme"
      />
      <label>Dark Theme</label>
    </form>
  </div>
</template>

<style>
.dark-theme-button {
  margin-left: 20px;
}
</style>
