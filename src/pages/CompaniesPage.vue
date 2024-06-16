<template>
  <PageTitle title="Baza svih kompanija" icon-src="/icons/icon-database.png" />
  <CompaniesToolbar />
  <CompaniesList :companies="companyStore.companies" />
</template>

<script>
// Vue Components
import PageTitle from "@/components/PageTitle.vue";
import CompaniesToolbar from "@/components/CompaniesToolbar.vue";
import CompaniesList from "@/components/CompaniesList.vue";
// Pinia Store (used without setup function)
import { useCompanyStore } from "@/stores/companyStore";
import { mapStores, setMapStoreSuffix } from "pinia";
setMapStoreSuffix("");

export default {
  components: {
    PageTitle,
    CompaniesToolbar,
    CompaniesList,
  },
  computed: {
    // using Pinia without setup function
    ...mapStores(useCompanyStore),
  },
};
</script>
