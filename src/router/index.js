import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import FormsList from "@/views/FormsList.vue";
import CollectionsPage from "@/views/CollectionsPage.vue";

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
  ],
});

export default router;
