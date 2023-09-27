<template>
  <div v-if="showContent" class="container d-flex justify-content-between">
  <a class="navbar-brand" href="#">
  <router-link to="/"><img src="../assets/logo2.png" width="60" height="60" /></router-link>  
  </a>

  <div class="menu d-flex mt-3">
  <router-link  style="text-decoration: none; color: inherit;" to="/"><h5 class="text-menu mx-3">หน้าหลัก</h5></router-link>  
   <router-link style="text-decoration: none; color: inherit;" to="/knowledge"><h5 class="text-menu mx-3">ความรู้เรื่องการเงิน</h5></router-link> 
    <router-link  style="text-decoration: none; color: inherit;" to="/Coures"><h5 class="text-menu mx-3">คอร์สฟรี</h5></router-link>
    <router-link  style="text-decoration: none; color: inherit;"  to="/Books"><h5 class="text-menu mx-3">หนังสือการลงทุน</h5></router-link>
    <h5 class="text-menu mx-3">ติดต่อเรา</h5>
    <font-awesome-icon class="text-menuicon mx-3 " :icon="['fas', 'bars']" />
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      showContent: false,
    };
  },
  mounted() {
    // ตั้งค่า showContent เป็น true เมื่อคอนเทนต์เริ่มแสดง
    setTimeout(() => {
      this.showContent = true;
    }, 200); // เปลี่ยนเวลาตามที่คุณต้องการ
  },
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Itim&display=swap");

.container{
    margin-top: 10px;
  font-family: 'Itim', cursive;
}

/* เพิ่มสไตล์สำหรับเมนูเมื่อโฮเวอร์ */
.text-menu {
  text-decoration: none;
  position: relative;
  transition: 0.2s;
}

.text-menu::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -2px;
  left: 0;
  background-color: #007BFF; /* เปลี่ยนสีของเงาเมื่อโฮเวอร์ */
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.2s ease-out;
}

.text-menu:hover::before {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.menu {
  display: flex;
  align-items: center;
}

/* เพิ่มการเปลี่ยนสีของตัวอักษรเมื่อโฮเวอร์ */
.text-menu:hover {
  color: #007BFF; /* เปลี่ยนสีของตัวอักษรเมื่อโฮเวอร์ */
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.container {
  margin-top: 10px;
  font-family: 'Itim', cursive;
  animation: fadeIn 1s ease-in-out; /* เพิ่มอนิเมชัน fadeIn ด้วย animation property */
}

</style>