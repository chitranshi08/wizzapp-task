<script>
import { store } from "./../store.js";
export default {
  props: {
    card: Object,
    key: Number,
  },
  methods: {
    removeCard(index) {
      store.removeCard(index);
    },
  },
  mounted() {
    console.log(this.card);
  },
};
</script>

<template>
  <div class="card">
    <div class="form-group"><strong>API - </strong>{{ card?.API }}</div>

    <div class="form-group"><strong>Description - </strong>{{ card?.Description }}</div>

    <div class="form-group"><strong>Auth - </strong>{{ card?.Auth }}</div>

    <div class="form-group"><strong>Category - </strong>{{ card?.Category }}</div>

    <div class="form-group"><strong>HTTPS - </strong>{{ card?.HTTPS }}</div>

    <div class="form-group"><strong>Cors - </strong>{{ card?.Cors }}</div>

    <div class="form-group"><strong>Link - </strong>{{ card?.Link }}</div>
    <button class="remove-card-button" @click="removeCard(key)">DELETE</button>
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
.remove-card-button {
  border: none;
  padding: 10px;
  background-color: #e64b3a;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
}
</style>
