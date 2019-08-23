<template>
  <div id="app">
    <header>
      <div class="bs-example">
        <nav class="navbar navbar-expand-md navbar-dark bg-primary">
          <!--  <a href="#" class="navbar-brand">Brand</a>
          <button
            type="button"
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>-->

          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="#" class="nav-item nav-link">
                <router-link to="/login">Login</router-link>
              </a>
              <a href="#" class="nav-item nav-link">
                Sign up
              </a>
              <a href="#" class="nav-item nav-link">Products</a>
            </div>
            <form class="form-inline ml-auto">
              <input type="text" class="form-control mr-sm-2" placeholder="Search" />
              <button type="submit" class="btn btn-outline-light">Search</button>
            </form>
          </div>
        </nav>
      </div>
    </header>

    <router-view></router-view>
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
