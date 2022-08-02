<template>
  <div class="signIn d-flex flex-column align-center">
    <v-stepper v-model="e1" class="d-flex flex-column align-center mt-16">
      <h2 class="pt-10 pb-10">Sign up</h2>
      <p class="pl-10 pr-10">
        Hey, Enter your details to sign up as a
        <span class="DarkBlue--text">Doctor</span>
      </p>
      <v-stepper-items>
        <v-stepper-content step="1">
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Your password" />
          <input type="password" placeholder="Verify your password" />
          <button class="signin-button CremyColor mt-5 mb-5" @click="e1 = 2">
            Next
          </button>
          <p>- Or Sign in with -</p>
          <div>
            <button class="ma-2">
              <font-awesome-icon icon="fa-brands fa-google" /> Google
            </button>
            <button class="ma-2">
              <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook
            </button>
          </div>
        </v-stepper-content>

        <v-stepper-content step="2">
          <input type="number" placeholder="Phone number" />
          <input type="text" placeholder="Address" />
          <input type="text" placeholder="Specialty" />
          <input type="file" placeholder="Degree proof" />
          <!-- <v-text-field
      label="Main input"
      :rules="rules"
      hide-details="auto"
      outlined
    ></v-text-field> -->
          <button class="signin-button CremyColor mt-5 mb-5">Sign Up</button>
          <p class="font-weight-medium" @click="e1 = e1 - 1">Back</p>
        </v-stepper-content>
      </v-stepper-items>
      <p class="pt-5 pb-5">
        Already have an account?
        <router-link to="/signin"
          ><span class="DarkBlue--text">Sign in Now</span>
        </router-link>
      </p>
    </v-stepper>
    <div class="pt-10 pb-16">
      <img src="../assets/Caress (2).png" width="100" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>

<style>
.v-stepper {
  width: 30em;
  border-radius: 20px !important;
}
.v-stepper__wrapper {
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
}
.v-stepper__items {
  width: 100%;
}
.v-stepper__content {
  padding: 0 !important;
}
.v-stepper__content p {
  cursor: pointer;
}
input {
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.136);
  padding: 0.7em;
  width: 70%;
  margin: 0.5em;
}
button {
  border-radius: 8px;
  border: solid 1px rgba(0, 0, 0, 0.136);
}
.signin-button {
  width: 70%;
}
p {
  font-size: 15px;
}
.signIn {
  background-image: url("../assets/Signup BG.png");
  background-size: cover;
  background-position: center;
}
a {
  text-decoration: none;
}
</style>