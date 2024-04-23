<template>
  <div class="fav-list">
    <div class="fav-list__header pi-3 pb-2">
      <h3 class="fs-500 fw-500">{{ title }}</h3>
      <ButtonSettings />
    </div>
    <ul class="fav-list__menu p-3">
      <li role="button" class="fav-list__item" v-for="item in list">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import ButtonSettings from "./buttons/ButtonSettings.vue";

export default {
  components: {
    ButtonSettings,
  },
  props: {
    title: String,
    list: Array
  }
};
</script>
