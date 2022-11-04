<template>
    <div class="category">
      <h1>{{ heading }}</h1>
      <p>{{subtitle}}</p>
    </div>
</template>

<script>
export default {
  name: "people-categories",
  props: {
    'heading': String,
    'subtitle': String
  }
}
</script>

<style>

.category{
  width: 200px;
  height: 125px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: black;
  text-align: center;
  margin: 20px 80px;
  flex-direction: column;
  padding: 10px;
}

</style>

