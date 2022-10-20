<!-- <template>
 <div class="profile-portfolio"></div>
</template>

<script>
export default {
  name: "profile-project",
  
}
</script>

<style scoped>
    .profile__about__project{
        width: 100px;
        height: 100px;
        border-radius: 4px;
        background-color: cadetblue;
    }
</style> -->

<template>
    <div class="profile__portfolio__project" :style="{width: size + 'px',height:size + 'px','background-image': 'url(' + images[0] + ')' }"></div>
    <div class="profile__portfolio__project" :style="{width: size + 'px',height:size + 'px','background-image': 'url(' + images[1] + ')'}"></div>
    <div class="profile__portfolio__project" :style="{width: size + 'px',height:size + 'px','background-image': 'url(' + images[2] + ')'}"></div>
    <div class="profile__portfolio__project" :style="{width: size + 'px',height:size + 'px','background-image': 'url(' + images[3] + ')'}"></div>
    <div class="profile__portfolio__project" :style="{width: size + 'px',height:size + 'px','background-image': 'url(' + images[4] + ')'}"></div>
    <div class="profile__portfolio__project" :style="{width: size + 'px',height:size + 'px','background-image': 'url(' + images[5] + ')'}"></div>

  </template>
  <script>
  export default {
    name: "profile-project",
    data(){
      return {
        size: 200,
        images:[
            "https://i.graphicmama.com/blog/wp-content/uploads/2020/02/25102210/AESTHETIC-POSTER-DESIGN.jpg",
            "https://thedesignest.net/wp-content/uploads/2022/03/How-To-Spot-Bad-Graphic-Design.jpg",
            "https://images.wondershare.com/mockitt/graphic-design/website-3d-graphic-design-example.jpg",
            "https://stadamedia.co.uk/wp-content/uploads/2020/05/WORK-SAMPLES-08.jpg",
            "https://venngage-wordpress.s3.amazonaws.com/uploads/2018/01/Bright-Bold-Social-Media-Graphic-Design-Example-2.jpg",
            "https://www.selfmadedesigner.com/wp-content/uploads/2020/06/Oli-Stelander-continuation-example-1.png"
        ]
      }
    }
  }
  </script>
  <style scoped>
    .profile__portfolio__project{
      background-repeat: no-repeat;
      background-size: cover;
      /*background-color: #e3fe52;*/
      border-radius: 5px;
      margin: 10px;
    
    }
  </style>
  