<template>
  <div>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
    name: "SectionTitle",
    props:{
        title:{
            type: String,
            required: true,
        }
    }
}
</script>

<style>
h1{
  font-size: 45px;
  
}
</style>