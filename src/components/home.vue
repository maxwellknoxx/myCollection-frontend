<template>
  <div id="app">
    <h1>Hi {{user.firstName}}!</h1>
    <p>You're logged in with Vue + Vuex & JWT!!</p>
    <h3>Users from secure api end point:</h3>
    <em v-if="users.loading">Loading users...</em>
    <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
    <ul v-if="users.items">
      <li v-for="user in users.items" :key="user.id">{{user.firstName + ' ' + user.lastName}}</li>
    </ul>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>

    <h2>Welcome do My Collection</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisis mauris sit amet massa vitae. In nulla posuere sollicitudin aliquam. Nibh mauris cursus mattis molestie a iaculis at. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Lacus vestibulum sed arcu non. Egestas pretium aenean pharetra magna. Sed blandit libero volutpat sed cras ornare arcu. Feugiat vivamus at augue eget arcu dictum varius duis. Magna sit amet purus gravida quis blandit turpis cursus in. Convallis aenean et tortor at risus viverra.</p>
    <p>Proin sed libero enim sed faucibus turpis in eu mi. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. In est ante in nibh mauris. Nisi vitae suscipit tellus mauris a diam. Arcu ac tortor dignissim convallis aenean et tortor at. Nibh ipsum consequat nisl vel pretium. Dictumst quisque sagittis purus sit amet volutpat consequat. Eu volutpat odio facilisis mauris sit amet massa. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Eget arcu dictum varius duis at consectetur lorem donec. Urna condimentum mattis pellentesque id. Pretium viverra suspendisse potenti nullam ac. Tortor dignissim convallis aenean et tortor at risus. Pellentesque elit eget gravida cum sociis natoque penatibus. Neque ornare aenean euismod elementum nisi quis. Purus non enim praesent elementum. Cras ornare arcu dui vivamus arcu felis bibendum.</p>
    
  </div>
</template>


<script>
export default {
  computed: {
    user() {
      return this.$store.state.authentication.user;
    },
    users() {
      return this.$store.state.users.all;
    }
  },
  created() {
    this.$store.dispatch("users/getAll");
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
