<script>
  import {defineComponent} from "vue";
  import axios from "axios";
  import AddReport from "@/components/AddReport.vue";

  export default defineComponent({
    components: {AddReport},
    mounted() {
      axios.get("/reports")
          .then(res => {
            this.reports = res.data
          })
    },

    data() {
      return {
        reports: []
      }
    },

    methods: {
      deleteReport(id) {
        axios.delete(`/reports/${id}`)
            .then(() => this.$router.go())
      }
    }
  });
</script>

<template>
  <div class="container">

    <h1>Обов'язкові звіти щодо доходів та розходів Державного Бюджету України</h1>

    <table>
      <tr>
        <th>Номер</th>
        <th>Назва</th>
        <th>Опис</th>
        <th>Сума</th>
        <th>Дата</th>
        <th>Відповідальна особа</th>
        <th>Видалити</th>
      </tr>
      <tr v-for="(report, index) in reports">
        <td>{{ index + 1 }}</td>
        <td>{{ report.name }}</td>
        <td>{{ report.description }}</td>
        <td :class="report.count > 0 ? 'green' : 'red'">{{ report.count }}</td>
        <td>{{ report.date }}</td>
        <td>{{ report.person }}</td>
        <td><button class="red" @click="deleteReport(report.id)">Видалити</button></td>
      </tr>
    </table>

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Добавити звіт
    </button>
  </div>

  <AddReport></AddReport>
</template>

<style scoped>
button {
margin-top: 5px;
}

.container {
  padding: 10vh 20px 10px 20px;

  text-align: end;
}

h1 {
  text-align: center  ;
}

table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid #000;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #555;
  color: #fff;
}

.red {
  background-color: #ff9999; /* червоний */
}

.green {
  background-color: #99ff99; /* зелений */
}

</style>