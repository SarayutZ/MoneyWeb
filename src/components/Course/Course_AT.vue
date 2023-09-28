<template>
    <!-- หน้านี้คือ หน้า แสดง แหล่งความรู้ อื่นๆ ทั้งหมด  -->
  
    <MenuBar /><!-- ตรงนี้ คือ component จาก MenuBar.vue -->
    
  <h1 class="text-center">แหล่งความรู้อื่นๆ</h1>
  
   <!-- ส้วนนี้คือ ส่วนที่ ใช้ แสดง คอร์ส set ทั้งมหด -->
    <div class="AT">
      <div class="row">
        <div class="col" v-for="(course, index) in CourseAT" :key="index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ course.name }}</h5>
             <img :src="course.imagesAT" alt="" srcset="">
              <a :href="course.LinkAT"  target="_blank" class="btn btn-primary">ดูเพิ่มเติม</a>
  
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
        ...mapGetters(["CourseAT"]), // ดึงข้อมูล CourseAT จาก Vuex
      },
    };
    </script>
    <style >
  
    .AT {
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
    