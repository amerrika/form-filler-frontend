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
    <button
      :class="
        isMinimized
          ? 'document-page__sidebar-btn-toggle_minimized'
          : 'document-page__sidebar-btn-toggle'
      "
      @click="toggleSidebar"
    ></button>
    <!-- Content -->
    <div class="document-page__sidebar-main">
      <DataToolbar>
        <DataToolbarFieldGroup></DataToolbarFieldGroup>
      </DataToolbar>
    </div>
  </div>
</template>

<script>
// Import Vue Components
import DataToolbar from "./DataToolbar.vue";
import DataToolbarFieldGroup from "./DataToolbarFieldGroup.vue";

export default {
  components: {
    DataToolbar,
    DataToolbarFieldGroup,
  },
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
