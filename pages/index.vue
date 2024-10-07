<script setup lang="ts">
//===============================-< Imports >-===============================
import { useStore } from "~/store/store";
//===============================-< Use of Imported >-===============================
const store = useStore();
//===============================-< Interfaces >-===============================
interface testArrayInterface {
  label: string;
  id: number;
}
//===============================-< Variables >-===============================
//> ARRAY
const testArray: testArrayInterface[] = [
  { label: 'Fayl yuklash', id: 1 },
  { label: 'Qo’lda yozish', id: 2 }
];
//> String
const testRef = ref<string>();
//===============================-< Functions >-===============================
async function test(params: Boolean) {
  if (params) {
    console.log(params);
  } else {
    console.log("params not found");
  }
}
//===============================-< On Mounted >-===============================
onMounted(() => {
})
</script>

<template>
  <!-- ===============================-< Header Start>-=============================== -->
  <header>
    <h1>Quia voluptatibus? Alias quia id aliquam voluptatum excepturi optio fuga!</h1>
  </header>
  <!-- ===============================-< Header End>-=============================== -->
</template>