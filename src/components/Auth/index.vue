<template>
<div class="auth_container">
  <h3>Регистрация</h3>
  <input type="text" placeholder="Имя">
  <input type="email" placeholder="Почта">
  <input type="password" placeholder="Пароль">
  <button type="submit">Зарегестрироваться</button>
  <p>Уже зарегестрированы?  <router-link to="/login">Войти</router-link> </p>
</div>


</template>

<script>
export default {
  name: 'auth-page'
}

</script>

<style>

.auth_container{
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  height: auto;
  background-color: #c8c8c8;
  display: flex;
  flex-direction: column;
}
.auth_container input{
  margin-bottom: 10px;
  width: auto;
  height: 40px;
  border-radius: 5px;
  border: none;
}
.auth_container button{
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #2874f8;
  color: white;
}
</style>
