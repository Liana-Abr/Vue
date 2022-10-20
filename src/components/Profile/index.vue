<!--<template>-->
<!--  <h1>{{title}}</h1>-->
<!--  <div class="cards">-->
<!--    -->
<!--    <my-card v-for="d in days" v-bind:text="d" v-bind:key="d"></my-card>-->
<!--  </div>-->
<!--</template>-->
<template>

  <page-header></page-header>
  <div class="profile">
    <div class="profile__contacts">
      <profile-picture></profile-picture>
      <h2>{{name}}</h2>
      <div class="profile__item">
        <profile-contacts v-for="(c,i) in contacts" :key="i" :type="c.type" :data="c.value"/>
      </div>
      <div class="profile-stats__item">
        <profile-stats v-for="(i,v) in stats" :key="v" :icon="i.icon" :data="i.value"/>
      </div>
    </div>

    <div class="profile__about">
      <profile-title/>
      <div class="profile__portfolio__container">
        <profile-portfolio>
        </profile-portfolio>
      </div>

      <profile-tools></profile-tools>
     <profile-works v-for="(c,i) in works" :key="i" :year="c.year" :text="c.text" ></profile-works>


    </div>
  </div>
</template>

<script>
import Picture from "@/components/Profile/picture";
import Contacts from "@/components/Profile/contacts";
import Stats from "@/components/Profile/stats";
import Title from "@/components/Profile/title";
import Portfolio from "@/components/Profile/portfolio";
import Tools from "@/components/Profile/tools";
import Work from "@/components/Profile/work";
import Header from "@/components/Profile/header";



export default {
  name: 'user-profile',
  components:{
    "profile-picture": Picture,
    "profile-contacts": Contacts,
    "profile-stats": Stats,
    "profile-title": Title,
    "profile-portfolio": Portfolio,
    "profile-tools": Tools,
    "profile-works": Work,
    "page-header": Header,

  },
  data(){
    return {
      name: "Антон Иванов",
      title: "Графический дизайнер",
      // contacts: ["+79993332332", "name@mail.com","@name"]
      contacts: [
          {type: "phone", value:"+7(123)456-78-90"},
          {type: "email", value:"name@mail.com"},
          {type: "tg", value:"@antoshka"},
          {type: "vk", value:"https://vk.com/1234"}
      ],
      stats:[
        {icon: "bi bi-heart",value: "100"},
        {icon: "bi bi-person",value: "200"},
        {icon: "bi bi-arrow-up",value: "10%"},
      ],
      works: [
        {year: "2020", text: "Компания 1"},
        {year: "2019", text: "Компания 2"}
      ]
    }
  }
}
</script>
<style scoped>
  .profile{
    font-family: 'Rubik', sans-serif;
    display: grid;
    grid-template-columns: 30% 1fr;
    /*gap: 30px;*/
    width: 1000px;
    margin: auto;
  }
  .profile__contacts{
    background-color: #222;
    color: #fff;
    padding: 30px;
  }
  .profile-stats__item{
    background-color: #222;
    color: #fff;
    padding: 30px;
    display: flex;
    justify-content: space-between;
  }
  .profile__about{
    border: 1px solid #c8c8c8;
    padding: 30px;
    width: auto;
}
  .profile__item{
    display: flex;
    flex-direction: column;

  }

</style>
