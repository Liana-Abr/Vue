<template>
    <h1 class="profile__title">
        {{title}}
    </h1>
<!--  <div>Возвраст:-->
<!--    <button @click="dec">-</button>-->
<!--    {{age}}-->
<!--    <button @click="inc">+</button>-->
<!--  </div>-->
</template>
  <script>

  export default {
    name: "profile-title",
    data(){
      return {
        title: "Графический дизайнер" ,
        age:20
      }
    }
    // methods:{
    //   inc(){
    //     this.age++
    //   },
    //   dec(){
    //     this.age > 0 && this.age--
    //   }
    // }
  }
  </script>
  <style scoped>
  h1{
    color: black;
  }
  </style>
