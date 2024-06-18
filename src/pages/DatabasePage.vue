<template>
  <PageTitle title="Baza podataka" icon-src="/icons/icon-database.svg" />
  <DatabasePageList :companies-total-count="companyStore.totalCount" />
</template>

<script>
// Vue Components
import PageTitle from "@/components/PageTitle.vue";
import DatabasePageList from "@/components/DatabasePageList.vue";
// Pinia Store (used without setup function)
import { useCompanyStore } from "@/stores/companyStore";
import { mapStores, setMapStoreSuffix } from "pinia";
setMapStoreSuffix("");

export default {
  components: {
    PageTitle,
    DatabasePageList,
  },
  computed: {
    // using Pinia without setup function
    ...mapStores(useCompanyStore),
  },
};
</script>
