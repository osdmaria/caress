<template>
  <div class="signIn d-flex flex-column align-center">
    <v-card class=" pb-8 mt-16">
      <form action="" class="d-flex flex-column align-center">
        <h2 class="pt-10 pb-10">Sign in</h2>
        <p class="pl-10 pr-10">
          Hey it's good to see you again dear
          <span class="DarkBlue--text">Doctor</span>
        </p>
        <input type="text" placeholder="Enter your email" />
        <input type="password" placeholder="Your password" />
        <button class="signin-button CremyColor mt-5 mb-5">Sign In</button>
        <p>- Or Sign in with -</p>
        <div>
          <button class="ma-2">
            <font-awesome-icon icon="fa-brands fa-google" /> Google
          </button>
          <button class="ma-2">
            <font-awesome-icon icon="fa-brands fa-facebook" /> Facebook
          </button>
        </div>
        <p class="pt-5 pb-5">
          Don't have an account? <span class="DarkBlue--text">Sign up Now</span>
        </p>
      </form>
    </v-card>
    <div class="pt-10 pb-16">
      <img src="../assets/Caress (2).png" width="100" alt="" />
    </div>
  </div>
</template>


<script>
export default {};
</script>

<style>
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
.v-card {
  border-radius: 20px !important;
  width: 30em;
}
p {
  font-size: 15px;
}
.signIn {
  background-image: url("../assets/Signin BG.png");
  background-size: cover;
  background-position: center;
}
</style>
