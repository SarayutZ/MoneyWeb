<template>

  <!-- หน้านี้คือ หน้า แสดง คอร์ส จาก SET ทั้งหมด  -->

  <MenuBar /><!-- ตรงนี้ คือ component จาก MenuBar.vue -->

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

  <!-- ส้วนนี้คือ ส่วนที่ ใช้ แสดง คอร์ส set ทั้งมหด -->
  <div class="Couresset">
    <div class="row">
      <div class="col" v-for="(card, index) in filteredCourses" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ card.name }}</h5>
            <img :src="card.imagesCourse" alt="" srcset="" />
            <p class="card-text">{{ card.CourseForm }}</p>
            <a :href="card.Learnlink"  target="_blank" class="btn btn-primary">ดูเพิ่มเติม</a>
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
  data() {
    return {
      searchText: "",
    };
  },

  computed: {
          // เป็นส่วน  จาก Vuex เพื่อนำเข้าค่า มาใช้ได้
      // สามารถเข้าถึง CourseL จาก ตัว store index.js ที่เราเก็บข้อมูล คอร์สต่างๆไว้
    ...mapGetters(["CourseL"]),

      // ส่วนนี้ คือ ส่วนที่ ใช้ ค้นหาหนัง สือ เวลา เรา พิมพ์ ค้นหา ใน ช่อง input search
      // โดยเปรียบเทียบชื่อของหนังสือ (book.name) กับค่าใน searchText หรือ ค่าที่เรา พิมพ์ ในช่องค้นหา. 
      // ใช้ toLowerCase() ทำให้ ค้นหาเป็นตัวพิมพ์เล็กหรือใหญ่ก็ได้
      //  และ includes() ใช้ในการตรวจสอบว่าชื่อหนังสือมีส่วนที่ตรงกับ searchText หรือป่าว

    filteredCourses() {
      return this.CourseL.filter((course) =>
        course.name.toLowerCase().includes(this.searchText.toLowerCase())
      );
    },
  },
  components: { MenuBar },
};
</script>

<style >
.input-group {
margin-left: 500px;

}
.Couresset {
  padding: 20px;
}

.card {
  border: none;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 10px auto ; /* ปรับแต่งระยะห่างขอบบนและล่าง */
}

.card img{
  width: 250px;
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