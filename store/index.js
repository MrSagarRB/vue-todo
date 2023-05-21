export const state = () => ({
  tasks: [{ content: "Learning Vue js from Youtube ", done: false }],
});

export const mutations = {
  addTask(state, task) {
    state.tasks = [{ content: task, done: false }, ...state.tasks];
  },
  removeTask(state, task) {
    console.log(state);
    console.log(task);
    state.tasks = state.tasks.filter((item) => item.content !== task.content);
  },

  toggleDone(state, task) {
    console.log(state);
    task.done = !task.done;
  },
};
