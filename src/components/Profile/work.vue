<template>
<div class="profile-works">
    <div class="article">
        <h2 v-if="year === '2020'">{{year}}</h2>  
        <h2 v-else>{{year}}</h2>
        <p v-if="text === 'Компания 1'">{{text}}</p>
      
        <p v-else>{{text}}</p>
    </div>
 
    
</div>
</template>

<script>
export default {
    name: "profile-works",
    props:["year","text"]
}
</script>

<style scoped>

</style>