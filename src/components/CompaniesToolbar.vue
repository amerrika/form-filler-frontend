<template>
  <div class="companies-toolbar mb-4 pb-2">
    <div>Search input</div>
    <div>Search by</div>
    <FilterResults
      :filter-data="filterData"
      @selected-options="updateSelectedFilterOptions"
    />
    <ButtonAddCompany />
  </div>
</template>
<script>
import ButtonAddCompany from "./buttons/ButtonAddCompany.vue";
import FilterResults from "./inputs/FilterResults.vue";

export default {
  components: {
    FilterResults,
    ButtonAddCompany,
  },
  data() {
    return {
      filterData: {
        group1: {
          id: "1",
          title: "Mjesto sjedišta",
          options: [
            {
              id: "1.1",
              option: "Cazin",
              value: 77220,
              isSelected: false,
            },
            {
              id: "1.2",
              option: "Bihać",
              value: 77000,
              isSelected: false,
            },
            {
              id: "1.3",
              option: "Bužim",
              value: 77000,
              isSelected: false,
            },
          ],
        },
        group2: {
          id: "2",
          title: "PDV obveznik",
          options: [
            {
              id: "2.1",
              option: "DA",
              value: "da",
              isSelected: false,
            },
            {
              id: "2.2",
              option: "NE",
              value: "ne",
              isSelected: false,
            },
          ],
        },
      },
      // options selected by user
      selectedFilterOptions: [],
    };
  },
  methods: {
    updateSelectedFilterOptions(data) {
      this.selectedFilterOptions = data;
    },
  },
};
</script>
