<template>
  <div>
    <h1>profile page {{ this.cname }}</h1>
    <img src="images/product-details/1.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      cname: "",
    };
  },
  beforeRouteUpdate(to, from, next) {
    // just use `this`
    console.log(to.params.id);
    this.cname = to.params.id;
    next();
  },
  created() {
    this.cname = this.$route.params.id;
  },
};
</script>

<style>
</style>