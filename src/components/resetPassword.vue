<template>
  <div id="app">
    <h1>RESET PASSWORD</h1>
    {{ message }}
    <div class="centerForm">
      <form @submit.prevent="reset">
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              type="password"
              v-validate="'required'"
              name="password"
              placeholder="Password"
              ref="password"
              v-model="userInformation.password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              v-validate="'required|confirmed:password'"
              class="input"
              name="password_confirmation"
              type="password"
              placeholder="Password, Again"
              data-vv-as="password"
              v-model="userInformation.retypedPassword"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success" v-if="!errors.has('password_confirmation')">Reset</button>
          </p>
        </div>

        <!-- ERRORS -->
        <div class="alert alert-danger" v-show="errors.any()">
          <div v-if="errors.has('password')">{{ errors.first('password') }}</div>
          <div
            v-if="errors.has('password_confirmation')"
          >{{ errors.first('password_confirmation') }}</div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import service from "../_services/user";

export default {
  data() {
    return {
      userInformation: {
        id: 3,
        password: "",
        retypedPassword: ""
      },
      message: ""
    };
  },

  methods: {
    reset() {
      this.check();
    },

    check() {
      service.update(this.userInformation).then(response => {
        if (response.data.status) {
          alert("Password updated!");
          this.$router.push("/login");
        } else {
          this.setMessage(response.data.message);
        }
      });
    }
  },

  setMessage(msg) {
    this.message = msg;
  }
};
</script>

<style>
</style>
