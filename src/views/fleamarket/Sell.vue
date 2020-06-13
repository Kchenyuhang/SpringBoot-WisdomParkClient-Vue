<template>
  <div>
    <div class="header">
      <router-link to="/homePage">
        <h4>取消</h4>
      </router-link>
      <p>悬赏</p>
      <button class="btn">悬赏</button>
    </div>
    <textarea
      style="border:0;border-radius:5px;background-color:#ffffff;width: 375px;height: 150px;padding: 10px;resize: none;"
      placeholder="品牌型号，新旧程度，入手渠道，转手原因..."
    ></textarea>
    <div class="rec">
      <input type="file" />
      <img
        src="http://ww1.sinaimg.cn/large/0064QvQTgy1gfnibb1ygkj30qo0qoq4w.jpg"
        alt=""
      />
    </div>
    <hr class="line" />
    <div class="list">
      <img
        src="http://ww1.sinaimg.cn/large/0064QvQTly1gfo1zn152nj305k05kmx6.jpg"
        alt=""
      />
      <span>价格</span>
      <input type="text" class="input" />
    </div>
    <hr class="line" />
    <div class="list">
      <img
        src="http://ww1.sinaimg.cn/large/0064QvQTly1gfo1zn152nj305k05kmx6.jpg"
        alt=""
      />
      <span>价格</span>
    </div>
    <hr class="line" />
    <div class="list">
      <img
        src="http://ww1.sinaimg.cn/large/0064QvQTly1gfo1zn152nj305k05kmx6.jpg"
        alt=""
      />
      <span>价格</span>
    </div>
    <hr class="line" />
  </div>
</template>
<script>
export default {
  name: "Sell",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
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
.btn {
  height: 20px;
  width: 40px;
  margin-left: 120px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: #f4d53a;
  border: none;
}
.rec img {
  height: 100px;
  width: 100px;
  margin-left: 30px;
}
.line {
  margin-top: 30px;
  background-color: #f8f8f8;
}
.list {
  height: 20px;
  // background-color: violet;
}
.list img {
  height: 25px;
  width: 25px;
  margin-left: 50px;
  margin-top: 13px;
}
.list span {
  float: right;
  font-size: 14px;
  margin-right: 255px;
  margin-top: 17px;
}
.input {
  float: right;
  max-width: -60px;
}
</style>
