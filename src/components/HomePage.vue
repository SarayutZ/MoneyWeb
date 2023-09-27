<template>
  <MenuBar />
  <div class="bg">
    <div class="explan-money text-center">
      <h3>
        เริ่มต้นการเงินของคุณที่นี้ <span class="text-danger">ฟรี !!</span>
      </h3>
      <h5>
        เรียนรู้เกี่ยวกับ <span class="bb fw-bold">การออมเงิน</span> <span class="bb fw-bold">การลงทุน</span> และ
        <span class="bb fw-bold"> การจัดการงบประมาณ</span>
      </h5>

      <router-link to="/knowledge"><button type="button" class="btn btn-outline-dark mt-5">เริ่มต้น</button></router-link>
    </div>
  </div>

<Extree/>  

</template>

<script>
import Extree from "./Extree.vue";
import MenuBar from "./MenuBar.vue";

export default {
  components: { MenuBar, Extree },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");

.menu {
  font-family: "Itim", cursive;
}
.explan-money {
  position: relative;
  top: 200px;
}
@keyframes slide-up {
  from {
    transform: translateY(50px); /* Adjust the initial position as needed */
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Rest of your existing styles */

.explan-money {
  position: relative;
  top: 200px;
  animation: slide-up 1s ease-in-out; /* Adjust the animation duration as needed */
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
.text-menuicon {
  margin-top: 5px;
}
.bg {
  background-image: url("../assets/page.png");
  width: 98vw;
  height: 89vh;
}
.bb {
  color: rgb(20, 146, 45);
}
</style>
