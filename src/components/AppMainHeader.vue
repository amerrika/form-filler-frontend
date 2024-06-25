<template>
  <header class="main-header" :class="minimizedStyle">
    <!-- Header Top-->
    <div class="main-header__top p-3">
      <img
        src="/icons/icon-violet.png"
        class="main-header__logo"
        v-if="!minimized"
      />
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
    <AppMainHeaderNav v-if="!minimized" />
  </header>
</template>

<script>
import AppMainHeaderNav from "./AppMainHeaderNav.vue";
export default {
  components: {
    AppMainHeaderNav,
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
