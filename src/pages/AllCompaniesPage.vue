<template>
  <PageTitle title="Baza svih kompanija" icon-src="/icons/icon-database.png" />
  <CompaniesPageToolbar />
  <CompaniesPageResultsList :companies="companyStore.companies" />
</template>

<script>
// Vue Components
import PageTitle from "@/components/PageTitle.vue";
import CompaniesPageToolbar from "@/components/CompaniesPageToolbar.vue";
import CompaniesPageResultsList from "@/components/CompaniesPageResultsList.vue";
// Pinia Store (used without setup function)
import { useCompanyStore } from "@/stores/companyStore";
import { mapStores, setMapStoreSuffix } from "pinia";
setMapStoreSuffix("");

export default {
  components: {
    PageTitle,
    CompaniesPageToolbar,
    CompaniesPageResultsList,
  },
  computed: {
    // using Pinia without setup function
    ...mapStores(useCompanyStore),
  },
};
</script>
