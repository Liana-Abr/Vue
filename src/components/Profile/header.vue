<template>
  <header class="header_container">
    <a href="#">Главная</a>
    <a href="#">Заказчикам</a>
    <a href="#">Исполнителям</a>

    <button v-on:click="modalOpen">Вход</button>
  </header>

  <div class="modal_container" :style="{display: modalActivity ? 'flex' : 'none'}">
    <h3>Регистрация</h3>
    <button v-on:click="modalClose" class="modal-close">X</button>
    <input type="text" placeholder="Имя">
    <input type="email" placeholder="name@mail.ru">
    <input type="password" placeholder="Пароль">
    <input type="password" placeholder="Повторите пароль">
    <input type="submit"/>
<!--    <div class="modal_container__radio">-->
<!--      <p>Кем вы являетесь?</p>-->
<!--      <label for="contactChoice3">Исполнитель</label>-->
<!--      <input type="radio"-->
<!--             name="who" value="Исполнитель">-->

<!--      <label for="contactChoice3">Заказчик</label>-->
<!--      <input type="radio"-->
<!--             name="who" value="Заказчик">-->
<!--    </div>-->
  </div>

</template>

<script>
  export default {
    name: "page-header",
    data(){
      return {
        modalActivity: false,
      }
    },
    methods:{
      modalOpen(){
        this.modalActivity = true;
      },
      modalClose(){
        this.modalActivity = false;
      }
    }
}
</script>

<style>

.modal_container{
  font-family: 'Rubik', sans-serif;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin-bottom: 5px;
  height: auto;
  border-radius: 5px;
  background-color: #2f2f2f;
  color: white;
  flex-direction: column;
  position: fixed;
  top: 20vh;
  left: 70vh;
  z-index: 99;
}

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
.modal_container__radio{
margin-left: 20px;
}
.modal-close{
  position: relative;
  left: 90px;
  bottom: 40px;
  cursor: pointer;
}
.header_container{
  box-shadow: 0 8px 6px -6px black;
  padding: 0 0 20px 0;
  min-width: 200px;
  font-family: 'Rubik', sans-serif;
  width: 100%;
  position: relative;
  margin: 30px 0 30px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header_container a{
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-weight: bold;
}
.header_container button{
  background-color: #e3fe52;
  border-radius: 5px;
  border: none;
  cursor:pointer;
}
</style>
