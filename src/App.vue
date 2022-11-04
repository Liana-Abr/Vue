<template>
  <page-header  ></page-header>
  <main-page @showPopup="modalOpen" :userData="userData"></main-page>
  <div class="modal-wrapper" :style="{display: modalActivity ? 'flex' : 'none'}">
    <modal-form @modalClose="modalClose" @updateData="updateUserData"></modal-form>
  </div>
</template>

<script>

  import Header from "@/components/Profile/header";
  import Main from "@/components/Main";
import ModalForm from "@/ModalForm";

  export default {
    name: 'App',
    components: {
      "page-header": Header,
      "main-page": Main,
      "modal-form": ModalForm

    },
    data(){
      return {
        title: "Графика / здание",
        seeLink: false,
        modalActivity:false,
        userData: {},
        days: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"

        ]
      }
    },
    created() {
      let user = localStorage.getItem("user");
      if(user){
        this.userData = JSON.parse(user);
      }
      this.seeLink = !!localStorage.getItem("user");

    },
    methods: {
      modalOpen() {
        this.modalActivity = true;
      },
      modalClose() {
        this.modalActivity = false;
      },
      updateUserData(data){
        this.userData = data;
        console.log("global user", this.userData);
      }
    }
  }
</script>
<style>
body{
  min-width: 600px;
}
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
.modal {
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
