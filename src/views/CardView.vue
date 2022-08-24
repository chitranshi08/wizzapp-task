<script>
import { store } from "./../store.js";
import Card from "./../Components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="about">
    <h1 class="page-title">Card</h1>
    <div>
      <Card v-for="(card, index) in store.cardData" :card="card" :key="index" />
    </div>
  </div>
</template>

<style>
.card {
  color: rgba(0, 0, 0, 0.87);
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%),
    0px 1px 3px 0px rgb(0 0 0 / 12%);
  padding: 30px;
  border: 1px solid rgba(224, 224, 224, 1);
  display: inline-block;
  font-size: 20px;
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin-right: 15px;
  margin-bottom: 15px;
}
img {
  width: 200px;
  height: 280px;
}
.container.dark .card {
  color: white;
}
.form-group {
  margin-bottom: 10px;
}
</style>
