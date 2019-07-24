<template>
  <div id="app">
    <div id="menu">
      <categoriesMenu />
    </div>

    <div id="item" class="item">
      <h3>Yu-Gi-Oh rare card</h3>
      <div id="item-img" class="item-img">
        <picture>
          <img src="../assets/yugioh.jpg" height="264" width="164" class="img" />
        </picture>
      </div>
      <h4>Trade: Exchange</h4>
      <h4>Condition: Mint</h4>
      <h4>Descritpion:</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae. In nulla posuere sollicitudin aliquam. Nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Lacus vestibulum sed arcu non. Egestas pretium aenean pharetra magna. Sed blandit libero volutpat sed cras ornare arcu. Feugiat vivamus at augue eget arcu dictum varius duis. Magna sit amet purus gravida quis blandit turpis cursus in. Convallis aenean et tortor at risus viverra.</p>
      <div class="buttons">
        <div id="offer" class="right-offer">
          <div class="field has-addons">
            <div class="control">
              <input class="input" type="text" placeholder="Place offer" />
            </div>
            <div class="control">
              <a class="button is-info">Offer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />

    <div id="commentaries" class="commentaries">
      <h4>Commentaries</h4>
      <div id="commentary" class="commentary" v-for="commentary in commentaries" :key="commentary.id">
          <p> User:   <strong> {{ commentary.profile }} </strong> </p>
          <p>{{ commentary.commentary }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import service from "../_services/item";
import categoriesMenu from "./categoriesMenu";

export default {
  components: {
    categoriesMenu
  },

  data() {
    return {
      itemId: this.$route.params.data,
      item: "",
      commentaries: []
    };
  },

  created() {
    this.findItemById();
  },

  methods: {
    findItemById() {
      service.findItemById(15).then(response => {
        this.item = response.data.data;
        this.commentaries = this.item.commentaries;
        this.$log.info("Commentaries -> ", this.commentaries);
      });
    }
  }
};
</script>

<style>
.item {
  background-color: #99badd;

  border-left: 6px solid black;
  border-radius: 5px;
  border-width: 5px;

  margin-top: 30px;
  margin-bottom: 20px;
  margin-right: 5px;
  margin-left: 20px;

  padding-top: 2px;
  padding-bottom: 20px;
  padding-right: 5px;
  padding-left: 20px;
}

.img {
  border: 6px solid black;

  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 10px;
  margin-left: 20px;
}

.right-offer {
  position: relative;
  left: 930px;
}

.commentaries {
  position: relative;
  left: 10px;

  border: 1px solid black;
  border-radius: 5px;
}
</style>

