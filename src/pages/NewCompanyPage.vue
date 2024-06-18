<template>
  <div class="new-company">
    <PageTitle
      title="Dodavanje nove kompanije u bazu"
      icon-src="/icons/icon-add-company.svg"
    />
    <FormCompany />
  </div>
</template>
<script>
import PageTitle from "@/components/PageTitle.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import FormCompany from "@/components/FormCompany.vue";

export default {
  components: {
    PageTitle,
    SectionTitle,
    FormCompany,
  },
};
// All data provided by the user will be saved
// inside this page
// id number
// city
// isTaxpayer...
// from here to Store/DB
</script>
