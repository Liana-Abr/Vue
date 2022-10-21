<template>
  <div class="changepwd_container">
    <router-link to="/login">
      &#60; Передумал
    </router-link>
    <h3>Страница восстановления пароля</h3>
    <input type="email" placeholder="Почта">
    <input type="password" placeholder="Новый пароль">
    <input type="password" placeholder="Подтвердите пароль">
    <button type="submit">Подтвердить</button>
  </div>

</template>

<script>
export default {
  name: "changepwd-page"
}
</script>

<style>
.changepwd_container{
  width: 300px;
  padding: 20px;
  border-radius: 5px;
  height: auto;
  background-color: #c8c8c8;
  display: flex;
  flex-direction: column;
}
.changepwd_container input{
  margin-bottom: 10px;
  width: auto;
  height: 40px;
  border-radius: 5px;
  border: none;
}
.changepwd_container button{
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #2874f8;
  color: white;
}
</style>
