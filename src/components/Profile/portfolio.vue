<template>
 <div class="profile___portfolio">
  <profile-project></profile-project>
    <!-- <div class="profile__portfolio__project"></div>
    <div class="profile__portfolio__project"></div>
    <div class="profile__portfolio__project"></div>
    <div class="profile__portfolio__project"></div>
    <div class="profile__portfolio__project"></div>
    <div class="profile__portfolio__project"></div> -->
    
 </div>
</template>

<script>
import Project from "@/components/Profile/project";
export default {
  name: "profile-portfolio",
  components:{
    "profile-project": Project
  }
  
}
</script>

<style scoped>
    .profile___portfolio{
      display: grid;
      grid-template-columns: repeat(3,1fr);
      /* background-color: blue; */
      height: auto;
    }
   
</style>