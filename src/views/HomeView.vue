<script>
import { store } from "./../store.js";

export default {
  created() {
    this.loading = true;
    fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=50")
      .then((res) => res.json())
      .then((res) => {
        this.tableData = res;
        console.log(res);
      })
      .finally(() => {
        this.loading = false;
      });

    console.log(`the component is now mounted.`);
  },
  data() {
    return {
      tableData: [],
      loading: false,
    };
  },
  methods: {
    goToCard: function (data) {
      store.setCardData(data);
      this.$router.push("/card");
      console.log("clicked abc");
    },
  },
};
</script>

<template>
  <main class="home-container">
    <img class="loader" v-if="loading" src="/loader.gif" />
    <h1 class="page-title">Character Table</h1>
    <div class="ins">*Click on any row, to go to its card detail page</div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>NAME</th>
          <th>GENDER</th>
          <th>AGE</th>
          <th>HAIR COLOR</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="goToCard(row)" v-for="row in tableData">
          <td>{{ row.id }}</td>
          <td>{{ row.name }}</td>
          <td>{{ row.gender }}</td>
          <td>{{ row.age }}</td>
          <td>{{ row.hairColor }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>
<style>
.home-container .ins {
  margin-bottom: 10px;
}
td,
th {
  padding: 16px;
}
tr {
  border-bottom: 1px solid rgba(224, 224, 224, 1);
}
table {
  border: 1px solid rgba(224, 224, 224, 1);
  width: 100%;
  text-align: left;

  border-collapse: collapse;
}
tr:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
}
tbody tr,
thead tr {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}
tbody {
  height: 400px;
  width: 100%;
  overflow-y: auto;
  display: block;
}
</style>
