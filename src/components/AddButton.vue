<template>
  <router-link to={{ linkTo }} class="btn-add__employee">
    <img src={{ iconSrc }} alt="" />
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
