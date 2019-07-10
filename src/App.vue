<template>
  <div id="app">
    <!-- NavBar -->
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">Home</a>
          <a class="navbar-item">Categories</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong> <router-link to="/signup">Sign up</router-link> </strong>
              </a>
              <a class="button is-light"> <router-link to="/login">Log in</router-link> </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- NavBar -->
    <router-view></router-view>
  </div>
</template>

<script>

export default {};
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
</style>
