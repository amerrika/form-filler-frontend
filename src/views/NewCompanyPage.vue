<template>
  <PageTitle title="Dodaj novu kompaniju u bazu" icon-src="/icon-add-company.svg" />
  <SelectSingle
    btn-text="Izaberite opciju"
    :select-options="selectOptions"
    @selected-option="updateSelectedOption"
  />
  <InputText label="Puna firma" input-id="test-id" />
</template>
<script>
import PageTitle from "@/components/PageTitle.vue";
import SelectSingle from "@/components/inputs/SelectSingle.vue";
import InputText from "@/components/inputs/InputText.vue";

export default {
  components: {
    PageTitle,
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
