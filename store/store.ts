import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
  const test = ref<boolean>(true);
});
