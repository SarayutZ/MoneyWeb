<template>
  <MenuBar />

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

  <div class="courseSet">
    <div class="row">
      <div class="col" v-for="(card, index) in filteredCourses" :key="index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ card.name }}</h5>
            <img :src="card.imagesCourse" alt="" srcset="" />
            <p class="card-text">{{ card.CourseForm }}</p>
            <a href="#" class="btn btn-primary">ดูเพิ่มเติม</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MenuBar from "./MenuBar.vue";

export default {
  data() {
    return {
      searchText: "",
    };
  },
  computed: {
    ...mapGetters(["CourseL"]),
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
.courseSet {
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