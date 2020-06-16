<template>
  <div>
    <div class="header">
      <router-link to="/homePage">
        <h4>取消</h4>
      </router-link>
      <p>发布</p>
    </div>
    <textarea
      style="border: 0;border-radius:5px;background-color:#ffffff;width: 375px;height: 50px;padding: 10px;resize: none;"
      placeholder="标题，品牌，型号"
    ></textarea>
    <textarea
      style="border:0;border-radius:5px;background-color:#ffffff;width: 375px;height: 50px;padding: 10px;resize: none;"
      placeholder="描述下你的商品"
    ></textarea>
    <!-- 图片上传区域 -->
    <div class="upload">
      <p>图片上传样式。。。。待定</p>
      <input type="file" />
    </div>
    <div class="list">
      <div class="price">
        <input type="number" placeholder="请输入价格" />
        <input type="number" placeholder="请输入原价" />
        <select name="bbxb" id="selecte1" class="longselect">
          <option value="">---请选择--</option>
          <option
            value="0"
            selected="selected"
            v-for="(item, index) in type"
            :key="index"
            >{{ item.typeName }}</option
          >
        </select>
        <button>确认发布</button>
      </div>
    </div>
  </div>
</template>
<script>
const API = require("../../request/api.js");
export default {
  name: "Sell",
  data() {
    return {
      type: []
    };
  },
  components: {},
  created() {
    this.getAllType();
  },
  mounted() {},
  methods: {
    async getAllType() {
      this.url = "http://101.37.31.188:8080/flea/type/all";
      this.type = (await API.init(this.url, this.data, "post")).data.types;
      console.log(this.type);
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/fleamarket/Sell.scss";
h4 {
  margin-top: 10px;
  font-weight: 20px;
  margin-left: 10px;
  font-size: 13px;
}
.upload {
  height: 100px;
  background-color: blue;
}
.list {
  height: 200px;
  margin-top: 10px;
  // background-color: brown;
}
.price input {
  height: 30px;
  width: 100%;
  margin-top: 5px;
  border-radius: 10px;
  border: none;
}
select {
  height: 30px;
  width: 100%;
  border: none;
}
button {
  height: 40px;
  width: 100%;
  margin-top: 80px;
  background-color: red;
  border: none;
  border-radius: 5px;
}
</style>
