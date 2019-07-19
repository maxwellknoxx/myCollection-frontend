<template>
  <div id="app">
    <div id="categories" class="categories">
      <h1>Categories</h1>

      <ul>
        <li>
          <router-link to='/category/1'>Cards</router-link>
        </li>
        <li>
          <router-link to='/category/2'>Action Figures</router-link>
        </li>
        <li>
          <router-link to='/category/3'>Magazines</router-link>
        </li>
        <li>
          <router-link to='/category/4'>Digital media</router-link>
        </li>
        <li>
          <router-link to='/category/4'>Coins</router-link>
        </li>
      </ul>
    </div>

    <div id="recent-items">
      <h1>Recent items</h1>

      <div class="w3-container">
        <div class="w3-card" style="width:25%">
          <img src="../assets/yugioh.jpg" alt="Person" height="264" width="164" />
          <div class="w3-container">
            <h4>
              <b>{{ allItems[0].name }}</b>
            </h4>
            <p>{{ allItems[0].description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import itemsService from "../_services/item";

export default {
  data() {
    return {
      allItems: []
    };
  },

  created() {
    this.findAllItems();
  },

  methods: {

    findAllItems() {
      itemsService.findAll().then(response => {
        this.allItems = response.data.listData;
        this.$log.info(this.allItems);
      })
    }

  }
};
</script>

<style>
.categories {
  float: left;
  width: 300px;
  border: 3px solid;
  padding: 10px;
  margin-bottom: 50px;
}

.recent-items {
  padding: 70px 0;
  position: relative;
  text-align: center;
}

.recent {
  padding: 20px 10px;
  margin: 20px;
  border: 1px solid black;
}

.recent-td {
  padding: 20px 10px;
  margin: 20px;
  border: #000000;
}

.VueCarousel-slide {
  position: relative;
  background: #42b983;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}

.description {
  background-color: #f8f8f8;
  overflow: hidden;
  padding: 10px 15px 17px 15px;
  border-top: 1px solid #dddddd;
  zoom: 1;
}

.name {
  color: #000000;
  font-weight: bold;
  vertical-align: bottom;
}

.trade {
  color: #000000;
  font-weight: bold;
  vertical-align: bottom;
}

.location {
  color: #999;
  padding-top: 3px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
