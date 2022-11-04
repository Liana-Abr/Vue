<template>
  <div class="changepwd_container">
    <div class="changepwd-form">
        <router-link to="/login">
          &#60; Передумал
        </router-link>
        <h3>Страница восстановления пароля</h3>
        <input type="email" placeholder="Почта">
        <input type="password" placeholder="Новый пароль">
        <input type="password" placeholder="Подтвердите пароль">
        <button type="submit">Подтвердить</button>
      </div>


  </div>

</template>

<script>
export default {
  name: "changepwd-page"
}
</script>

<style>
.changepwd-form h3{
  font-family: 'Rubik', sans-serif;
  padding: 35px 35px 0 35px;
font-weight: 300;
}
.changepwd_container{
  background: url("https://www.pngmagic.com/product_images/beautiful-color-background-images-pngmagic-sm.jpg") no-repeat center center fixed;
    background-size: cover ;
    border-radius: 25px;
    font-family: 'Rubik', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46%;
    height: 70%;
    position: absolute;
    left: 25%;
}
.changepwd_container input{
  font-size: 16px;
  display: block;
  font-family: 'Rubik', sans-serif;
  width: 81%;
  padding: 15px 10px;
  margin: 20px;
  border: 0;
  border-bottom: 1px solid #747474;
  outline: none;
  transition: all .2s;
}
.changepwd-form{
  background: #fff;
  width: 500px;
  margin: 65px auto;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
}
.changepwd_container button{
  text-decoration: none;
    display: inline-block;
    margin-top: 20px;
    width: 100%;
    border: none;
    padding: 20px 30px;
    font-size: 12px;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
    text-transform: uppercase;
    background: #e5e5e6;
    color: rgb(121, 121, 121);
    outline: 0;
    transition: all .3s;
}
.changepwd_container button:hover{
  background: #3976e9;
    color: #fff;
}
.changepwd_container a:hover{
  background: #3976e9;
    color: #fff;
}
.changepwd-form  a{
  padding: 20px;
  text-decoration: none;
    color: #3976e9;
  }
</style>
