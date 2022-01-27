<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>S.no</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Website</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in usersData" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.website }}</td>
          <td>{{ user.phone }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { usersData: undefined };
  },
  mounted() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    axios.get(URL).then((res) => {
      console.log(res.data);
      this.usersData = res.data;
    });
  },
};
</script>

<style>
</style>