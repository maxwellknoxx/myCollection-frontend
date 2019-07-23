<template>
  <div id="app">
    <categoriesMenu />

    <div id="recent-items">
      <h1>Recent items</h1>

      <div class="w3-container">
        <div class="w3-card" style="width:25%">
          <img src="../assets/yugioh.jpg" alt="Person" height="264" width="164" />
          <div class="w3-container">
            <h4>
              <b>{{ allRecentItems[0].name }}</b>
            </h4>
            <p>{{ allRecentItems[0].description }}</p>
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
