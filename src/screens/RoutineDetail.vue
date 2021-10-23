<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import TodoModel from "../models/Todo";
import Todo from "../components/Todo.vue";

export default defineComponent({
  components: {
    AppHeader,
    Todo
  },
  setup() {
    const route = useRoute();

    const todos = ref<TodoModel[]>([
      {
        uuid: "1",
        title: "Mock todo",
        routineId: "123",
        icon: "Activity",
        color: "bg-epsilon",
        createdAt: new Date(),
      },
    ]);

    return {
      route,
      todos
    };
  },
});
</script>

<template>
  <AppHeader
    :title="route.path.substring(1)"
    leftBtn="Back"
    @onBtnLeftClick="$router.back"
    rightBtn="Add"
    @onBtnRightClick="$router.push(`new-todo`)"
  ></AppHeader>
  <section class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
    <Todo v-for="t of todos" :key="t.title" :todo="t"></Todo>
  </section>
</template>
