<template>
  <div class="document-viewer">
    <div class="document-viewer__outer">
      <div class="document-viewer__inner">
        <Letter1 />
      </div>
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
