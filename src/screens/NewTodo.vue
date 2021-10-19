<script lang="ts">
import { defineComponent, ref } from "vue";
import AppHeader from "../components/AppHeader.vue";

export default defineComponent({
  components: {
    AppHeader,
  },
  setup() {
    const colorOptions: any[] = [
      { name: "red", css: "bg-red-300" },
      { name: "green", css: "bg-green-300" },
      { name: "yellow", css: "bg-yellow-300" },
      { name: "blue", css: "bg-blue-300" },
      { name: "pink", css: "bg-pink-300" },
    ];

    return{
      colorOptions
    }
  },
});
</script>

<template>
  <main>
    <AppHeader
      title="New Todo"
      leftBtn="Cancel"
      rightBtn="Add"
      @onBtnLeftClick="$router.back"
    ></AppHeader>
    <form class="py-10" action="">
      <label class="block mb-2 font-bold" for="title">Routine title</label>
      <input
        placeholder="eg. Morning routine"
        class="border-2 border-gray-300 block rounded-md w-full p-2 mb-6"
        type="text"
        name="title"
        id="title"
      />
      <p class="mb-2 font-bold">Color</p>
      <div class="grid grid-cols-5 mb-6">
        <label v-for="i of colorOptions" :key="i.name">
          <input type="radio" name="color" :id="i.name" class="hidden peer" />
          <div
            class="
              border-2 border-white
              peer-checked:border-gray-300
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
      <p class="mb-2 font-bold">Icon</p>
      <div class="grid grid-cols-5 mb-6">
        <label>
          <input type="radio" name="icon" id="music" class="hidden peer" />
          <div
            class="
              border-2 border-white
              peer-checked:border-gray-300
              p-2
              rounded-md
              grid
              place-items-center
            "
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </div>
        </label>
        <label>
          <input type="radio" name="icon" id="music" class="hidden peer" />
          <div
            class="
              border-2 border-white
              peer-checked:border-gray-300
              p-2
              rounded-md
              grid
              place-items-center
            "
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </div>
        </label>
        <label>
          <input type="radio" name="icon" id="music" class="hidden peer" />
          <div
            class="
              border-2 border-white
              peer-checked:border-gray-300
              p-2
              rounded-md
              grid
              place-items-center
            "
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </div>
        </label>
        <label>
          <input type="radio" name="icon" id="music" class="hidden peer" />
          <div
            class="
              border-2 border-white
              peer-checked:border-gray-300
              p-2
              rounded-md
              grid
              place-items-center
            "
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </div>
        </label>
        <label>
          <input type="radio" name="icon" id="music" class="hidden peer" />
          <div
            class="
              border-2 border-white
              peer-checked:border-gray-300
              p-2
              rounded-md
              grid
              place-items-center
            "
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </div>
        </label>
        <label>
          <input type="radio" name="icon" id="music" class="hidden peer" />
          <div
            class="
              border-2 border-white
              peer-checked:border-gray-300
              p-2
              rounded-md
              grid
              place-items-center
            "
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </div>
        </label>
        <label>
          <input type="radio" name="icon" id="music" class="hidden peer" />
          <div
            class="
              border-2 border-white
              peer-checked:border-gray-300
              p-2
              rounded-md
              grid
              place-items-center
            "
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </div>
        </label>
        <label>
          <input type="radio" name="icon" id="music" class="hidden peer" />
          <div
            class="
              border-2 border-white
              peer-checked:border-gray-300
              p-2
              rounded-md
              grid
              place-items-center
            "
          >
            <svg
              class="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </div>
        </label>
      </div>
      <input
        class="w-full rounded-md p-2 font-bold bg-black text-white shadow-sm"
        type="submit"
        value="Add routine"
      />
    </form>
  </main>
</template>
