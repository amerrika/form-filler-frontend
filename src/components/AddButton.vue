<template>
  <router-link :to="linkTo" class="btn_start">
    <img :src="iconSrc" alt="" />
    <span>{{ btnText }}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    btnText: {
      type: String,
      required: true,
      default: "Button Name",
    },
    iconSrc: {
      type: String,
      required: true,
      default: "/icons/icon-is-missing.svg",
    },
    linkTo: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>
