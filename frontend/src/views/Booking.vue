<template>
  <div class="container">
    <form id="survey-form">
    <table class="table table-dark">
      <thead>
        <th scope="col">Id</th>
        <th scope="col">name</th>
        <th scope="col">email</th>
        <th scope="col">phone</th>
        <th scope="col">amount</th>
        <th scope="col">location</th>
        <th scope="col">comment</th>
      </thead>
      <tr v-for="(value, index) in value" :key="index">
        <th>{{ value._id }}</th>
        <th>{{ value.name }}</th>
        <th>{{ value.email }}</th>
        <th>{{ value.phone }}</th>
        <th>{{ value.quantity }}</th>
        <th>{{ value.type }}</th>
        <th>{{ value.comment }}</th>
      </tr>
    </table>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      value: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/order/getAllOrder")
    .then(response => {
      this.value = response.data}).catch(error => console.log(error))
  },
};
</script>

