<template>
  <div class="document-page__viewer">
    <div class="document-page__viewer-container">
      <!-- Print document -->
      <Letter1 />
    </div>
  </div>
</template>

<script>
// Import Vue components
import Letter1 from "./print-documents/Letter1.vue";

export default {
  components: {
    Letter1,
  },
};
</script>
