<template>
  <header class="header_container" >
    <router-link to="/">Главная</router-link>
    <div class="modal_container"  >
      <router-link to="/profile" :style="{display: seeLink ? 'flex' : 'none'}" >Профиль</router-link>
    </div>
<!--    <router-link to="/profile" >Профиль</router-link>-->
    <router-link to="/login">Вход</router-link>
    <router-link to="/test">Тест</router-link>
    <!-- сделать display или visibility hidden с помощью bind class(:class)-->
<!--    <router-link to="/auth">Auth</router-link>-->
<!--    <button v-on:click="modalOpen">Вход</button>-->
  </header>


</template>

<script>
  export default {
    name: "page-header",
    auth: false ,
    data(){
      return {
        seeLink: false
      }
    },
    created() {
      this.seeLink = !!localStorage.getItem("user");
    },

}
</script>

<style>
body{

  font-family: 'Rubik', sans-serif;
}
/*.modal_container{*/
/*  align-items: center;*/
/*  justify-content: center;*/
/*  width: 300px;*/
/*  margin-bottom: 5px;*/
/*  height: auto;*/
/*  border-radius: 5px;*/
/*  background-color: #2f2f2f;*/
/*  color: white;*/
/*  flex-direction: column;*/
/*  position: fixed;*/
/*  top: 20vh;*/
/*  left: 70vh;*/
/*  z-index: 99;*/
/*}*/

.modal_container input{
   border-radius: 5px;
   margin-bottom: 10px;
   width: 200px;
   height: 30px;
 }
input[type=submit]{

  padding: 5px;
  background-color: #ffffff;
  color: black;
  cursor: pointer;
}
/*.modal_container__radio{*/
/*margin-left: 20px;*/
/*}*/
/*.modal-close{*/
/*  position: relative;*/
/*  left: 90px;*/
/*  bottom: 40px;*/
/*  cursor: pointer;*/
/*}*/
.header_container{
  height: 110px;
  text-align: center;
  color: #FFFFFF;
  font-size: 24px;
  padding-top: 40px;
  background-color: white;
  box-shadow: -5px 10px 10px -8px #bdbdbd;
  border-radius: 25px;
  margin: 30px 0 30px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.header_container a{
  text-decoration: none;
  color: black;
  cursor: pointer;
  margin: 5px;
  font-weight: bold;
}
.header_container a:hover{
  color: #859430;
}

.header_container a:nth-child(3){
  background-color: #e3fe52;
  border-radius: 25px;
  padding: 10px;

}

.header_container button{
  background-color: #e3fe52;
  border-radius: 5px;
  border: none;
  cursor:pointer;
}
</style>
