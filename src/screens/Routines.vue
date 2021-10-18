<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import Routine from "../components/Routine.vue";

export default defineComponent({
  components: {
    AppHeader,
    Routine
  },
  setup() {
    const router = useRouter();

    const addBtn = () => {
      router.push("/new-routine");
    };

    return {
      addBtn,
    };
  },
});
</script>

<template>
  <main>
    <AppHeader
      title="Routines"
      leftBtn=""
      @onBtnRightClick="addBtn"
      rightBtn="Add"
    ></AppHeader>
    <section class="py-10">
        <Routine></Routine>
    </section>
  </main>
</template>
