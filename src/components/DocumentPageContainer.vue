<template>
  <div class="doc-page-container">
    <DocumentPageContainerToolbar />
    <DocumentPageContainerViewer />
  </div>
</template>

<script>
// Import Vue components
import DocumentPageContainerToolbar from "@/components/DocumentPageContainerToolbar.vue";
import DocumentPageContainerViewer from "@/components/DocumentPageContainerViewer.vue";

export default {
  components: {
    DocumentPageContainerToolbar,
    DocumentPageContainerViewer,
  },
};
</script>
