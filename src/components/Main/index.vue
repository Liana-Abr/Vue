<!--место где отображаются страницы-->
<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "main-container",
}
</script>

<style>
  .wrapper{
    padding: 50px calc(50% - 600px);
    min-height: calc(100vh - 100px);
    box-sizing: border-box;
  }
</style>
