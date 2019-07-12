<template>
  <div id="app">
    <div class="centerForm">
      {{ message }}
      <div class="container">
        <form @submit.prevent="checkInformation">
          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="email"
                placeholder="Your email"
                required
                v-model="userInformation.email"
                @blur="validateEmail()"
                @click="cleanMessage()"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
            </div>
          </div>

          <div class="field">
            <label class="label">Question</label>
            <div class="control">
              <div class="select">
                <select v-model="userInformation.question">
                  <option value="Select dropdown">Select dropdown</option>
                  <option>What is your favorite food?</option>
                  <option>What is your favorite color?</option>
                  <option>What is your favorite serie?</option>
                  <option>What is your team?</option>
                  <option>What is your best friend's name?</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Answer</label>
            <div class="control has-icons-left">
              <input
                class="input"
                type="text"
                placeholder="Your answer"
                required
                v-model="userInformation.answer"
              />
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Check</button>
            </div>
            <div class="control">
              <button class="button is-text">Cancel</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import service from "../_services/user";

export default {
  data() {
    return {
      userId: 3,
      userInformation: {
        name: "",
        username: "",
        password: "",
        email: "",
        role: ["user"],
        question: "",
        answer: "",
        location: ""
      },
      message: ""
    };
  },

  methods: {
    checkInformation() {
      this.$log.info(this.userInformation);
      service
        .checkInformation(this.userInformation)
        .then(response => {
          if(response.data.status) {
            this.$router.push("/resetPassword");
          }
        });
    },

    validateEmail() {
      if (
        !this.userInformation.email.match(
          "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
        )
      ) {
        this.setMessage("Please, insert a valide E-mail");
        this.userInformation.email = "";
      }
    },

    setMessage(msg) {
      this.message = msg;
    },

    cleanMessage() {
      this.message = "";
    }
  }
};
</script>

<style>
</style>
