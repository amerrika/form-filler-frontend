import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import DocumentsPage from "@/pages/DocumentsPage.vue";
import CompaniesPage from "@/pages/CompaniesPage.vue";
import EmployeesPage from "@/pages/EmployeesPage.vue";
import NewCompanyPage from "@/pages/NewCompanyPage.vue";
import DatabasePage from "@/pages/DatabasePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/documents",
      name: "documents",
      component: DocumentsPage,
    },
    {
      path: "/collections",
      name: "database",
      component: DatabasePage,
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
      name: "newcompany",
      component: NewCompanyPage,
    },
  ],
});

export default router;
