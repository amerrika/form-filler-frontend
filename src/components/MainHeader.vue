<template>
  <header class="main-header" :class="minimizedStyle">
    <!-- Header Top-->
    <div class="main-header__top p-3">
      <span class="main-header__logo" v-if="!minimized">Form Filler</span>
      <button
        :class="[
          minimized
            ? 'main-header__btn-toggle-minimized'
            : 'main-header__btn-toggle',
        ]"
        @click="toggle"
      ></button>
    </div>
    <!-- MainNav -->
    <MainNav v-if="!minimized" />
  </header>
</template>

<script>
import MainNav from "./MainNav.vue";
export default {
  components: {
    MainNav,
  },
  data() {
    return {
      minimized: false,
    };
  },
  methods: {
    toggle() {
      this.minimized = !this.minimized;
    },
  },
  computed: {
    minimizedStyle() {
      if (this.minimized) {
        return "minimized";
      }
    },
  },
};
</script>
