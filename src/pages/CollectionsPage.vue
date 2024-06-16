<template>
  <PageTitle title="Baza svih kolekcija" icon-src="/icons/icon-database.png" />
  <CollectionsList :companies-total-count="companyStore.totalCount" />
</template>

<script>
// Vue Components
import PageTitle from "@/components/PageTitle.vue";
import CollectionsList from "@/components/CollectionsList.vue";
// Pinia Store (used without setup function)
import { useCompanyStore } from "@/stores/companyStore";
import { mapStores, setMapStoreSuffix } from "pinia";
setMapStoreSuffix("");

export default {
  components: {
    PageTitle,
    CollectionsList,
  },
  computed: {
    // using Pinia without setup function
    ...mapStores(useCompanyStore),
  },
};
</script>
