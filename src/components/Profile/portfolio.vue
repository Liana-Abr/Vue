<template>
<!--  блок с работами-->
 <div class="profile___portfolio">
  <profile-project :userData="userData"></profile-project>
    
 </div>
</template>

<script>

import Project from "@/components/Profile/project";

export default {
  name: "profile-portfolio",
  props:["userData"],
  components:{
    "profile-project": Project
  },
  data(){
    return {
      size: 200,
      title: [
        "first",
        "second",
        "third",
        "fifth"
      ],
      projects:[],
    }
  },
  created() {
    console.log(this.userData);
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
    .portfolio {
      padding: 30px 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
    .portfolio__item {
      padding: 30px;
    }
</style>