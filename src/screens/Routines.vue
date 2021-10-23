<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
import Routine from "../components/Routine.vue";
import RoutineModel from "../models/Routine";

export default defineComponent({
  components: {
    AppHeader,
    Routine,
  },
  setup() {
    const router = useRouter();

    const addBtn = () => {
      router.push("/new-routine");
    };

    const routines = ref<RoutineModel[]>([
      {
        uuid: "dfssdfqsdf",
        title: "good morning",
        numberOfTodos: 1,
        color: "bg-epsilon",
      },
      { uuid: "ddsfs", title: "good morning", numberOfTodos: 1, color: "bg-epsilon" },
      { uuid: "dsfd", title: "good morning", numberOfTodos: 4, color: "bg-epsilon" },
      {
        uuid: "dfssdfhjtrqsdf",
        title: "good night",
        numberOfTodos: 5,
        color: "bg-epsilon",
      },
    ]);

    return {
      addBtn,
      routines,
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
    <section class="grid grid-cols-1 sm:grid-cols-2 gap-6 py-10">
      <Routine v-for="r of routines" :key="r.title" :routine="r"></Routine>
    </section>
  </main>
</template>
