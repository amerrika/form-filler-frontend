<template>
  <div class="new-company">
    <PageTitle
      title="Dodavanje nove kompanije u bazu"
      icon-src="/icon-add-company.svg"
    />
    <NewCompanyForm />
  </div>
</template>
<script>
import PageTitle from "@/components/PageTitle.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import NewCompanyForm from "@/components/NewCompanyForm.vue";

export default {
  components: {
    PageTitle,
    SectionTitle,
    NewCompanyForm,
  },
};
// All data provided by the user will be saved
// inside this page
// id number
// city
// isTaxpayer...
// from here to Store/DB
</script>
