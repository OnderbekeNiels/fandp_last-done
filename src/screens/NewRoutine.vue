<script lang="ts">
import { defineComponent, reactive, ref, watch } from "vue";
import AppHeader from "../components/AppHeader.vue";
import Icon from "../components/Icon.vue";
import Routine from "../models/Routine";

export default defineComponent({
  components: {
    AppHeader,
    Icon,
  },
  setup() {
    const colorOptions: any[] = [
      { name: "red", css: "bg-red-300" },
      { name: "green", css: "bg-green-300" },
      { name: "yellow", css: "bg-yellow-300" },
      { name: "blue", css: "bg-blue-300" },
      { name: "pink", css: "bg-pink-300" },
    ];

    const icons: any[] = [
      "Activity",
      "Music",
      "Headphones",
      "Bell",
      "Calculator",
      "Contact",
      "Package",
      "Bitcoin",
      "Book",
    ];

    const formData = reactive<Routine>({
      title: "",
      color: "",
      icon: "",
      numberOfTodos: 0,
    });

    const formValidation = reactive<any>({
      title: false,
      color: false,
      icon: false,
    });

    const validateForm = () => {
      for (const [key, value] of Object.entries(formData)) {
        
        if (value == "") {
          formValidation[key] = true;
        } else {
          formValidation[key] = false;
        }
      }
    };

    const startValidation = async (e: Event) => {
      e.preventDefault();
      validateForm();
      watch(formData, validateForm);

      if (
        !formValidation.title &&
        !formValidation.icon &&
        !formValidation.color
      ) {
        // const { post } = useNetwork()
        // post('observation', data)
        // 	.then(() => router.push('/observations'))
        // 	.catch(err => console.error(err))
      }
    };

    return {
      colorOptions,
      icons,
      formData,
      formValidation,
      startValidation,
    };
  },
});
</script>

<template>
  <main>
    <AppHeader
      title="New Routine"
      leftBtn="Cancel"
      rightBtn="Add"
      @onBtnLeftClick="$router.back"
    ></AppHeader>
    <form class="py-10" action="" @submit.prevent="startValidation">
      <label class="block mb-2 font-bold" for="title">Routing title</label>
      <input
        placeholder="eg. Morning routine"
        class="
          border-2 border-gray-300
          block
          rounded-md
          w-full
          p-2
          mb-6
          focus:outline-none focus:ring-2
          ring-blue-400
        "
        type="text"
        name="title"
        id="title"
        v-model="formData.title"
      />
      <p class="text-red-500 mb-6" v-if="formValidation.title">
        Title is a required field.
      </p>
      <p class="mb-2 font-bold">Color</p>
      <div class="grid grid-cols-5 mb-6 gap-2">
        <label v-for="i of colorOptions" :key="i.name">
          <input
            :value="i.name"
            type="radio"
            name="color"
            v-model="formData.color"
            :id="i.name"
            class="w-0 h-0 peer absolute overflow-hidden"
          />
          <div
            class="
              border-2 border-white
              peer-checked:border-gray-300
              hover:bg-gray-200
              peer-focus:ring-2
              ring-blue-400
              p-2
              rounded-md
              grid
              place-items-center
            "
          >
            <span :class="i.css" class="w-6 h-6 block rounded-full"></span>
          </div>
        </label>
      </div>
      <p class="text-red-500 mb-6" v-if="formValidation.color">
        Color is a required field.
      </p>
      <p class="mb-2 font-bold">Icon</p>
      <div class="grid grid-cols-5 mb-6 gap-2">
        <label v-for="icon of icons" :key="icon">
          <input
            type="radio"
            name="icon"
            :id="icon"
            class="w-0 h-0 peer absolute overflow-hidden"
            :value="icon"
            v-model="formData.icon"
          />
          <div
            class="
              border-2 border-white
              peer-checked:border-gray-300
              peer-focus:ring-2
              hover:bg-gray-200
              ring-blue-400
              p-2
              rounded-md
              grid
              place-items-center
            "
          >
            <Icon :name="icon"></Icon>
          </div>
        </label>
      </div>
      <p class="text-red-500 mb-6" v-if="formValidation.icon">
        Icon is a required field.
      </p>
      <input
        class="
          w-full
          rounded-md
          p-2
          font-bold
          bg-black
          text-white
          shadow-sm
          focus:outline-none focus:ring-2
          ring-blue-400
        "
        type="submit"
        value="Add routine"
        on:submit="{{}}"
      />
    </form>
  </main>
</template>
