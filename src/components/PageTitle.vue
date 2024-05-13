<template>
  <div class="page-title">
    <h1 class="heading-1">{{ title }}</h1>
    <ButtonInfo />
  </div>
</template>
<script>
import ButtonInfo from "./buttons/ButtonInfo.vue";
export default {
  props: { title: String },
  components: {
    ButtonInfo,
  },
};
</script>
