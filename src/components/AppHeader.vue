<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    title: String,
    leftBtn: String,
    rightBtn: String,
  },
  setup(props, {emit}) {

    return{
        emit
    }
  },
});
</script>

<template>
  <header class="flex justify-between items-center relative">
    <button v-if="leftBtn" @click="emit('onBtnLeftClick')" class="text-sm text-right p-2 hover:bg-gray-200  rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-400">{{leftBtn}}</button>
    <div v-else></div>
    <h1 class="font-bold text-xl text-center absolute inset-0 pointer-events-none">{{title}}</h1>
    <button v-if="rightBtn" class="text-sm text-right p-2 hover:bg-gray-200  rounded-md focus:outline-none  focus:ring-2 focus:ring-blue-400" @click="emit('onBtnRightClick')">{{rightBtn}}</button>
    <div v-else></div>
  </header>
</template>
