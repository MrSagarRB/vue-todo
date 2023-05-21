<template>
  <v-card
    class="px-5 mt-5 d-flex flex-column align-center justify-center"
    elevation="2"
    width="400px"
    max-height="none"
    min-height="100px"
  >
    <v-card-title class="text-capitalize">
      <p class="font-weight-black body-1">{{ task.content }}</p>
    </v-card-title>
    <v-card-actions class="mb-5">
      <v-btn @click="toggleDone" :color="task.done ? 'primary' : 'secondary'">
        <v-icon left> {{ task.done ? "mdi-alarm" : "mdi-check" }}</v-icon>
        {{ task.done ? "Undo" : "Done" }}
      </v-btn>
      <v-btn class="ml-5" color="error" @click="removeTask"> Remove </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ["task"],
  methods: {
    toggleDone() {
      this.$store.commit("toggleDone", this.task);
    },
    removeTask() {
      this.$store.commit("removeTask", this.task);
    },
  },
};
</script>
