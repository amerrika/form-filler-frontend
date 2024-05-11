import { defineStore } from "pinia";

export const useCompaniesStore = defineStore("companiesStore", {
  state: () => ({
    companies: [],
    isLoading: false,
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
