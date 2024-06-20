<template>
  <div class="page-title">
    <img :src="iconSrc" class="page-title__icon" alt="" />
    <h1 class="page-title__heading heading-1">{{ title }}</h1>
    <button class="btn-icon_info"></button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Page Title is Missing",
    },
    iconSrc: {
      type: String,
      default: "/icons/icon-is-missing.svg"
    },
  },
};
</script>
