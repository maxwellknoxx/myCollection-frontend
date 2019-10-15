<template>
  <div id="app">
    <header>
      <div class="bs-example">
        <nav class="navbar navbar-expand-md navbar-dark bg-primary">
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav" v-if="!loggingIn">
              <a href="#">
                <router-link to="/login" class="nav-item nav-link">Login</router-link>
              </a>
              <a href="#">
                <router-link to="/categories" class="nav-item nav-link">Categories</router-link>
              </a>
            </div>
             <div class="navbar-nav" v-else>
              <a href="#">
                <router-link to="/publish" class="nav-item nav-link">Publish an item</router-link>
              </a>
              <a href="#">
                <router-link to="/categories" class="nav-item nav-link">Categories</router-link>
              </a>
            </div>
            <form class="form-inline ml-auto">
              <input type="text" class="form-control mr-sm-2" placeholder="Search" />
              <button type="submit" class="btn btn-outline-light">Search</button>
            </form>
          </div>
        </nav>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
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
      if (localStorage.getItem("isLogged")) {
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
.bs-example {
  margin: 20px;
}
</style>
