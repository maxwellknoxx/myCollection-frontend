<template>
  <div id="app">
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
                v-model="user.username"
                @click="cleanMessage()"
                @blur="validateUserField()"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input
                class="input"
                type="password"
                placeholder="Password"
                required
                v-model="user.password"
                @click="cleanMessage()"
                @blur="validateEmail()"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control">
              <button class="button is-success">Login</button>
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
import loginService from "../services/auth";

export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      message: ""
    };
  },

  methods: {
    login() {
      try {
        loginService.login(this.user).then(response => {
          this.$log.info("Login", response.data);

          this.$log.info("Login", response.data);
          this.$router.push("/main");
        });
      } catch (error) {
        this.setMessage("login does not match");
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
      if (!this.userInformation.userName.match("^[a-zA-Z0-9]*$")) {
        this.showMessage("Please, no space allowed");
        this.userInformation.userName = "";
      }
    },

    validateEmail() {
      if (
        !this.userInformation.email.match(
          "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
        )
      ) {
        this.showMessage("Please, insert a valide E-mail");
        this.userInformation.email = "";
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
