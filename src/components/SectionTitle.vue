<template>
  <div class="section-title pb-end-2 mb-end-4">
    <div class="bg-primary-500 p-2 br-50">
      <img :src="iconSrc" class="section-title__icon" alt="" />
    </div>
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
      default: "/icons/icon-is-missing.svg",
    },
  },
};
</script>
