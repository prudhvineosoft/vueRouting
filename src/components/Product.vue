<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="product in productsData" :key="product.id">
        <div class="card" style="width: 18rem">
          <img
            :src="product.image"
            class="card-img-top"
            alt="{{product.pname}}"
            height="200"
            width="250"
          />
          <div class="card-body">
            <h5 class="card-title">Name :{{ product.pname }}</h5>
            <p class="card-text">
              Price : <b>{{ product.price }} </b><br />
              Quantity : <b>{{ product.quantity }} </b><br />
            </p>
            <button class="btn btn-danger" @click="delpro(product.id)">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return { productsData: undefined };
  },
  methods: {
    delpro(id) {
      console.log(id);
      const URL = "http://localhost:3001/products/";
      if (confirm("Do you want to delete it ?")) {
        axios.delete(`${URL}${id}`).then((res) => {
          if (res) {
            axios.get(URL).then((res) => {
              console.log(res.data);
              this.productsData = res.data;
            });
          }
        });
      }
    },
  },
  mounted() {
    const URL = "http://localhost:3001/products";
    axios.get(URL).then((res) => {
      console.log(res.data);
      this.productsData = res.data;
    });
  },
};
</script>

<style>
</style>