import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import FormsPage from "@/pages/FormsPage.vue";
import CollectionsPage from "@/pages/CollectionsPage.vue";
import CompaniesPage from "@/pages/CompaniesPage.vue";
import EmployeesPage from "@/pages/EmployeesPage.vue";
import NewCompanyPage from "@/pages/NewCompanyPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/forms",
      name: "forms",
      component: FormsPage,
    },
    {
      path: "/collections",
      name: "collections",
      component: CollectionsPage,
    },
    {
      path: "/collections/companies",
      name: "companies",
      component: CompaniesPage,
    },
    {
      path: "/collections/employees",
      name: "employees",
      component: EmployeesPage,
    },
    {
      path: "/collections/companies/new",
      name: "new-company",
      component: NewCompanyPage,
    },
  ],
});

export default router;
