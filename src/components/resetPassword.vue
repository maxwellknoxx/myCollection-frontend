<template>
  <div id="app">
    <h1>RESET PASSWORD</h1>

    <div class="centerForm">
      <form @submit.prevent="reset">
        <div class="field">
          <p class="control has-icons-left">
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
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              type="password"
              placeholder="Retype Password"
              required
              v-model="userInformation.retypedPassword"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-key"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success">Reset</button>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import service from "../services/user"

export default {

data() {
    return {
        userInformation: {
            id: "",
            password: "",
            retypedPassword: ""
        },
        message: ""
    }
},

methods: {
    reset() {
        this.check();
    },


    check() {
        if(this.password != this.retypedPassword) {
            this.setMessage("Please, password must match!");
        } else  {
            service.update(this.userInformation).then(response => {
                this.$log.info("resetPassowrd", response.data.message);
            })
        }
    },

    setMessage(msg){
        this.message = msg;
    }

}

};
</script>

<style>
</style>
