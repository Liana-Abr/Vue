<!--место где отображаются страницы-->
<template>
  <div class="wrapper">
    <router-view @showPopup="$emit('showPopup')" :userData="userData"></router-view>
  </div>
</template>

<script>
export default {
  name: "main-container",
  props: ["userData"]
}
</script>

<style>
  .wrapper{
    padding: 50px 500px;
    /*padding: 50px calc(50% - 600px);*/
    min-height: calc(100vh - 100px);
    box-sizing: border-box;
  }
</style>
