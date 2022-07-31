<template>
  <div class="navbar">
    <div class="d-flex">
      <div class="logo-container">
        <img src="../assets/Caress.png" alt="" width="110" />
      </div>
      <div class="list-container">
        <ul class="d-flex justify-space-between">
          <li>Home</li>
          <li>About</li>
          <li>I'm a Parent</li>
          <li>Become a Doctor</li>
          <li>Sign in Now <font-awesome-icon icon="fa-solid fa-arrow-right" class=" ml-3"/></li> 
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar{
  padding: 1.5em 3em 0 3em;
}
ul {
  list-style: none;
}
.list-container{
  width: 50%;
}
.logo-container{
  width: 50%;
}
</style>
