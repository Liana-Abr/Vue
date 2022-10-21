<!--<template>-->
<!--  <h1>{{title}}</h1>-->
<!--  <div class="cards">-->
<!--    -->
<!--    <my-card v-for="d in days" v-bind:text="d" v-bind:key="d"></my-card>-->
<!--  </div>-->
<!--</template>-->
<template>
  <page-header></page-header>
  <main-page></main-page>
</template>

<script>
  // import Card from "./components/Card/index.vue";

  import Header from "@/components/Profile/header";
  import Main from "@/components/Main";


  export default {
    name: 'App',
    components: {
      "page-header": Header,
      "main-page": Main

    },
    data(){
      return {
        title: "Графика / здание",
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"

        ]
      }
    }
  }
</script>
<style>
body{
  min-width: 600px;

}

    /*h1{*/
    /*  color: red;*/
    /*}*/
    /*.cards{*/
    /*  display:grid;*/
    /*  grid-template-columns: repeat(4,120px);*/
    /*  gap: 20px;*/
    /*}*/
</style>
