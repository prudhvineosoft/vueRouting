<template>
  <div>
    <h1>About page</h1>
    <button @click="passData()" class="btn btn-primary">pass data</button>
    <button @click="removeData()" class="btn btn-danger">remove data</button>
    <hr />
    <h1>{{ name }}</h1>
    <h2>count = {{ count }}</h2>
    <button @click="add5()">Add5</button>
    <button @click="remove2()">Remove2</button>
    <hr />
    <button @click="addToCart()">Add To Cart</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store/store";
import * as type from "../store/types";
export default {
  name: "About",
  beforeRouteLeave(to, from, next) {
    const answer = window.confirm(
      "Do you really want to leave? you have unsaved changes!"
    );
    if (answer) {
      next();
    } else {
      next(false);
    }
  },
  computed: mapState({
    name: (state) => state.name,
    count: (state) => state.count,
  }),
  methods: {
    passData() {
      let uid = 123;
      localStorage.setItem("uid", uid);
    },
    removeData() {
      if (confirm(localStorage.getItem("uid"))) {
        localStorage.removeItem("uid");
      }
    },
    add5() {
      store.dispatch({
        type: type.Increment,
        amount: 5,
      });
    },
    remove2() {
      store.dispatch({
        type: type.Decrement,
        amount: 2,
      });
    },
  },
};
</script>

<style>
</style>