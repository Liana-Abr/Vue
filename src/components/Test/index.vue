<template>
  <h1>Test in here</h1>
  <div class="container">
    <div class="card" v-for="u of users" :key="u.email">
      {{u.name || "NoName"}}
      <hr>
      {{u.email}}
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: "test-data",
  data(){
    return{
      users: []
    }
  },
  created(){
        fetch("https://dream-design-server.herokuapp.com/api/users")
            .then(res => res.json())
            .then(data =>{
              if(data.message === "ok"){
                this.users = data.data;
              }
            })
            // fetch("https://dream-design-server.herokuapp.com/api/users/:id")
            //     .then(res => res.json())
            //     .then(data =>{
            //       if(data.message === "ok"){
            //         this.users = data.data;
            //       }
            //     })
  }
}
</script>

<style>

</style>