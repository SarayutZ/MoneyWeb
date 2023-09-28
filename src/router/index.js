import { createRouter, createWebHistory } from "vue-router";
import HomePage from '@/components/HomePage.vue'
import CoursePage from '../components/CouresPage.vue'
import KnowleadgePage from "@/components/KnowleadgePage.vue";
import BooksPage from "@/components/BooksPage.vue";

import Coures_SET from '@/components/Course/Coures_SET.vue'
import Course_YT from "@/components/Course/Course_YT.vue";
import Course_AT from "@/components/Course/Course_AT.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
    // หน้าหลัก เวลาเปิดเว็บ ขึ้นมา
  },
  {
    path: "/Coures",
    name: "Coures",
    component: CoursePage,
    // หน้า คอร์ส ทั้งหมด มี การ set youtube อื่นๆ
  },
  {
    path: "/knowledge",
    name: "knowledge",
    component: KnowleadgePage,
    // หน้า แสดงความรู้เบื้องต้น
  },
  {
    path: "/CouresSet",
    name: "CouresSet",
    component: Coures_SET,
    // หน้าแสดง คอร์สจากตลาดหลักทรัพทย์ ท้งหมด
  },
  {
    path: "/Books",
    name: "Books",
    component: BooksPage,
       // หน้าแสดง หนังสือการเงินทั้งหมด
  },
  {
    path: "/youtube",
    name: "youtube",
    component: Course_YT,
    // หน้าแสดง คอร์สจาก youtube ทั้งหมด
  },
  {
    path: "/another",
    name: "another",
    component: Course_AT,
    // หน้าแสดง แหล่งความรู้อื่นๆ
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
