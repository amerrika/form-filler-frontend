<template>
  <PageTitle title="Baza svih kompanija" icon-src="/icons/icon-building.svg" />
  <AllCompaniesPageToolbar />
  <AllCompaniesPageResultsList :companies="companyStore.companies" />
</template>

<script>
// Vue Components
import PageTitle from "@/components/PageTitle.vue";
import AllCompaniesPageToolbar from "@/components/AllCompaniesPageToolbar.vue";
import AllCompaniesPageResultsList from "@/components/AllCompaniesPageResultsList.vue";
// Pinia Store (used without setup function)
import { useCompanyStore } from "@/stores/companyStore";
import { mapStores, setMapStoreSuffix } from "pinia";
setMapStoreSuffix("");

export default {
  components: {
    PageTitle,
    AllCompaniesPageToolbar,
    AllCompaniesPageResultsList,
  },
  computed: {
    // using Pinia without setup function
    ...mapStores(useCompanyStore),
  },
};
</script>
