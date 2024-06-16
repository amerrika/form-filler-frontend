<template>
  <div class="companies-toolbar mb-4 pb-2">
    <div>Search input</div>
    <div>Search by</div>
    <FilterResults
      :filter-data="filterData"
      btn-text="Filtriraj kompanije"
      @selected-options="updateSelectedFilterOptions"
    />
    <AddButton
      icon-src="/icons/icon-add-company.svg"
      btn-text="Novu kompaniju"
      link-to="/collections/companies/new"
    />
  </div>
</template>
<script>
import AddButton from "./AddButton.vue";
import FilterResults from "./FilterResults.vue"

export default {
  components: {
    FilterResults,
    AddButton,
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
              name: "Cazin",
              value: 77220,
              isSelected: false,
            },
            {
              id: "1.2",
              name: "Bihać",
              value: 77000,
              isSelected: false,
            },
            {
              id: "1.3",
              name: "Bužim",
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
              name: "DA",
              value: "da",
              isSelected: false,
            },
            {
              id: "2.2",
              name: "NE",
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
