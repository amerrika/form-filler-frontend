import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import FormsPage from "@/views/FormsPage.vue";
import CollectionsPage from "@/views/CollectionsPage.vue";
import CompaniesPage from "@/views/CompaniesPage.vue";
import EmployeesPage from "@/views/EmployeesPage.vue";
import NewCompanyPage from "@/views/NewCompanyPage.vue";

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
