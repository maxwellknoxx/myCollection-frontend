<template>
  <div id="app">
    <!-- NavBar -->
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <router-link to="/home">Home</router-link>
          </a>
          <a class="navbar-item">
            <router-link to="/categories">Categories</router-link>
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <div id="search" class="right">
                <div class="field has-addons">
                  <div class="control">
                    <input class="input" type="text" placeholder="Find an item" />
                  </div>
                  <div class="control">
                    <a class="button is-info">Search</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary" v-if="!loggingIn">
                <strong>
                  <router-link to="/signup">Sign up</router-link>
                </strong>
              </a>
              <a class="button is-primary" v-if="loggingIn">
                <strong>
                  <router-link to="/publish">Publish item</router-link>
                </strong>
              </a>
              <a class="button is-light" v-if="loggingIn">
                <router-link to="/login">Log out</router-link>
              </a>
              <a class="button is-light" v-if="!loggingIn">
                <router-link to="/login">Log in</router-link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- NavBar -->
    <div v-if="alert.message" :class="`alert ${alert.type}`">{{alert.message}}</div>
    <router-view :key="$route.fullPath"></router-view>
    <br />
    <br />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          {{ loggingIn }}
          <strong>MyCollection</strong> by
          <a href="https://github.com/maxwellknoxx">Maxwell Santos</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  computed: {
    alert() {
      return this.$store.state.alert;
    },

    loggingIn() {
      if(localStorage.getItem("isLogged")) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    $route(to, from) {
      // clear alert on location change
      this.$store.dispatch("alert/clear");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.right {
  position: absolute;
  right: 0px;
  width: 300px;
  padding: 10px;
}

</style>
