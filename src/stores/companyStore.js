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
          value: true,
          isSelected: false,
        },
        {
          name: "Ne",
          value: false,
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
          value: "bihać",
          isSelected: false,
        },
        {
          name: "Cazin",
          value: "cazin",
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
    async saveCompany(company) {
      console.log("saveCompany is called")
      const res = await fetch("http://localhost:3030/api/companies", {
        method: "POST",
        body: JSON.stringify(company),
        headers: { "Content-Type": "application/json" },
      });

      if (res.error) {
        console.log(res.error);
      }
    },
  },
});
