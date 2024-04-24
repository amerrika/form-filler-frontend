<template>
  <!-- For styles look at home-fav.scss -->
  <div class="home-fav">
    <div class="home-fav__header pi-4 pb-2">
      <h3 class="fs-500 fw-500 txt-neutral-600">{{ title }}</h3>
      <ButtonSettings />
    </div>
    <ul class="home-fav__menu p-3">
      <li role="button" class="home-fav__item fs-300" v-for="item in list">
        {{ item.title }}
      </li>
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
    list: Array,
  },
};
</script>
