<template>
  <div class="bg">
    <div class="header cc-df-between">
      <div class="header-title">
        <p class="name">{{user.userName}}</p>
        <p class="age">{{user.gender}}·大专·{{user.userAccount.substring(0,2)}}级</p>
      </div>
      <div class="header-avatar">
        <img
          :src="user.avatar"
          alt=""
        >
      </div>
    </div>
    <div class="my-card">
      <div class="my-row">
        <div class="row cc-df-between">
          <div class="row-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/jianli.png"
              alt=""
              class="icon"
            >
            <p>在线简历</p>
          </div>
          <div class="row-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt=""
            >
          </div>
        </div>
        <hr class="line" />
        <div class="row1 cc-df-between">
          <div class="row-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/fujian.png"
              alt=""
              class="icon"
            >
            <p>附件简历</p>
          </div>
          <div class="row-right">
            <p>未上传</p>
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt=""
            >
          </div>
        </div>
        <div class="row cc-df-between">
          <div class="row-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/mianshi.png"
              alt=""
              class="icon"
            >
            <p>我的面试</p>
          </div>
          <div class="row-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt=""
            >
          </div>
        </div>
        <div class="row cc-df-between">
          <div class="row-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/shoucang_hei.png"
              alt=""
              class="icon"
            >
            <p>我的收藏</p>
          </div>
          <div class="row-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt=""
            >
          </div>
        </div>
        <div class="row cc-df-between">
          <div class="row-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/guanzhu.png"
              alt=""
              class="icon"
            >
            <p>关注内容</p>
          </div>
          <div class="row-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt=""
            >
          </div>
        </div>
        <div class="row cc-df-between">
          <div class="row-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/yinsi.png"
              alt=""
              class="icon"
            >
            <p>隐私设置</p>
          </div>
          <div class="row-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt=""
            >
          </div>
        </div>
        <hr class="line" />
        <div class="row cc-df-between">
          <div class="row-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zhaopin.png"
              alt=""
              class="icon"
            >
            <p>我要招聘</p>
          </div>
          <div class="row-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt=""
            >
          </div>
        </div>
        <div class="row cc-df-between">
          <div class="row-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/yijian.png"
              alt=""
              class="icon"
            >
            <p>意见反馈</p>
          </div>
          <div class="row-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobMy",
  data() {
    return {
      user: this.$store.state.user,
      token: this.$store.state.token
    };
  },
  components: {},
  created() {
    console.log(this.user);
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/Job/JobMy.scss";
</style>
