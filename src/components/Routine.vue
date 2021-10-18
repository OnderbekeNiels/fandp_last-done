<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    itemCount: {
      type: String,
      required: true,
    },
  },
  setup(props) {},
});
</script>

<template>
  <article class="border-2 border-gray-300 w-full rounded-md p-2">
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
      <h1 class="font-bold text-sm">{{ title }}</h1>
      <p class="text-xs">{{ itemCount }} items</p>
    </div>
  </article>
</template>
