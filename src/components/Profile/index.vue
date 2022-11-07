<!--<template>-->
<!--  <h1>{{title}}</h1>-->
<!--  <div class="cards">-->
<!--    -->
<!--    <my-card v-for="d in days" v-bind:text="d" v-bind:key="d"></my-card>-->
<!--  </div>-->
<!--</template>-->
<!--страница профиля-->
<template>
  <div class="profile_container">
    <div class="left_part_profile">
      <div class="left-content">


        <button @click="addProject" class="action">
          <i class="bi bi-image-fill"></i>
          Добавить проект
        </button>

        <button class="action">
            <i class="bi bi-person-lines-fill"></i>
          Изменить данные
        </button>
        <button v-on:click="Exit" class="action">
          <i class="bi bi-box-arrow-right"></i>
          Выйти

        </button>
      </div>
    </div>

    <div class="right_part_profile">
      <div class="right-content">
        <div class="profile">
          <div class="profile__contacts">
            <div class="profile__image"></div>
            <h2>{{userData.name}}</h2>
            <div class="profile__item">
             <profile-contacts :userData="userData"/>
            </div>
            <div class="profile-stats__item">
              <profile-stats v-for="(i,v) in stats" :key="v" :icon="i.icon" :data="i.value"/>
            </div>
          </div>

          <div class="profile__about">
            <profile-title/>
            <div class="profile__portfolio__container">
              <profile-portfolio :userData="userData">
              </profile-portfolio>
            </div>

            <profile-tools></profile-tools>
            <profile-works v-for="(c,i) in works" :key="i" :year="c.year" :text="c.text" ></profile-works>


          </div>
        </div>

      </div>

    </div>




  </div>


</template>

<script>
import Contacts from "@/components/Profile/contacts";
import Stats from "@/components/Profile/stats";
import Title from "@/components/Profile/title";
import Portfolio from "@/components/Profile/portfolio";
import Tools from "@/components/Profile/tools";
import Work from "@/components/Profile/work";



export default {
  name: 'user-profile',

  components:{
    "profile-contacts": Contacts,
    "profile-stats": Stats,
    "profile-title": Title,
    "profile-portfolio": Portfolio,
    "profile-tools": Tools,
    "profile-works": Work,
  },
  props:["userData"],
      data() {
        return {
          profName: "",
          profEmail: "",
          name:"Антон",
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
      },
      methods:{
        Exit(){
          if(localStorage.getItem("user")){
            localStorage.removeItem("user")
            this.$router.replace("/");
          }else{
            alert("Вы уже вышли");
          }
        },
        addProject(){
         console.log(":)");
          this.$emit("showPopup");
        },

      //   profileUser: async function(e){
      //     e.preventDefault();
      //     let body = {
      //       name: this.profName,
      //       email: this.profEmail
      //     }
      //     const data = await fetch("https://dream-design-server.herokuapp.com/api/users/:id",{
      //       method: "get",
      //       headers:{
      //         "Content-Type": "application/json",
      //         "Accept": "application.json"
      //       },
      //       body: JSON.stringify(body)
      //     }).then(res => res.json());
      //     if(data.message === "ok"){
      //       alert(data.message)
      //     }
      // },

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

  .profile_container{
    text-align: center;
    color: #FFFFFF;
    font-size: 24px;
    padding-top: 40px;
    background-color: white;
    border-radius: 25px;
    display: flex;
    position: absolute;
    left: 15%;
    /* justify-content: space-around; */
    /* position: absolute; */
    /* width: 1400px; */
    /* margin: 0; */
    /* display: flex; */
    font-family: sans-serif;
  }
  /*.left_part_profile{*/
  /*  padding: 25px;*/
  /*}*/
  .left-content{
    background-color: white;
    width: 250px;
    padding: 20px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .left-content h2{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    gap: 6px;
    margin-bottom: 8px;
  }
  .left-content h2>span{
    font-weight: 400;
    font-size: .7em;
  }
  .action{
    display: flex;
    align-items: center;
    gap: 12px;
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    font-size: 20px;
    border: 1px solid;
    margin: 5px 0 0 0;
  }
  .action .icon{
    border: 1px solid black;
    width: 40px;
    height: 40px;
    font-size: 36px;

    /*border-radius: 25px;*/
  }
  .action:hover{
    color: #859430;
  }
  .right_part_profile{
    padding: 25px;
  }
  .right-content{
    width: 900px;
    min-height: 100%;

  }
  .right-content>div{
    background-color: white;
    border-radius: 4px;
  }
  .profile__image{
    background-image: url("https://cdn-icons-png.flaticon.com/512/206/206881.png");
    width: 200px;
    height: 200px;
    background-size: cover ;
    border-radius: 50%;
    /*background-color: #e3fe52;*/
    margin: auto;
  }
</style>
