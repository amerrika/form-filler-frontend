<template>
  <div class="section-title">
    <img :src="iconSrc" class="section-title__icon" alt="" />
    <h2 class="section-title__heading heading-2">{{ title }}</h2>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: "A Title Is Missing",
    },
    iconSrc: {
      type: String,
    },
  },
};
</script>
