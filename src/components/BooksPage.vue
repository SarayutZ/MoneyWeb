<template>

<!-- หน้านี้แสดง ส่วนของ หนังสือการเงิน ทั้งหมด -->
    <MenuBar /> <!-- ตรงนี้ คือ component จาก MenuBar.vue -->
  
    <!-- ส่วนนี้ ส่วน ช่อง ค้นหา -->
    <div class="input-group flex-nowrap w-25">
      <input
        type="text"
        class="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="addon-wrapping"
        v-model="searchText"
      />
    </div>
  
    <!-- ส่วนนี้คือ ส่วนที่ใช้ แสดง เนื้อ หนังสือทั้งหมด -->
    <div class="Books">
      <div class="row">
        <div class="col" v-for="(card, index) in filteredBooks" :key="index">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-center">{{ card.name }}</h5>
              <img :src="card.imagesBooks" alt="" srcset="" />
              <p class="card-text">{{ card.explan }}</p>
              <a :href="card.Shoplink" target="_blank" class="btn btn-primary">ดูรายละเอียด</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  import MenuBar from "./MenuBar.vue";
  
  // ส่วนนี้ ใช้ รับค่า จาก ช่อง ค้นหา
  export default {
    data() {
      return {
        searchText: "",
      };
    },
    computed: {
      // เป็นส่วน  จาก Vuex เพื่อนำเข้าค่า มาใช้ได้
      // สามารถเข้าถึง shopBooks จาก ตัว store index.js ที่เราเก็บข้อมูล หนังสือไว้
      ...mapGetters(["shopBooks"]),

      // ส่วนนี้ คือ ส่วนที่ ใช้ ค้นหาหนัง สือ เวลา เรา พิมพ์ ค้นหา ใน ช่อง input search
      // โดยเปรียบเทียบชื่อของหนังสือ (book.name) กับค่าใน searchText หรือ ค่าที่เรา พิมพ์ ในช่องค้นหา. 
      // ใช้ toLowerCase() ทำให้ ค้นหาเป็นตัวพิมพ์เล็กหรือใหญ่ก็ได้
      //  และ includes() ใช้ในการตรวจสอบว่าชื่อหนังสือมีส่วนที่ตรงกับ searchText หรือป่าว

      filteredBooks() {
        return this.shopBooks.filter((book) =>
          book.name.toLowerCase().includes(this.searchText.toLowerCase())  
        );
      },
    },
    components: { MenuBar },
  };
  </script>
  
  <style>
  .Books {
    padding: 20px;
  }
  
  .card {
    border: none;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin: 10px auto;
  }
  
  .card img {
    margin-left: 10px;
  }
  
  .card-title img {
    width: 150px;
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
  
  .btn {
    margin-left: 75px;
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
  