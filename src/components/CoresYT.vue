<template>
<ul> คอร์สจาก ตลาดหลักทรัพย์</ul>

  <div class="card-carousel">
    <div id="cardCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(card, index) in carouselCards" :key="index" :class="['carousel-item', index === 0 ? 'active' : '']">
  <div class="row">
    <div  v-for="(item, subIndex) in carouselCards.slice(index, index + 3)" :key="subIndex" class="col-sm-4 mb-3 show">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <img :src=" item.img" alt="" srcset="">
                  <p class="card-text">{{ item.text }}</p>
                  <a :href="item.link" class="btn btn-primary">{{ item.buttonText }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
      class="carousel-control-prev"
      type="button"
        data-bs-target="#cardCarousel"
        data-bs-slide="prev"
      >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
      <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#cardCarousel"
      data-bs-slide="next"
      >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <router-link  to="/CouresSet"  style="text-decoration: none; "><h3 class="text-course">ดูคอร์สทั้งหมด </h3></router-link>
</div>
</template>

<script>

import { mapGetters } from "vuex";
import MenuBar from "./MenuBar.vue";

window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
export default {
    computed: {
        ...mapGetters(["CourseL"]),
        carouselCards() {
            return this.CourseL.map((course, index) => ({
                title: course.name,
                text: course.CourseForm,
                link: course.Learnlink,
                img:course.imagesCourse,
                buttonText: "Learn More",
            }));
        },
    },
    mounted() {
        // เรียกใช้ Bootstrap Carousel
        new bootstrap.Carousel(document.getElementById('cardCarousel'), {
            interval: 5000, // ตั้งค่าระยะเวลาการเปลี่ยนสไลด์
        });
    },
    components: { MenuBar }
};
</script>

<style scoped>
.text-course{
text-align: end;
  font-size: 18px;
  margin-right: 100px;

}
.text-course h3:hover{
  color: red;
}

.show img{
  width: 150px;
  height: 150px;
}
.card-carousel {
  margin: 10px auto;
  max-width: 1200px;
  padding: 20px;

  border-radius: 10px;
  overflow: hidden; /* เพิ่มโค้ดนี้เพื่อซ่อนส่วนเกินของการ์ดที่เกินขอบ */
}

.carousel-inner {
  text-align: center;
}

.carousel-item {
  background-color: #f7f7f7;
  padding: 20px;
  border-radius: 10px;
  transition: transform 0.3s ease; /* เพิ่มการเปลี่ยนแปลงแบบมีความสามารถในการเลื่อน */
  overflow: hidden; /* เพิ่มโค้ดนี้เพื่อซ่อนส่วนเกินของการ์ดที่เกินขอบ */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* เพิ่มเงาให้กับการ์ดทั้งหมด */
}

.carousel-item.active {
  transform: scale(1.05); /* เพิ่มการขยายขนาดของการ์ดที่เลือก */

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* เพิ่มเงาให้กับการ์ดที่เลือก */
}

.card {
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 100%;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px; /* เพิ่มช่องว่างด้านล่างของชื่อการ์ด */
}

.card-img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px; /* เพิ่มช่องว่างด้านล่างของรูปภาพการ์ด */
}

.card-text {
  font-size: 16px;
  color: #666;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3; /* เพิ่มสีเมื่อโฮเวอร์ */
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #007bff;
  border-radius: 50%;
  width: 30px;
  height: 30px;

}

.carousel-control-prev,
.carousel-control-next {
  background-color: transparent;

}

/* เพิ่มการปรับแต่งสไลด์เพิ่มเติมตามต้องการ */
</style>

