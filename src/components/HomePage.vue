<template>


<!-- หน้านี้ คือ หน้าหลัก เวลาขึ้นเปิดเว็บมา -->

  <div>

    <MenuBar />  <!-- ตรงนี้ คือ component จาก MenuBar.vue -->

    <div class="bg">
      <div class="explan-money text-center">
        <h3>
          เริ่มต้นการเงินของคุณที่นี้ <span class="text-danger">ฟรี !!</span>
        </h3>
        <h5>
          เรียนรู้เกี่ยวกับ <span class="word fw-bold">การออมเงิน</span>
          <span class="word fw-bold">การลงทุน</span> และ
          <span class="word fw-bold">การจัดการงบประมาณ</span>
        </h5>

        <router-link to="/knowledge">  <!-- ตรงนี้ ใช้สำหรับ กด แล้ว ไป อีกหน้า  -->
          <button type="button" class="btn btn-outline-dark mt-5">เริ่มต้น</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBar from "./MenuBar.vue";

export default {
  components: { MenuBar },
};
</script>

<style scoped>
/* ส่วนนี้เป็น ส่วนที่ ใช้ เปลี่ยน font ตัวหนังสือ  */
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");

/* เปลี่ยนตัวหนังสือ ใน class menu เป็น font  Itim */
.menu {
  font-family: "Itim", cursive;
}
/* ส่วนนี้เป็น ส่วนที่ทำให้ ตัวหนังสือ slide ขึ้นมา ตอนเปิดเว็บ  */
@keyframes slide-up {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* เป็น ส่วนที่ ที่จะให้ slide  */
.explan-money {
  position: relative;
  top: 200px;
  animation: slide-up 1s ease-in-out;
}

.explan-money h3 {
  font-size: 64px;
  font-family: "Itim", cursive;
}

.btn {
  font-size: 25px;
  border-radius: 75px;
  width: 120px;
}

.bg {
  background-image: url("../assets/page.png");
  width: 98vw;
  height: 89vh;
}

.word {
  color: rgb(20, 146, 45);
}
</style>
