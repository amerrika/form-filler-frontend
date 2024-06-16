<template>
  <div class="page-title">
    <img :src="iconSrc" class="page-title__icon" alt="" />
    <h1 class="page-title__heading heading-1">{{ title }}</h1>
    <ButtonInfo />
  </div>
</template>
<script>
import ButtonInfo from "./ButtonInfo.vue";
export default {
  props: {
    title: {
      type: String,
      default: "Page Title is Missing",
    },
    iconSrc: {
      type: String,
    },
  },
  components: {
    ButtonInfo,
  },
};
</script>
