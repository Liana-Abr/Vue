<template>
    <div class="profile___tools">
        <!-- <h3 v-if="year === '2020'" class="tools__block"></h3> -->
<!--        <h3 v-if="year === '2020'" >{{year}}</h3>-->
        <div class="tools__block">
          <p>AI</p>
        </div>
        <div class="tools__block">
          <p>Photoshop</p>
        </div>
        <div class="tools__block">
          <p>Figma</p>
        </div>
        <div class="tools__block">
          <p>Canva</p>
        </div>
        
    </div>
  
  
  </template>
  <script>
  
  
  export default {
    name: "profile-tools"
  }
  
  </script>
  
  <style scoped>
    .profile___tools{
        /* background-color: antiquewhite; */
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
        display: flex;
        margin: 20px;
    }
    .tools__block{
      border-radius: 5px;
      align-items: center;
      display: flex;
      justify-content: center;
      background-color: #e9e9e9;
      width: auto;
      height: 20px;
      margin: 20px;
      padding: 5px;
      color: black;
    }
  </style>
  