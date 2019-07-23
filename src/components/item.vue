<template>
  <div id>
      <div id="item">
          {{ item.name }}
          <BR/>
          {{  item.itemCondition }}
          <BR/>
          {{  item.description }}
      </div>
      <div id="commentaries">

      </div>
  </div>
</template>

<script>
import service from "../_services/item";

export default {
  data() {
    return {
        itemId: this.$route.params.data,
        item: ""
    };
  },

  created() {
      this.findItemById();
      
  },

  methods: {

      findItemById() {
          service.findItemById(this.itemId).then(response => {
              this.item = response.data.data;
          })
      }

  }
};
</script>

<style>
</style>

