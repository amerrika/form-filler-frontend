import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import FormsList from "@/views/FormsList.vue";
import CollectionsPage from "@/views/CollectionsPage.vue";
import CompaniesPage from "@/views/CompaniesPage.vue";
import EmployeesPage from "@/views/EmployeesPage.vue";

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
      component: FormsList,
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
  ],
});

export default router;
