import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/components/HomePage.vue'
import CouresFree from '../components/CouresFree.vue'
import knowledgeFree from '../components/knowledgeFree.vue'
import CouresSET from '../components/CouresSET.vue'
import Books from "@/components/Books.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/Coures",
    name: "Coures",
    component: CouresFree,
  },
  {
    path: "/knowledge",
    name: "knowledge",
    component: knowledgeFree,
  },
  {
    path: "/CouresSet",
    name: "CouresSet",
    component: CouresSET,
  },
  {
    path: "/Books",
    name: "Books",
    component: Books,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
