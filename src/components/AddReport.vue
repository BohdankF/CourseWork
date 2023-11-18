<script>

import {defineComponent} from "vue";
import axios from "axios";

export default defineComponent({
  methods: {

    createReport() {
      axios.post("/reports", this.report)
          .then(() => {

            const btn = document.getElementById('close-btn')
            btn.click()

            this.$router.go()
          })
    }
  },

  data() {
    return {
      report: {
        name: '',
        description: '',
        count: 0,
        person: '',
        date: ''
      }
    }
  },
});

</script>

<template>
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
       aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <label for="name">Назва:</label>
          <input v-model="report.name" type="text" id="name" name="name" required><br><br>

          <label for="description">Опис:</label>
          <textarea v-model="report.description" id="description" name="description" rows="4"
                    required></textarea><br><br>

          <label for="count">Сума:</label>
          <input v-model="report.count" type="number" id="count" name="count" required><br><br>

          <label for="date">Дата:</label>
          <input v-model="report.date" type="text" id="date" name="date" required><br><br>

          <label for="person">Відповідальна особа:</label>
          <input v-model="report.person " type="text" id="person" name="person" required><br><br>
        </div>
        <div class="modal-footer">
          <button type="button" id="close-btn" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="createReport">Understood</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

input[type="submit"] {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #0056b3;
}
</style>