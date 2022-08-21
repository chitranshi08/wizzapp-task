<script>
import { store } from "./../store.js";
export default {
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
    <div class="card">
      <div class="form-group">
        <img :src="store?.cardData?.image" />
      </div>
      <div class="form-group"><strong>Name - </strong>{{ store?.cardData?.name }}</div>
      <div class="form-group"><strong>Age - </strong>{{ store?.cardData?.age }}</div>
      <div class="form-group">
        <strong>Gender - </strong>{{ store?.cardData?.gender }}
      </div>
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
