<template>
  <div>
    <h1>Home page</h1>
    <hr />
    <h1 class="text-danger"></h1>
    <img src="images/product-details/1.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Home",
  beforeCreate() {
    alert("new");
  },
};
</script>

<style>
</style>