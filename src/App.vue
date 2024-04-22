<template>
  <MainHeader />
  <main>
    <RouterView />
  </main>
</template>

<script>
import MainHeader from "./components/MainHeader.vue";
import "../src/scss/main.scss";

export default {
  components: {
    MainHeader,
  },
};
</script>
