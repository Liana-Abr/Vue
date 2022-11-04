<template>
  <div class="profile__image" :style="{width: size + 'px',height:size + 'px'}"></div>
</template>
<script>
export default {
  name: "profile-picture",
  data(){
    return {
      size: 200
    }
  }
}
</script>
<style scoped>
  .profile__image{
    background-image: url("https://cdn-icons-png.flaticon.com/512/206/206881.png");
    background-size: cover ;
    border-radius: 50%;
    /*background-color: #e3fe52;*/
    margin: auto;
  }
</style>
