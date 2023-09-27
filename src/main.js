import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// ส่วนของ boostrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// main.js หรือไฟล์ที่เหมาะสมในโปรเจค Vue.js
import 'bootstrap/dist/css/bootstrap.css'; // นำเข้า CSS ของ Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle'; // นำเข้า JavaScript ของ Bootstrap (รวมกับ Popper.js ถ้าจำเป็น)


// ส้วนของ icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons"; // นี่คือชุดไอคอน Solid Style
library.add(fas);

createApp(App)
  .use(store)
  .use(router)

  .component("font-awesome-icon", FontAwesomeIcon) // สร้างคอมโพเนนต์ FontAwesomeIcon
  .mount("#app");
