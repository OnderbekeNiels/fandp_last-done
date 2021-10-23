<script lang="ts">
import { defineComponent } from "vue";
import * as icons from "lucide-vue-next";

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const getIcon = (): any => {
      // @ts-ignore
      return icons[props.name];
    };

    return {
      getIcon,
    };
  },
});
</script>

<template>
  <component :is="getIcon()" />
</template>
