import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AllDocumentsPage from "@/pages/AllDocumentsPage.vue";
import AllCompaniesPage from "@/pages/AllCompaniesPage.vue";
import AllEmployeesPage from "@/pages/AllEmployeesPage.vue";
import NewCompanyPage from "@/pages/NewCompanyPage.vue";
import DatabasePage from "@/pages/DatabasePage.vue";
import DocumentPage from "@/pages/DocumentPage.vue";

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
      component: AllDocumentsPage,
    },
    {
      path: "/documents/document/",
      name: "document",
      component: DocumentPage,
    },
    {
      path: "/collections",
      name: "database",
      component: DatabasePage,
    },
    {
      path: "/collections/companies",
      name: "companies",
      component: AllCompaniesPage,
    },
    {
      path: "/collections/employees",
      name: "employees",
      component: AllEmployeesPage,
    },
    {
      path: "/collections/companies/new",
      name: "newcompany",
      component: NewCompanyPage,
    },
  ],
});

export default router;
