<template>
  <v-app>
    <v-main id="app">
      <router-view/>
    </v-main>
  </v-app>
 
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
#app{
  font-family: 'Poppins', sans-serif;
}
</style>
