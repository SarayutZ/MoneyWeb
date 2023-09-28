<template>
  <!-- หน้านี้คือ หน้า แสดง คอร์ส จาก Youtube ทั้งหมด  -->

  <MenuBar /><!-- ตรงนี้ คือ component จาก MenuBar.vue -->
  
<h1 class="text-center">คอร์ส YouTube</h1>

 <!-- ส้วนนี้คือ ส่วนที่ ใช้ แสดง คอร์ส set ทั้งมหด -->
  <div class="YT">
    <div class="row">
      <div class="col" v-for="(course, index) in CourseYT" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ course.name }}</h5>
            <iframe width="250px" :src="course.Video" frameborder="0" allowfullscreen></iframe>
            <a :href="course.LinkYT"  target="_blank" class="btn btn-primary">ดูเพิ่มเติม</a>

          </div>
        </div>
      </div>
    </div>
  </div>

  </template>
  
  <script>
  import { mapGetters } from "vuex";
  import MenuBar from "../MenuBar.vue";
  export default {
    components: { MenuBar },
    computed: {
      ...mapGetters(["CourseYT"]), // ดึงข้อมูล CourseYT จาก Vuex
    },
  };
  </script>
  <style >

  .YT {
    padding: 20px;
  }
  
  .card {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 10px auto ; /* ปรับแต่งระยะห่างขอบบนและล่าง */
  }
  

  
  .card-img-top {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  
  .card-title {
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }
  
  .card-text {
    font-size: 16px;
    color: #666;
  }
  
  .btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    margin-top: 10px;
  }
  
  .btn-primary:hover {
    background-color: #0056b3;
  }
  </style>
  