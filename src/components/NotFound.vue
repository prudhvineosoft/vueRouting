<template >
  <div class="bg-container">
    <h3>Oops, it looks like the page you're looking for doesn't exist</h3>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style>
.bg-container {
  height: 91vh;
  background-color: blueviolet;
  background-image: url("../assets/404.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>