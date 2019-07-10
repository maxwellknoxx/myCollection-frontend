<template>
  <div id="app">
    <h2>Welcome do My Collection</h2>

    <div id="categories">
      <div class="columns">
        <div class="column">{{ category }}</div>
      </div>
    </div>
  </div>
</template>


<script>




export default {
  data() {
    return {
      category: ""
    };
  },

created () {

},

methods: {

}

};
</script>


<style>
h2 {
  font: 70px Tahoma, Helvetica, Arial, Sans-Serif;
  text-align: center;
}

p {
  font: 50 Tahoma, Helvetica, Arial, Sans-Serif;
  text-align: center;
}
</style>
