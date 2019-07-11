<template>
  <div id="app">
    {{ message }}
    <form @submit.prevent="signup">
      <div class="centerForm">
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left">
            <input
              class="input"
              type="text"
              placeholder="Your name"
              required
              v-model="userInformation.name"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-signature"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left">
            <input
              class="input"
              type="text"
              placeholder="user name"
              required
              v-model="userInformation.username"
              @blur="validateUserField()"
              @click="cleanMessage()"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left">
            <input
              class="input"
              type="password"
              placeholder="password"
              required
              v-model="userInformation.password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
          </div>
        </div>

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

        <div class="field">
          <label class="label">Location</label>
          <div class="control has-icons-left">
            <input class="input" placeholder="Location" required v-model="userInformation.location" />
            <span class="icon is-small is-left">
              <i class="fas fa-globe-americas"></i>
            </span>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-text"><router-link to="/home">Cancel</router-link></button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import service from "../services/auth";

export default {
  data() {
    return {
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
    signup() {
      this.$log.info("signup", this.userInformation);
      service.signup(this.userInformation).then(response => {
        if (response.data == "Sucess") {
         alert("User " + this.userInformation.userName + " has been registred!");
          this.$log.info("signup", response.data);
          this.$router.push("/login");
        } else {
          this.setMessage(response.data);
        }
      });
    },

    setMessage(msg) {
      this.message = msg;
    },

    cleanMessage() {
      this.message = "";
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
    },

    validateUserField() {
      if (!this.userInformation.userName.match("^[a-zA-Z0-9]*$")) {
        this.showMessage("Please, no space allowed");
        this.userInformation.userName = "";
      }
    }
  }
};
</script>


<style>
</style>
