<template>
  <header class="main-header" :class="minimizedStyle">
    <!-- Header Top-->
    <div class="main-header__top p-3">
      <img src="/icon-violet.png" class="main-header__logo" v-if="!minimized" />
      <button
        :class="[
          minimized
            ? 'main-header__btn-toggle_minimized'
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
import MainNav from "./MainHeaderNav.vue";
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
