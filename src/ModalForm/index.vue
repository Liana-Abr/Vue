<template>
  <div class="modal-wrapper">
    <div class="modal_container" >
      <form @submit.prevent="addProject">
        <input type="text" name="title" placeholder="Заголовок" v-model="title" required>
        <input type="text" name="main_image" placeholder="картинка" v-model="main_image">
        <input type="text" name="link" placeholder="Ссылка на проект" v-model="link">
        <input type="month" v-model="date" placeholder="Когда велась работа над проектом?" >
<!--        <input type="text" name="tags" placeholder="теги" v-model="tags">-->
        <input type="text" name="description" placeholder="Описание" v-model="description">
        <button type="submit">Добавить проект</button>
        <div class="modal-close" @click="$emit('modalClose')">+</div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: "modal-form",
  data() {
    return {
      title: "",
      main_image: "",
      description: "",
      link: "",
      date: null,
      tags: []
    }
  },
  methods: {
    addProject() {
      let user = localStorage.getItem("user");
      if (user) {
        user = JSON.parse(user);
      }
      const body = {
        title: this.title,
        main_image: this.image,
        description: this.description,
        link: this.link,
        date: this.date && new Date(this.date),
        tags: this.tags
      }
      console.log(body, user);
      // fetch(`https://dream-design-server.herokuapp.com/api/users/project/add/${user}`, {
      //   method: "PATCH",
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Accept": "application.json"
      //   },
      //   body: JSON.stringify(body)
      // })
      console.log(user._id)
      fetch(`https://dream-design-server.herokuapp.com/api/users/project/add/${user._id}`,
          {
               method: "PATCH",
                headers: {
                 "Content-Type": "application/json",
                  "Accept": "application.json"
           },
               body: JSON.stringify(body)
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if (data.message === "ok"){
              this.clearForm()
              user = data.data;
              localStorage.setItem("user",JSON.stringify(user));
              this.$emit("modalClose");
              this.$emit("updateUserData");
            } else{
              alert("Bad gateway!")
            }
          })
    },
    clearForm(){
      this.title = "";
      this.main_image = "";
      this.description =  "";
      this.link= "";
      this.date = null;
      this.tags = [];
      this.$emit("modalClose");
    }
  }
}
</script>

<style>
.modal-wrapper {
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background-color: #0004;
  /*backdrop-filter: blur(1px);*/
}
.modal_container form{
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 70px;
  border-radius: 8px;
  position: relative;
}
.modal-close {
  position: absolute;
  top: 6px;
  right: 10px;
  line-height: 1;
  transform: rotate(45deg);
  cursor: pointer;
}
</style>