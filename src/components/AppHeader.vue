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
  <header class="grid grid-cols-3 gap-2 items-end">
    <button v-if="leftBtn" @click="emit('onBtnLeftClick')" class="text-sm text-left">{{leftBtn}}</button>
    <div v-else></div>
    <h1 class="font-bold text-xl text-center">{{title}}</h1>
    <button v-if="rightBtn" class="text-sm text-right" @click="emit('onBtnRightClick')">{{rightBtn}}</button>
    <div v-else></div>
  </header>
</template>
