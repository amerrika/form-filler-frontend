<template>
  <div class="page-title">
    <h1 class="heading-1">Baza svih kompanija</h1>
    <ButtonInfo />
  </div>
  <CompaniesToolbar />
  <CompaniesList :companies="companyStore.companies" />
</template>

<script>
// Vue Components
import ButtonInfo from "@/components/ButtonInfo.vue";
import CompaniesToolbar from "@/components/CompaniesToolbar.vue";
import CompaniesList from "@/components/CompaniesList.vue";
// Pinia Store (used without setup function)
import { useCompanyStore } from "@/stores/companyStore";
import { mapStores, setMapStoreSuffix } from "pinia";
setMapStoreSuffix("");

export default {
  components: {
    ButtonInfo,
    CompaniesToolbar,
    CompaniesList,
  },
  computed: {
    // using Pinia without setup function
    ...mapStores(useCompanyStore),
  },
};
</script>
