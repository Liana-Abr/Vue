<template>
<div class="reg_form_container">
  <div class="reg-form">
          <form @submit="regUser">
            <h1>Регистрация</h1>
            <div class="content">
              <div class="input-field">
                <input type="text" placeholder="имя" name="name" v-model="regName" autocomplete="nope">
              </div>
              <div class="input-field">
                  <input type="email" placeholder="name@mail.ru" name="email"  v-model="regEmail" autocomplete="nope"   required>
              </div>

              <div class="input-field">
                <input type="password" placeholder="пароль" name="password"  v-model="regPwd" autocomplete="new-password" required>
              </div>
              <div class="input-field">
                  <input type="password" placeholder="повторите пароль"   v-model="repeatPwd" :class="repeatPwd !== '' && !checkPwd ? 'wrong': 'success'" @input="check">
                </div>
              <!-- <a href="#" class="link">Forgot Your Password?</a> -->
            </div>
            <div class="action">
              <router-link to="/login" class="sign">Войти</router-link>
              <button type="submit" class="reg">Зарегистрироваться</button>
            </div>
          </form>
        </div>
</div>
</template>

<script>
export default {
  name: 'auth-page',
  data(){
    return{
      regName: "",
      regPwd: "",
      repeatPwd: "",
      regEmail: "",
      checkPwd: false
    }
  },
  methods:{
    regUser: async function(e){
      e.preventDefault();
      console.log(this.checkPwd);
      let body = {
        name: this.regName,
        email: this.regEmail,
        password: this.regPwd
      }
      if(this.checkPwd){
        e.target.reset();
        // console.log(body);
        const data = await fetch("https://dream-design-server.herokuapp.com/api/users/add",{
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(body)
        }).then(res => res.json());
        console.log(data)
        if(data.message === "ok"){
          localStorage.setItem("user", JSON.stringify(data.data));
          this.$router.replace("/profile")
        } else{
          alert(data.message);
        }
        console.log(data);
      }else{
        alert("Пароли не совпадают!");
      }
    },
    check: function(){
      this.checkPwd = this.regPwd === this.repeatPwd
    }
  }
}

</script>

<style>

  .reg_form_container {
    background: url("https://img.freepik.com/free-vector/graphic-design-geometric-wallpaper_52683-34399.jpg?w=2000&t=st=1665771472~exp=1665772072~hmac=fa783c0e1bbcb9def3c35390c9e0497bccb532ac46b6a9b242d3b771d17299e7") no-repeat center center fixed;
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

  .reg-form {
    background: #fff;
    width: 500px;
    margin: 65px auto;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);
  }
  .reg-form h1 {
    padding: 35px 35px 0 35px;
    font-weight: 300;
  }
  .reg-form .content {
    padding: 35px;
    text-align: center;
  }
  .reg-form .input-field {
    padding: 12px 5px;
  }
  .reg-form .input-field input {
    font-size: 16px;
    display: block;
    font-family: 'Rubik', sans-serif;
    width: 100%;
    padding: 10px 1px;
    /*border: 0;*/
    /*border-bottom: 1px solid #747474;*/
    outline: none;
    transition: all .2s;
  }


  .reg-form .action {
    display: flex;
    flex-direction: row;
  }
  .reg-form .action button,
  .reg-form a{
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    margin-top: 20px;
    width: 100%;
    /*border: none;*/
    padding: 20px 75px;
    font-size: 12px;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
    text-transform: uppercase;
    background: white;
    color: rgb(121, 121, 121);
    outline: 0;
    transition: all .3s;
  }
  .reg-form
  .reg:hover {
    background: #3976e9;
    color: #fff;
  }
  .reg-form a:hover{
    background: #3976e9;
    color: #fff;
  }
  .wrong{
    border-color: red;
  }
</style>
