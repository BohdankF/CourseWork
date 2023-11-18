<script>
import { defineComponent } from "vue";
import Maps from "@/components/Maps.vue";

export default defineComponent({
  components: {Maps},

  data() {
    return {
    }
  },
});
</script>
<template>
  <div class="container">
    <div class="">
      <section class="contact-info">
        <h2>Графік роботи та відвідування</h2>
        <p>Пн-Пт: 9:00 - 17:00</p>
        <p>Обідня перерва: 13:00 - 14:00</p>
        <p>Сб-Нд: за попереднім записом</p>
      </section>

      <section class="contact-info">
        <h2>Куди дзвонити</h2>
        <p>Загальний номер: +380 99 123 45 67</p>
        <p>Фінансовий відділ: +380 67 987 65 43</p>
        <p>Відділ податків: +380 50 234 56 78</p>
      </section>

      <section class="contact-info">
        <h2>Куди іти</h2>
        <p>Адреса:  вул. Сонячна, буд. 25, м. Лісове, Україна</p>
      </section>
    </div>
    <div class="">
      <Maps></Maps>
    </div>
  </div>
  
</template>

<style scoped>
.container {
  height: 95vh;
  padding-top: 20vh;
  display: flex;
  justify-content: space-between;
}

.container > div {
  width: 50%;
  max-height: 50vh;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

h1 {
  margin: 0;
}

.contact-info {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

/* Стилі для різних секцій контактів */
.contact-info h2 {
  color: #007bff;
}

.contact-info p {
  margin: 10px 0;
}

</style>