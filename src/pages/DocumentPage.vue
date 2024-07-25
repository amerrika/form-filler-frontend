<template>
  <div class="document-page">
    <!-- TITLE -->
    <PageTitle
      title="Uredite odabrani dokument"
      icon-src="/icons/icon-edit-document.svg"
    />
    <!-- CONTAINER -->
    <div class="flex-end g-4">
      <!-- VIEWER -->
      <DocumentPageViewer />
      <!-- RIGHT SIDEBAR -->
      <DocumentPageSidebar />
    </div>
  </div>
</template>

<script>
// Import Vue components
import DocumentPageSidebar from "@/components/DocumentPageSidebar.vue";
import DocumentPageViewer from "@/components/DocumentPageViewer.vue";
import PageTitle from "@/components/PageTitle.vue";

export default {
  components: {
    DocumentPageViewer,
    DocumentPageSidebar,
    PageTitle,
  },
};
</script>
