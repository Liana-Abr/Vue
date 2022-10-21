<template>
  <div class="login-form_container">
    <div class="login-form">
        <form>
          <h1>Вход</h1>
          <div class="content">
            <div class="input-field">
              <input type="email" placeholder="почта" autocomplete="nope">
            </div>
            <div class="input-field">
              <input type="password" placeholder="пароль" autocomplete="new-password">
            </div>
            <router-link to="/changepwd" class="changepwd">Забыли пароль?</router-link>
          </div>
          <div class="action">
            <router-link to="/auth" class="reg">Зарегестрироваться</router-link>
            <button class="sign">Войти</button>
          </div>
        </form>
      </div>
  </div>


</template>

<script>
export default {
  name: 'login-page'
}

</script>

<style>

  
  .login-form_container {
    background: url("https://wallpaperaccess.com/full/1745569.png") no-repeat center center fixed;
    background-size: cover ;
    border-radius: 25px;
    font-family: 'Rubik', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 46%;
    height: 70%;
    position: absolute;
  }
  
  .login-form {
    background: #fff;
    width: 500px;
    margin: 65px auto;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
  }
  .login-form h1 {
    padding: 35px 35px 0 35px;
    font-weight: 300;
  }
  .login-form .content {
    padding: 35px;
    text-align: center;
  }
  .login-form .input-field {
    padding: 12px 5px;
  }
  .login-form .input-field input {
    font-size: 16px;
    display: block;
    font-family: 'Rubik', sans-serif;
    width: 100%;
    padding: 10px 1px;
    border: 0;
    border-bottom: 1px solid #747474;
    outline: none;
    transition: all .2s;
  }
  
  
  .login-form .action {
    display: flex;
    flex-direction: row;
  }
  .login-form .action button, 
  .login-form .reg{
    text-decoration: none;
    color: #747474;
    letter-spacing: 0.2px;
    text-transform: uppercase;
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
    letter-spacing: 0.2px;
    outline: 0;
    transition: all .3s;
  }
  .login-form 
  .sign:hover {
    background: #3976e9;
    color: #fff;
  }
  .login-form a:hover{
    background: #3976e9;
    color: #fff;
  }
  .changepwd{
    text-decoration: none;
    color: #3976e9;
  }
</style>
