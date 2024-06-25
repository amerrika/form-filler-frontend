<template>
  <span class="data-holder">{{ data }}</span>
</template>

<script>
export default {
  props: {
    data: {
      type: String,
      required: false,
      default: "Potreban podatak"
    }
  }
};
</script>
