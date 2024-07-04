<template>
  <div class="document-page__sidebar" :class="minimizedStyle">
    <!-- Header -->
    <div class="document-page__sidebar-header bg-primary-500">
      <img
        src="/icons/icon-select-data.svg"
        class="document-page__sidebar-header-icon"
        alt=""
      />
      <h2
        class="document-page__sidebar-header-title"
        :class="[!isMinimized ? 'enter-active' : 'leave-active']"
      >
        Popunjavanje dokumenta
      </h2>
    </div>
    <!-- Toggle Button -->
    <div class="document-page__sidebar-toggle-wrapper">
      <button
        :class="
          isMinimized ? 'btn__icon_arrow-left' : 'btn__icon_arrow-right'
        "
        @click="toggleSidebar"
      ></button>
    </div>
    <!-- Main -->
    <div class="document-page__sidebar-main">
      <DocumentPageSidebarDataGroup></DocumentPageSidebarDataGroup>
    </div>
  </div>
</template>

<script>
// Import Vue Components
import DocumentPageSidebarDataGroup from "./DocumentPageSidebarDataGroup.vue";

export default {
  components: { DocumentPageSidebarDataGroup },
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
