<template>
    <button >{{text}}</button>
</template>

<script>
export default {
    name:"ButtonUsed",
    props:{
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
button{
    border-radius: 20px;
    padding: 0.5em 1.5em;
    box-shadow: 1px 1px rgba(0, 0, 0, 0.101);
}
</style>