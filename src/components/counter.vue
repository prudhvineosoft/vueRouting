<template>
  <div>
    <p></p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    count: (state) => state.count,
  }),
};
</script>

<style>
</style>