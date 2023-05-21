<template>
  <v-container class="d-flex flex-column align-center justify-center pt-10">
    <v-card elevation="2" min-width="400px" class="pa-5 d-flex flex-column">
      <h2 class="mx-auto mb-5">Task Board</h2>
      <p>Create a list of tasks</p>

      <v-text-field
        @keypress.enter="addTask"
        v-model="newTask"
        label="Add  a new Task"
        solo
        outlined
        dense
      ></v-text-field>
      <v-btn fab dark color="indigo" @click="addTask" class="ml-auto mr-5">
        <v-icon dark> mdi-plus </v-icon>
      </v-btn>
    </v-card>

    <Task v-for="(task, i) in $store.state.tasks" :key="i" :task="task" />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Task from "../components/Task.vue";

export default {
  components: { Task },
  name: "IndexPage",
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    addTask() {
      if (this.newTask) {
        this.$store.commit("addTask", this.newTask);
        this.newTask = "";
      }
    },
  },
};
</script>
