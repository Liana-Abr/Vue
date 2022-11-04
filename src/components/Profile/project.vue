<template>
<!--  квадратик с проектом-->
  <div class="portfolio">
<!--    <div class="p">{{userData.name}}</div>-->
      <div class="profile__item" v-for="item of projects" :key="item._id">
        <div class="profile__title">
          <h2>{{item.title}}</h2>
          <button @click="removeProject(item._id)">X</button>
        </div>

        <div class="portfolio__image" :style="{backgroundImage: `url(${item.main_image})`}"></div>

        <!-- <p v-show="item.description">{{item.description}}</p>-->
        <a :href="item.link" target="_blank" v-show="item.link"></a>
      </div>
    </div>

  </template>
  <script>
  export default {
    name: "profile-project",
    props:["userData"],
    data(){
      return {
        projects: this.userData.portfolio,
      }
    },
    methods:{
      addProject() {
        this.$emit("showPopup");
      },
      removeProject(id){
        fetch(`https://dream-design-server.herokuapp.com/api/users/project/remove/${this.userData._id}`,
            {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json",
                "Accept": "application.json"
              },
              body:JSON.stringify({_id: id})
            }).then(res => res.json())
            .then(data =>{
              console.log("result", data)
              if(data.message === "ok"){
                localStorage.setItem("user",JSON.stringify(data.data))
                this.projects = this.projects.filter(p => p._id !== id);
              }

            })
      }
    }
  }
  </script>
  <style scoped>
.portfolio{
  color: black;
}
    .portfolio__image{
      background-repeat: no-repeat;
      background-size: cover;
      width: 100px;
      height: 100px;
      /*background-color: #e3fe52;*/
      border-radius: 5px;
      margin: 10px;
    
    }
    h2{
      color: black;
      font-size: 20px;
      font-weight: 400;
    }
    .profile__title{
      display: flex;
    }
    .profile__title button{
      margin: 0 0 0 10px;
      padding: 5px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
    }
  </style>
  