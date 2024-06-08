import { defineStore } from "pinia";

// contains static data used by input components (select)
// collects data prvided by user, for a new company: selected options, input
// fetch companies from database
// add company to database
// update company to db

export const useCompanyStore = defineStore("companyStore", {
  state: () => ({
    companies: [],
    isLoading: false,
    // data for input components (select)
    selectOptions: {
      isTaxpayer: [
        {
          name: "Da",
          value: "da",
          isSelected: false,
        },
        {
          name: "Ne",
          value: "ne",
          isSelected: false,
        },
      ],
      companyType: [
        {
          name: "Društvo sa ograničenom odgovornošću",
          value: "doo",
          isSelected: false,
        },
        {
          name: "Obrt",
          value: "obrt",
          isSelected: false,
        },
      ],
      city: [
        {
          name: "Bihać",
          value: 77000,
          isSelected: false,
        },
        {
          name: "Cazin",
          value: 77220,
          isSelected: false,
        },
      ],
    },
  }),
  getters: {
    totalCount() {
      return this.companies.length;
    },
  },
  actions: {
    async getCompanies() {
      this.isLoading = true;
      const res = await fetch("http://localhost:3030/api/companies");
      const data = await res.json();

      this.companies = data;
      this.isLoading = false;
    },
  },
});
