<template>
  <div id="app">
    
    <div class="alert alert-info">
      Username: test
      <br />Password: test
    </div>

    <div class="container">
      <h1>My Collection</h1>
      <br />
      <br />
      {{ message }}
      <div class="centerForm">
        <form @submit.prevent="login">
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="text"
                placeholder="username"
                required
                v-model="username"
                @click="cleanMessage()"
                @blur="validateUserField()"
                :class="{ 'is-invalid': submitted && !username }"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
            <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                placeholder="Password"
                required
                v-model="password"
                @click="cleanMessage()"
                :class="{ 'is-invalid': submitted && !password }"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
            <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success" :disabled="loggingIn">Login</button>
            </p>
          </div>
        </form>
      </div>

      <br />
      <br />
      <div class="centerForgotPassword">
        <p>
          Did you forget your password?
          <router-link to="/forgotPassword">Reset password</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      message: ""
    };
  },

  computed: {
    loggingIn() {
      return this.$store.state.authentication.status.loggingIn;
    }
  },

  created() {
    // reset login status
    this.$store.dispatch("authentication/logout");
  },

  methods: {
    login() {
      this.submitted = true;
      const { username, password } = this;
      const { dispatch } = this.$store;
      if (username && password) {
        dispatch("authentication/login", { username, password }).then(res => {
          this.$log.info('login', res);
        });
      }
    },

    cleanMessage() {
      this.setMessage("");
    },

    setMessage(msg) {
      this.$log.info("Login", msg);
      this.message = msg;
    },

    validateUserField() {
      if (!this.username.match("^[a-zA-Z0-9]*$")) {
        this.showMessage("Please, no space allowed");
        this.username = "";
      }
    }
  }
};
</script>


<style>
.centerForm {
  margin: auto;
  width: 50%;
  border: 3px solid;
  padding: 10px;
}

.centerForgotPassword {
  margin: auto;
  width: 50%;
  border: 3px solid red;
  padding: 10px;
}
</style>
