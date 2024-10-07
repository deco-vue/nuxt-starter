<script setup lang="ts">
//===============================-< Use of Imported >-===============================
const toast = useToast()
//===============================-< On Mounted >-===============================
onMounted(() => {
  // document.addEventListener('contextmenu', event => {
  //   event.preventDefault()
  //   toast.add({ title: 'Hay Hay Sekinro' });
  // });

  // document.addEventListener('keydown', function (event) {
  //   if (event.ctrlKey && ['u', 'i', 'c', 'j'].includes(event.key.toLowerCase())) {
  //     event.preventDefault();
  //     toast.add({ title: 'Hay Hay Sekinro' });
  //   } else if (event.key === 'F12') {
  //     event.preventDefault();
  //     toast.add({ title: 'Hay Hay Sekinro' });
  //   }
  // });
})

</script>

<template>
  <!-- ===============================-< Nuxt Head >-=============================== -->

  <Head>
    <title>Deco's app</title>
    <meta name="description" content="This is deco's Nuxt 3 app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="keywords" content="nuxt, vue, javascript" />
  </Head>
  <!-- ===============================-< Nuxt Head >-=============================== -->
  <NuxtLoadingIndicator />
  <NuxtLayout />
  <UNotifications />
</template>
