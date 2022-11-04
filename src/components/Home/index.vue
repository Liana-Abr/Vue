<template>
  <div class="banner">
    <h1>Платформа для цифровых дизайнеров и креативщиков <i class="bi bi-vector-pen"></i></h1>
    <div class="slider">
      <div class="images">
        <input type="radio" name="slide" id="img1" checked>
        <input type="radio" name="slide" id="img2">
        <input type="radio" name="slide" id="img3">
        <input type="radio" name="slide" id="img4">

        <img src="https://images.prismic.io/dribbble/6cd6018d-0640-4eb3-984c-66d2b6f0faa1_image_processing20200318-14302-1i0t1ly.png?auto=compress,format&rect=0,0,1598,1200&w=1200&h=901%201200w,%20https://images.prismic.io/dribbble/6cd6018d-0640-4eb3-984c-66d2b6f0faa1_image_processing20200318-14302-1i0t1ly.png?auto=compress,format&rect=0,0,1599,1198&w=375&h=281%20375w,%20https://images.prismic.io/dribbble/6cd6018d-0640-4eb3-984c-66d2b6f0faa1_image_processing20200318-14302-1i0t1ly.png?auto=compress,format&rect=0,0,1599,1199&w=744&h=558%20744w" class="m1" alt="img1">

        <img src="https://learn.g2.com/hubfs/graphic-design-dev.svg" class="m2" alt="img2">

        <img src="https://visionarygraphics.ca/wp-content/uploads/2022/08/graphics-designing-course-karachi-digital-minds.png" class="m3" alt="img3">

        <img src="https://www.profisender.com/wp-content/uploads/2017/10/freelancer-image-02.png" class="m4" alt="img4">
      </div>
      <div class="cubes">
        <label for="img1"></label>
        <label for="img2"></label>
        <label for="img3"></label>
      </div>
    </div>
  </div>
  <div class="categories">
    <people-categories
        v-for="post in posts"
        v-bind:heading="post.title"
        v-bind:subtitle="post.subtitle"
        v-bind:key="post.id"
    ></people-categories>
  </div>
  <h2>Вопросы по платформе <i class="bi bi-patch-question"></i></h2>
  <div class="questions">
    <div>Вопрос 1</div>
    <div>Вопрос 2</div>
    <div>Вопрос 3</div>
    <div>Вопрос 4</div>
    <div>Вопрос 5</div>
    <div>Вопрос 6</div>
  </div>





</template>
<script>

import Categories from "@/components/Categories";

export default {
  name: "home-page",
  data () {
    return {
      posts: [
        {id: 1, title: "UX/UI Design", subtitle: "Дизайн и проектирование пользовательского интерфейса"},
        {id: 2, title: "Mobile", subtitle: "Мобильный дизайн"},
        {id: 3, title: "Print", subtitle: "Принт"},
        {id: 4, title: "Typography", subtitle: "Искусство оформления печатного текста"}
      ]
    }
  },
  components:{
    "people-categories": Categories
  }
}
</script>

<style scoped>
.categories{
  display: inline-block;
  flex-direction: row;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
}
.banner {
  position: relative;
  height: 64vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.questions{
  position: relative;
  justify-content: center;
  align-items: center;
  left: 15%;
  height: 40vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.questions>div{
  padding: 10px;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: black;
  width: 300px;
  height: 50px;
  font-size: 20px;
  font-weight: 700;
}

h2{
  display: flex;
  justify-content: center;
  margin: 100px 0 10px 0;
}

.slider {
  position: relative;
  width: 90%;
  overflow: hidden;
}
.images {
  display: flex;
  width: 100%;
}
.images img {
  height: 500px;
  width: 100%;
  transition: all 0.15s ease;
  background-color: #eef1f0;
}
.images input {
  display: none;
}
.cubes {
  display: flex;
  justify-content: center;
  margin: 5px;
}
.cubes label {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: solid lightgray 3px;
  cursor: pointer;
  transition: all 0.15s ease;
  margin: 5px;
}
.cubes label:hover {background: #e3fe52;}
#img1:checked ~ .m1 {
  margin-left: 0;
}
#img2:checked ~ .m2 {
  margin-left: -70%;
}
#img3:checked ~ .m3 {
  margin-left: -170%;
}

</style>