<script setup>

import Carousel from "@/components/Carousel.vue";
</script>

<template>
  <div class="container">

    <div class="content">

      <Carousel></Carousel>

      <section id="who-we-are">
        <h2>Хто ми</h2>
        <p>Міністерство фінансів — це державний орган, який відповідає за управління фінансовими ресурсами країни та
          імплементацію ефективних стратегій економічного розвитку.</p>
      </section>
      <section id="what-we-do">
        <h2>Чим ми займаємось</h2>
        <p>Наша робота включає в себе розробку бюджету, фінансовий аналіз, податкову політику та регулювання фінансового
          ринку.</p>
      </section>
      <section id="our-goal">
        <h2>Наша мета</h2>
        <p>Наша головна мета полягає в забезпеченні стабільності економіки, зростанні бюджетних доходів та підтримці
          фінансової безпеки країни.</p>
      </section>
      <section id="our-achievements">
        <h2>Наші досягнення</h2>
        <p>Протягом останніх років ми досягли значних успіхів у підвищенні ефективності бюджету, зменшенні дефіциту та
          розвитку нових стратегій фінансового управління.</p>
      </section>
    </div>
  </div>

</template>

<style scoped>

.container {
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;
  padding: 10vh 0 0 0;

}

.content {
  background-color: #ababab;
  padding: 5px 25px;
}

h1 {
  text-align: center;
}

section {
  margin-bottom: 20px;
}

h2 {
  color: #0066cc;
}

</style>