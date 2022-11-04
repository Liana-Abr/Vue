<template>
  <div class="login-form_container">
    <div class="login-form">
        <form @submit="authUser">
          <h1>Вход</h1>
          <div class="content">
            <div class="input-field">
              <input type="email" placeholder="почта" name="email" autocomplete="nope" v-model="authEmail" >
            </div>
            <div class="input-field">
              <input type="password" placeholder="пароль" name="password" autocomplete="new-password" v-model="authPwd" >
            </div>
            <router-link to="/changepwd" class="changepwd">Забыли пароль?</router-link>
          </div>
          <div class="action">
            <router-link to="/auth" class="reg">Зарегестрироваться</router-link>
            <button type="submit" class="sign">Войти</button>
          </div>
        </form>
      </div>
  </div>


</template>

<script>
export default {
  name: 'login-page',
  data(){
    return{
      authEmail: "",
      authPwd: "",
      checkPwd: false

    }
  },
  methods:{
      authUser: async function(e) {
        e.preventDefault();
        let body = {
          email: this.authEmail,
          password: this.authPwd
        }
        const data = await fetch("https://dream-design-server.herokuapp.com/api/users/auth", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application.json"
          },
          body: JSON.stringify(body)
        }).then(res => res.json());
        if (data.message === "ok") {
          e.target.reset();
          localStorage.setItem("user", JSON.stringify(data.data));
          this.$router.replace("/profile")
        } else {
          alert(data.message);
        }
    }
  }
}

</script>

<style>


  .login-form_container {
    background: url("https://wallpaperaccess.com/full/1745569.png") no-repeat center center fixed;
    background-size: cover ;
    border-radius: 25px;
    font-family: 'Rubik', sans-serif;
    display: flex;
    align-items: center;
    width: 46%;
    height: 70%;
    position: absolute;
    left: 25%;
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

    text-transform: uppercase;
    display: inline-block;
    margin-top: 20px;
    width: 100%;
    border: none;
    padding: 20px 30px;
    font-size: 12px;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;

    background: #e5e5e6;

    outline: 0;
    transition: all .3s;
  }

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
