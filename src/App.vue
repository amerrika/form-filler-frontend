<template>
  <AppMainHeader />
  <main class="app__main">
    <RouterView />
  </main>
</template>

<script>
// Vue Components
import AppMainHeader from "./components/AppMainHeader.vue";
// Scss
import "../src/scss/main.scss";
// Pinia Store (used without setup function)
import { useCompanyStore } from "@/stores/companyStore";
import { mapStores, setMapStoreSuffix } from "pinia";
setMapStoreSuffix("");

export default {
  components: {
    AppMainHeader,
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
