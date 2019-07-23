<template>
  <div id="app">
    <categoriesMenu />

    <div id="recent-items">
      <h1>items</h1>

      <div class="w3-container">
        <div class="w3-card" style="width:25%">
          <router-link :to=" '/item/' + itemsByCategory[0].id "> 
          <img src="../assets/yugioh.jpg" alt="Person" height="264" width="164" />
          </router-link>
          <div class="w3-container">
            <h4>
              <b>{{ itemsByCategory[0].name }}</b>
            </h4>
            <p>{{ itemsByCategory[0].description }}</p>
            <h4> 
              <p>{{ itemsByCategory[0].profile.location }}</p>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemsService from "../_services/item";
import categoriesMenu from "./categoriesMenu";

export default {
  components: {
    categoriesMenu
  },

  data() {
    return {
      categoryId: this.$route.params.data,
      itemsByCategory: []
    };
  },

  created() {
    this.findAllItemsByCategory();
  },

  methods: {
    findAllItemsByCategory() {
      itemsService.findAllItemsByCategory(this.categoryId).then(response => {
        this.itemsByCategory = response.data.listData;
      });
    }
  }
};
</script>

<style>
</style>


