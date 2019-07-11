<template>
  <div id="app">
    <div id="search">
      <div class="field has-addons">
        <div class="control">
          <input class="input" type="text" placeholder="Find an item" />
        </div>
        <div class="control">
          <a class="button is-info">Search</a>
        </div>
      </div>
    </div>

    <div id="categories" class="categories">
      <table>
        <thead>
          <tr>Category</tr>
        </thead>

        <tbody>
          <tr v-for="category in allCategories" :key="category.id">
            <router-link :to=" '/category/' + category.id ">{{ category.name }}</router-link>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="recent" class="recent">
      <table>
        <thead>
          <tr>
            <h2>Recent items</h2>
          </tr>
        </thead>

        <tbody class="centered-items">
          <!-- cada um dos items mais recentes  -->
          <tr class="recent">
            <div class="card">
              <div class="card-image">
                <figure class="image is-128x128">
                  <img
                    src="https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1130080.jpg"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">Yu-gi-oh card</p>
                    <p class="subtitle is-6">Exchange</p>
                    <p class="title is-4">Dublin</p>
                    <p class="subtitle is-6">Rare good card</p>
                  </div>
                </div>
              </div>
            </div>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import service from "../services/category";

export default {
  data() {
    return {
      allCategories: []
    };
  },

  created() {
    //this.findAll();
  },

  methods: {
    findAll() {
      service.findAll().then(response => {
        this.allCategories = response.data.listData;
      });
    }
  }
};
</script>

<style>
.categories {
  margin: auto;
  width: 50%;
  border: 3px solid red;
  padding: 10px;
}

.centered-items {
  overflow: hidden;
  zoom: 1;
}

.recent {
  padding: 20px 10px;
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
