<script lang="ts">
import { defineComponent } from "vue";
import RoutineModel from "../models/Routine";

export default defineComponent({
  props: {
    routine: { type: Object as () => RoutineModel, required: true },
  },
  setup(props) {
    return {};
  },
});
</script>

<template>
  <article
    @click="$router.push(`/${routine.uuid}`)"
    class="border-2 border-gray-300 w-full rounded-md p-2 pb-6 hover:bg-gradient-to-br hover:text-white from-purple-800 to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400  hover:drop-shadow-md"
  >
    <div class="flex justify-end">
      <svg  
        class="text-gray-300 stroke-current cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
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
    <div class="text-center">
      <h1 class="font-bold text-sm">{{ routine.title }}</h1>
      <p class="text-xs">{{ routine.numberOfTodos }} items</p>
    </div>
  </article>
</template>
