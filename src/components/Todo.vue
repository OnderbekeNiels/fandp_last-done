<script lang="ts">
import { defineComponent } from "vue";
import TodoModel from "../models/Todo";

export default defineComponent({
  props: {
    todo: { type: Object as () => TodoModel, required: true },
  },
  setup(props) {
    return {};
  },
});
</script>

<template>
  <arcticle
    class="border-2 border-gray-300 w-full rounded-md p-2 pb-6 hover:opacity-50 relative overflow-hidden"
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
    <div class="">
      <h1 class="font-bold text-sm">{{ todo.title }}</h1>
      <p class="text-gray-300 text-xs">{{ todo.createdAt.toISOString() }}</p>
    </div>
    <span class="h-8 w-8 -bottom-1 -right-1 bg-black block absolute rounded-full p-2"><svg class="stroke-current text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"/></svg></span>

  </arcticle>
</template>
