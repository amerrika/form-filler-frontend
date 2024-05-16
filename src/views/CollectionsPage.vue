<template>
  <PageTitle title="Baza svih kolekcija" icon-src="/icon-database.png" />
  <CollectionsList :companies-total-count="store.totalCount" />
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import CollectionsList from "@/components/CollectionsList.vue";
import { useCompaniesStore } from "@/stores/CompaniesStore";

export default {
  components: {
    PageTitle,
    CollectionsList,
  },
  setup() {
    // access the store
    const store = useCompaniesStore();
    // fetch companies
    store.getCompanies();

    return { store };
  },
};
</script>
