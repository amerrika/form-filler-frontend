<template>
  <div class="document-page-sidebar" :class="minimizedStyle">
    <!-- Header -->
    <div class="document-page-sidebar__header bg-primary-500">
      <img
        src="/icons/icon-select-data.svg"
        class="document-page-sidebar__header-icon"
        alt=""
      />
      <h2
        class="document-page-sidebar__header-title"
        :class="[!isMinimized ? 'enter-active' : 'leave-active']"
      >
        Popunjavanje dokumenta
      </h2>
    </div>
    <!-- Toggle Button -->
    <button
      :class="
        isMinimized
          ? 'document-page-sidebar__btn-toggle_minimized'
          : 'document-page-sidebar__btn-toggle'
      "
      @click="toggleSidebar"
    ></button>
    <!-- Content -->
    <div class="document-page-sidebar__content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMinimized: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isMinimized = !this.isMinimized;
    },
  },
  computed: {
    minimizedStyle() {
      if (this.isMinimized) {
        return "minimized";
      }
    },
  },
};
</script>
