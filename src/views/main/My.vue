<template>
  <transition :name="transitionName">
    <div class="bg">
      <!-- <img
        src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bg_wode.png"
        alt="我的头像背景"
      > -->
      <div class="header cc-col-center">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bg_weidenglu.png"
          alt="未登录"
        >
        <p>未登录</p>
      </div>
      <div class="info">
        <div class="cc-df-between">
          <div class="cc-df info-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_jibenxinxi.png"
              alt="基本信息"
            >
            <p>基本信息</p>
          </div>
          <div class="info-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt="右箭头"
            >
          </div>
        </div>
        <hr class="line" />
        <div class="cc-df-between">
          <div class="cc-df info-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_guanyuwomen.png"
              alt="关于我们"
            >
            <p>关于我们</p>
          </div>
          <div class="info-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt="右箭头"
            >
          </div>
        </div>
        <hr class="line" />
        <div class="cc-df-between">
          <div class="cc-df info-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_yijianfankui.png"
              alt="意见反馈"
            >
            <p>意见反馈</p>
          </div>
          <div class="info-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt="右箭头"
            >
          </div>
        </div>
        <hr class="line" />
        <div class="cc-df-between">
          <div class="cc-df info-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_qinlihuncun.png"
              alt="清理缓存"
            >
            <p>清理缓存</p>
          </div>
          <div class="info-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt="右箭头"
            >
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "My",
  data() {
    return {
      transitionName: this.$store.state.transitionName
    };
  },
  components: {},
  created() {
    console.log(this.transitionName);
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.bg {
  position: absolute;
  width: 100%;
  background-image: url("https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bg_wode.png");
  background-size: cover;
}
.header {
  margin-top: 15%;
}
.header img {
  width: 18%;
  height: 18%;
}
.header p {
  color: white;
  margin-top: 18px;
}
.info {
  width: 93%;
  margin-top: 15%;
  margin-left: 3%;
  background-color: balck;
  z-index: 1000000;
}
.info-left img {
  width: 20%;
  height: 20%;
}
.info-left p {
  margin-left: 8px;
  font-size: 17px;
  color: #666666;
}
.info-right img {
  width: 15px;
  height: 15px;
}

.line {
  width: 100%;
  border: none;
  height: 1px;
  background: #ececec;
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
