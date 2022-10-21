<template>
  <div class="login_container">
    <h3>Вход</h3>
    <input type="email" placeholder="Почта">
    <input type="password" placeholder="Пароль">
    <router-link to="/changepwd">Забыли пароль?</router-link>
    <button type="submit">Войти</button>
    <p>Ещё нет аккаунта?
      <router-link to="/auth">Зарегестрироваться</router-link>
    </p>
  </div>


</template>

<script>
export default {
  name: 'login-page'
}

</script>

<style>
body{
  display: flex;
  justify-content: center;
}
.login_container{

  width: 300px;
  padding: 20px;
  border-radius: 5px;
  height: auto;
  background-color: #c8c8c8;
  display: flex;
  flex-direction: column;
}
.login_container input{
  margin-bottom: 10px;
  width: auto;
  height: 40px;
  border-radius: 5px;
  border: none;
}
.login_container button{
  margin: 20px 0 0 0 ;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #2874f8;
  color: white;
}
</style>
