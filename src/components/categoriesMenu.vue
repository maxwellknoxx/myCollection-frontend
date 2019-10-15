<template>
  <div id="app">
    <div id="categories" class="menu">
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to=" '/category/' + category.id "> {{ category.name}} </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { categoryService } from "../_services/category"

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
        categoryService.findAll().then(response => {
            this.categories = response ;
        })
    }
}

};
</script>


<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #99badd;
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #111;
  color: white;
}
</style>
