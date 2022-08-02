<template>
  <div>
    <div v-bind:class="[ steps % 2 != 0 ? 'flex-column ' : 'flex-column-reverse', 'd-flex align-center']" >
      <div>
        <h3 class=" font-weight-medium">{{ title }}</h3>
      </div>
      <v-card class="card">
        <img v-bind:src="image" width="180" />
      </v-card>
      <div class="white-space"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SpecificationCard",
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      required: true,
    },
    steps:{
      type: Number,
    }
  },
  methods:{
    event(n){
      return n;
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  border-radius: 20px !important;
  height: 230px;
  margin: 1em;
}
.card img{
  margin: 2em 1em;
}
.white-space{
  height: 80px;
}
</style>>

