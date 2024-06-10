<template>
  <MainHeader />
  <main>
    <RouterView />
  </main>
</template>

<script>
// Vue Components
import MainHeader from "./components/MainHeader.vue";
// Scss
import "../src/scss/main.scss";
// Pinia Store (used without setup function)
import { useCompanyStore } from "@/stores/companyStore";
import { mapStores, setMapStoreSuffix } from "pinia";
setMapStoreSuffix("");

export default {
  components: {
    MainHeader,
  },
  computed: {
    // using Pinia without setup function
    ...mapStores(useCompanyStore),
  },
  created() {
    // fetch companies
    this.companyStore.getCompanies();
  },
};
</script>
