<template>
  <div id="app">
    <div class="container">
      <div class="centerForm">
        <form>
          <div class="field">
            <label class="label">Item name</label>
            <div class="control has-icons-left">
              <input class="input" type="text" placeholder="Item name" v-model="item.name" />
              <span class="icon is-small is-left">
                <i class="fas fa-signature"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Description</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="text"
                placeholder="Description"
                
                v-model="item.description"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-signature"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Item condition</label>
            <div class="control has-icons-left">
              <input class="input" type="text" v-model="item.itemCondition" />
              <span class="icon is-small is-left">
                <i class="fas fa-signature"></i>
              </span>
            </div>
          </div>
          <div class="field">
            <label class="label">Trade</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="text"
                placeholder="Type of trade"
                
                v-model="item.Trade"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-signature"></i>
              </span>
            </div>
          </div>
          
          <div class="field">
            <div class="upload-multiple-images" style="display: flex; justify-content: center;">
              <label class="label">Photos</label>
              <vue-upload-multiple-image
                dropText
                @upload-success="uploadImageSuccess"
                @before-remove="beforeRemove"
                @edit-image="editImage"
                :data-images="item.images"
              ></vue-upload-multiple-image>
            </div>
            <button @click="uploadImageSuccess()">Bora</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        name: "",
        category: {
          id: ""
        },
        profile: {
          id: ""
        },
        itemCondition: "",
        description: "",
        images: [],
        Trade: "",
        status: false
      }
    };
  },

  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      // Upload image api
      // axios.post('http://your-url-upload', formData).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      } else {
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    }
  }
};
</script>

<style>
.upload-multiple-images {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


