<template>
  <div class="page-title">
    <h1 class="heading-1">Baza svih kolekcija</h1>
    <ButtonInfo />
  </div>
  <CollectionsList :companies-total-count="store.totalCount" />
</template>

<script>
import ButtonInfo from "@/components/buttons/ButtonInfo.vue";
import CollectionsList from "@/components/CollectionsList.vue";
import { useCompaniesStore } from "@/stores/CompaniesStore";

export default {
  components: {
    ButtonInfo,
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
