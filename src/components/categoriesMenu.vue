<template>
  <div id="app">
    <div id="categories" class="categories">
      <h1>Categories</h1>

      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to=" '/category/' + category.id "> {{ category.name}} </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import service from "../_services/category"

export default {
  data() {
    return {
      categories: []
    };
  },


created() {
    this.findAll();
}, 

methods: {
    findAll() {
        service.findAll().then(response => {
            this.categories = response.data.listData;
        })
    }
}

};
</script>


<style>
</style>
