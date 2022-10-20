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
    background-image: url("https://static-cse.canva.com/blob/944262/1600w-YTfEMXMuMCs.jpg");
    background-size: cover ;
    border-radius: 50%;
    /*background-color: #e3fe52;*/
    margin: auto;
  }
</style>
