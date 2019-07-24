<template>
  <div id="app">
    <categoriesMenu />
    <br />

    <div id="recent-items-txt" class="recent-items-txt">
      <h1>Recent items</h1>
    </div>

    <div class="columns">
      <div id="items" class="items" v-for="item in allRecentItems" :key="item.id">
        <figure>
          <router-link :to=" '/item/' + item.id ">
          <img src="../assets/yugioh.jpg" height="264" width="164" class="img" />
          </router-link>
        </figure>
        <p>
          <strong>Item:</strong>
          {{ item.name }}
        </p>
        <p>
          <strong>Trade:</strong>
          {{ item.trade }}
        </p>
         <p>
          <strong>Location:</strong>
          {{ item.profile.location }}
        </p>
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
      allRecentItems: []
    };
  },

  created() {
    this.findAllRecentItems();
  },

  methods: {
    findAllRecentItems() {
      itemsService.findAll().then(response => {
        this.allRecentItems = response.data.listData;
        this.$log.info(this.allRecentItems);
      });
    }
  }
};
</script>

<style>
.recent-items-txt {
  border: 1px;
}

.recent-items > div {
  position: center;
}

.items {
  background-color: #99badd;

  height: 380px;
  width: 300px;

  border-left: 6px solid black;
  border-radius: 5px;
  border-width: 5px;

  margin-top: 0px;
  margin-bottom: 20px;
  margin-right: 5px;
  margin-left: 20px;

  padding-top: 2px;
  padding-bottom: 20px;
  padding-right: 5px;
  padding-left: 20px;

}

.items > p {
  text-align: left;
}

.img {

  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 10px;
  margin-left: 20px;
}
</style>
