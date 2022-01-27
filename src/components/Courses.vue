<template>
  <div>
    <h1>Courses</h1>
    <ul class="navbar-nav">
      <li class="text-dark">
        <router-link class="text-dark" to="/courses/react">React</router-link>
      </li>
      <li class="text-dark">
        <router-link class="text-dark" to="/courses/vue">Vue</router-link>
      </li>
    </ul>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Courses",
};
</script>

<style>
</style>