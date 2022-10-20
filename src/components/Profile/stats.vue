<template>
  <div class="stats__icon">
    <!-- <i class="bi bi-heart"></i> -->
    <i v-if="icon === 'bi bi-heart'" :class="'bi bi-' + icon" ></i>
    <i v-else :class="icon" ></i>
    <p v-if="icon" :class="'bi-bi-heart'">{{data}}</p>
    <p v-else>{{data}}</p>
  </div>


</template>
<script>


export default {
  name: "profile-stats",
  props:["icon","data"]
}

</script>

<style scoped>
.stats__icon{
  color: white;
  cursor: pointer;
}
.stats__icon:hover{
  color:#e3fe52;;
}
/*.stats__icon p{*/
/*  color: white;*/
/*}*/

</style>
