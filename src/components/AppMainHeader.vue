<template>
  <header class="app__main-header" :class="minimizedStyle">
    <!-- Header Top-->
    <div class="app__main-header-top p-3">
      <img
        src="/icons/icon-violet.png"
        class="app__main-header-logo"
        v-if="!minimized"
      />
      <button
        :class="[
          minimized
            ? 'app__main-header-btn-toggle_minimized'
            : 'app__main-header-btn-toggle',
        ]"
        @click="toggle"
      ></button>
    </div>
    <!-- AppMainNav -->
    <AppMainHeaderNav :class="[!minimized ? 'enter-active' : 'leave-active']" />
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
