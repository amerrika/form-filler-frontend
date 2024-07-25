<template>
  <div class="dropdown">
    <!-- Header -->
    <div class="dropdown__header">
      <button class="btn__dropdown-toggle_primary p-1" @click="handleButton">
        <span class="fs-400 fw-400">{{ title }}</span>
        <span
          :class="[
            isExpanded ? 'btn__dropdown-icon_up' : 'btn__dropdown-icon_down',
          ]"
        ></span>
      </button>
    </div>
    <!-- Main -->
    <Transition v-show="isExpanded">
      <div class="dropdown__main">
        <slot />
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Dropdown Titleee",
    },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    handleButton() {
      this.isExpanded = !this.isExpanded;
    },
  },
};
</script>
