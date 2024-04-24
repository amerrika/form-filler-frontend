<template>
  <div class="page-title">
    <h1 class="heading-1">Baza svih kompanija</h1>
    <ButtonInfo />
  </div>
  <CompaniesToolbar />
</template>
<script>
import ButtonInfo from "@/components/buttons/ButtonInfo.vue";
import CompaniesToolbar from "@/components/CompaniesToolbar.vue";

export default {
  components: {
    ButtonInfo,
    CompaniesToolbar
  },
};
</script>
