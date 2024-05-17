<template>
  <div class="new-company">
    <PageTitle
      title="Dodavanje nove kompanije u bazu"
      icon-src="/icon-add-company.svg"
    />
    <section class="new-company__section p-5 br-10 mb-start-5">
      <div class="even-columns">
        <div>
          <SectionTitle title="Podaci o firmi" />
          <InputText label="Puna firma" input-id="puna-firma" />
          <InputText label="Skraćena firma" input-id="skracena-firma" />
        </div>
        <div>
          <SectionTitle title="Identifikacioni podaci" />
          <InputText label="Puna firma" input-id="puna-firma" />
          <InputText label="Skraćena firma" input-id="skracena-firma" />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import PageTitle from "@/components/PageTitle.vue";
import SelectSingle from "@/components/inputs/SelectSingle.vue";
import InputText from "@/components/inputs/InputText.vue";
import SectionTitle from "@/components/SectionTitle.vue";

export default {
  components: {
    PageTitle,
    SectionTitle,
    SelectSingle,
    InputText,
  },
  data() {
    return {
      selectOptions: [
        {
          id: "1",
          name: "Bihać",
          value: 77200,
          isSelected: false,
        },
        {
          id: "2",
          name: "Cazin",
          value: 77220,
          isSelected: false,
        },
      ],
      selectedOption: null,
    };
  },
  methods: {
    updateSelectedOption(data) {
      console.log(data);
      this.selectedOption = data;
    },
  },
};
// All data provided by the user will be saved
// inside this page
// id number
// city
// isTaxpayer...
</script>
