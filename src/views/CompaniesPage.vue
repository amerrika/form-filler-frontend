<template>
  <div class="page-title">
    <h1 class="heading-1">Baza svih kompanija</h1>
    <ButtonInfo />
  </div>
  <CompaniesToolbar />
  <CompaniesList />
</template>
<script>
import ButtonInfo from "@/components/buttons/ButtonInfo.vue";
import CompaniesToolbar from "@/components/CompaniesToolbar.vue";
import CompaniesList from "@/components/CompaniesList.vue";

export default {
  components: {
    ButtonInfo,
    CompaniesToolbar,
    CompaniesList,
  },
};
</script>
