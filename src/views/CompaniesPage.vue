<template>
  <div class="page-title">
    <h1 class="heading-1">Baza svih kompanija</h1>
    <ButtonInfo />
  </div>
  <CompaniesToolbar />
  <CompaniesList :companies="store.companies" />
</template>
<script>
import ButtonInfo from "@/components/buttons/ButtonInfo.vue";
import CompaniesToolbar from "@/components/CompaniesToolbar.vue";
import CompaniesList from "@/components/CompaniesList.vue";
import { useCompaniesStore } from "@/stores/CompaniesStore";

export default {
  components: {
    ButtonInfo,
    CompaniesToolbar,
    CompaniesList,
  },
  setup() {
    // access the store
    const store = useCompaniesStore();

    return { store };
  },
};
</script>
