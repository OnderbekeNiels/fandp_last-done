<script lang="ts">
import { defineComponent } from "vue";
import TodoModel from "../models/Todo";
import Icon from "./Icon.vue";

export default defineComponent({
  components: {
    Icon,
  },
  props: {
    todo: { type: Object as () => TodoModel, required: true },
  },
  setup(props) {
    return {};
  },
});
</script>

<template>
  <article
    class="
      border-2 border-gray-300
      w-full
      rounded-md
      p-2
      pb-6
      hover:text-white
      hover:bg-gradient-to-br
      from-purple-800
      to-blue-600
      focus:outline-none focus:ring-2 focus:ring-blue-400
      hover:drop-shadow-md
      relative
      overflow-hidden
    "
  >
    <div class="flex justify-end">
      <svg
        class="text-gray-300 stroke-current cursor-pointer w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </div>
    <div class="flex mb-1">
      <Icon :name="todo.icon" class="w-4 h-4 mr-2"></Icon>
      <h1 class="font-bold text-sm">{{ todo.title }}</h1>
    </div>
    <p v-if="todo.createdAt" class="text-gray-300 text-xs">
      {{ todo.createdAt.toISOString() }}
    </p>
    <span
      :class="todo.color"
      class="
        h-8
        w-8
        -bottom-1
        -right-1
        bg-black
        block
        absolute
        rounded-full
        p-2
      "
      ><svg
        class="stroke-current text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38" /></svg
    ></span>
  </article>
</template>
