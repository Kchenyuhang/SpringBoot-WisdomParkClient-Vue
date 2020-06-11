<template>
  <div class="bg">
    <div class="header">
      <div class="icon">
        <img src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/settings.png" />
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
      <div class="box">
        <div class="left">
          <img src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/3.jpg" />
        </div>
        <div class="right">
          <p class="title">商品名</p>
          <p class="des">描述</p>
          <p class="price">￥价格</p>
          <div class="com">
            <img
              class="icon"
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/cc-message.png"
            />
            <p class="mes">10</p>
          </div>
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
</style>
