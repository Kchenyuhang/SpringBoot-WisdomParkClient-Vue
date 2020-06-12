<template>
  <div class="bg">
    <div class="header">
      <div class="icon">
        <img
          src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/settings.png"
        />
      </div>
      <div class="inform">
        <div class="left">
          <div class="card">
            <img
              class="img"
              src="http://ww1.sinaimg.cn/large/0064QvQTly1gfmxh6zrflj305k05k3yc.jpg"
            />
            <div class="mes">
              <p class="wid">用户名称</p>
              <p>昵称：xxxx</p>
            </div>
          </div>
        </div>
        <div class="right">
          <router-link to="/personal">
            <div class="btn">
              <p>个人主页></p>
            </div>
          </router-link>
        </div>
      </div>
      <div class="count">
        <div class="tab">
          <div @click="isShow = 1">
            <p :class="{ blueLine: isShow == 1 }">发布1</p>
          </div>
          <div @click="isShow = 2">
            <p :class="{ blueLine: isShow == 2 }">购买0</p>
          </div>
          <div @click="isShow = 3">
            <p :class="{ blueLine: isShow == 3 }">评价0</p>
          </div>
          <div @click="isShow = 4">
            <p :class="{ blueLine: isShow == 4 }">收藏0</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="r-inform">
        <div class="r-left">
          <img
            src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/3.jpg"
            alt=""
          />
        </div>
        <div class="r-right">
          <h5>我是你爸爸</h5>
          <p>描述</p>
          <span>¥ 价格</span>
          <img
            src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/cc-message.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FleaMy",
  data() {
    return {
      isShow: 1
    };
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
@import "../../assets/scss/fleamarket/FleaMy.scss";
.r-inform {
  width: 95%;
  height: 100px;
  border-radius: 10px;
  margin-top: 20px;
  margin-left: 10px;
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
}
.r-left {
  width: 40%;
  height: 100px;
  float: left;
  // background-color: black;
}
.r-left img {
  border-radius: 10px;
}
.r-right {
  float: right;
  width: 58%;
  margin-left: 5px;
}
.r-right h5 {
  font-weight: bold;
}
.r-right p {
  font-size: 10px;
  color: #b9b7c9;
  margin-top: 3px;
}
.r-right span {
  display: flex;
  font-size: 13px;
  color: red;
  margin-top: 30px;
}
.r-right img {
  display: flex;
  height: 20px;
  width: 20px;
  margin-left: 150px;
  margin-top: -10px;
.r-right h6 {
  display: flex;
  margin-left: 160px;
  }
}
</style>
