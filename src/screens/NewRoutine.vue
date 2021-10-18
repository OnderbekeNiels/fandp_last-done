<script lang="ts">
import { defineComponent } from "vue";
import AppHeader from "../components/AppHeader.vue";

export default defineComponent({
  components: {
    AppHeader,
  },
  setup() {},
});
</script>

<template>
  <main>
    <AppHeader title="New Routine" leftBtn="Cancel" rightBtn="Add" @onBtnLeftClick="$router.back"></AppHeader>
  </main>
</template>
