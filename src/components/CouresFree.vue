<template>
<MenuBar/>



<div class="card-group mt-5">
  <div class="card">
    <img src="https://op.mahidol.ac.th/sa/wp-content/uploads/2018/09/Banner_SET_E-Learning_1040x1040px.png" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">คอร์สจาก SET(ตลาดหลักทรัพย์)</h5>
      <p class="card-text">คลังความรู้ที่รวบรวมหลักสูตรออนไลน์ที่เหมาะสมสำหรับผู้ลงทุน สอนโดยกูรูผู้เชี่ยวชาญที่มีชื่อเสียงในแวดวงการเงินการลงทุน  เพื่อเพิ่มทักษะให้ตัวเอง เตรียมพร้อมรับสถานการณ์ต่างๆ  </p>
      <p class="card-text"><small class="text-body-secondary"> SET e-Learning</small></p>
      <router-link to="/CouresSet"><button class="btn btn-dark">ดูเพิ่มเติม</button></router-link>
    </div>
  </div>
  <div class="card">
    <img src="https://droidsans.com/wp-content/uploads/2019/06/youtube-logo.jpg" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">จาก Youtube ฟรี !!</h5>
      <p class="card-text">รวบรวม ความรู้ทางการเงิน และ ช่องที่ให้ความรู้ทาการเงิน </p><br/>
      <p class="card-text"><small class="text-body-secondary">Youtube</small></p>
      <router-link to=""><button class="btn btn-dark">ดูเพิ่มเติม</button></router-link>
    </div>
  </div>
  <div class="card">
    <img src="https://media.istockphoto.com/id/1279138405/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%9C%E0%B8%A5-3-%E0%B8%A1%E0%B8%B4%E0%B8%95%E0%B8%B4-%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%B9%E0%B8%99%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%8A%E0%B8%B2%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A1%E0%B8%B5%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%A0%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%81%E0%B9%8D%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%95%E0%B8%B4%E0%B8%9A%E0%B9%82%E0%B8%95%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%A8%E0%B8%A3%E0%B8%AA%E0%B8%B5%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%A7%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B9%84%E0%B8%9B-%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%9B%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B8%98%E0%B8%B8%E0%B8%A3.jpg?s=2048x2048&w=is&k=20&c=FSq376dHIiwaL9jl8cZH9yo3k6ccMy6MSG3f4-ckX-Y=" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">แหล่งความรู้อื่นๆ</h5>
      <p class="card-text">รวบรวม แหล่ง ความรู้ทางการเงิน อื่นๆ เช่น เพจ facbook และ แหล่ง เรียนสอนการเงินอื่นๆ ฟรี</p>
      <p class="card-text"><small class="text-body-secondary">อื่นๆ</small></p>
      <router-link to=""><button class="btn btn-dark">ดูเพิ่มเติม</button></router-link>
    </div>
  </div>
</div>

</template>

<script>
import MenuBar from './MenuBar.vue';

  export default {
    components: { MenuBar }
}
</script>

<style >
.card img{
  margin: 20px;
  margin-left: 25px;
}
</style>