<template>
  <PageTitle title="Dodaj novu kompaniju" />
  <SelectSingle
    btn-text="Izaberite opciju"
    :select-options="selectOptions"
    @selected-option="updateSelectedOption"
  />
</template>
<script>
import PageTitle from "@/components/PageTitle.vue";
import SelectSingle from "@/components/inputs/SelectSingle.vue";

export default {
  components: {
    PageTitle,
    SelectSingle,
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
      console.log(data)
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
