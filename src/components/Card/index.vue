<template>
    <div class="card">{{text}}</div>
</template>

<script>
    export default {
      name: "my-card",
      props: ["text"]

    }
</script>
<style scoped>
      .card{
        padding: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 5px 0 darkred;
        border-radius: 10px;
        font-weight: bold;
      }
      h1{
        color: blueviolet;
      }
</style>
