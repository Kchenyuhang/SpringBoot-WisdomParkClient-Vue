<template>
  <div class="bg">
    <div class="header">
      <router-link to="/layout">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt="左箭头"
        >
      </router-link>
      <p>一卡通</p>
    </div>
    <div class="card">
      <div class="cardimg cc-col-center">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bg_weidenglu.png"
          alt="头像"
          class="avatar"
        >
        <p class="balance">我的余额</p>
        <p class="money">188元</p>
        <p class="cardNumber">卡号：123456789</p>
      </div>
    </div>
    <div class="cc-df-warp ">
      <div class="cc-col-center cc-coll-4">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_xiaoyuankachongzhi.png"
          alt="校园卡充值图标"
          class="icon"
        />
        <p class="cc-mtop font-size">校园卡充值</p>
      </div>
      <div class="cc-col-center cc-coll-4">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_dianfei.png"
          alt="电费充值图标"
          class="icon"
        />
        <p class="cc-mtop font-size">电费充值</p>
      </div>
      <div class="cc-col-center cc-coll-4">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_wangfei.png"
          alt="网费充值图标"
          class="icon"
        />
        <p class="cc-mtop font-size">网费充值</p>
      </div>
      <div class="cc-col-center cc-coll-4">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_xiaofeimingxi.png"
          alt="消费明细图标"
          class="icon"
        />
        <p class="cc-mtop font-size">消费明细</p>
      </div>
      <div class="cc-col-center cc-coll-4">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_guashi.png"
          alt="挂失申请图标"
          class="icon"
        />
        <p class="cc-mtop font-size">挂失申请</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MetroCard",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.bg {
}
.header {
  background-color: #ffffff;
  height: 40px;
  display: flex;
}
.header img {
  height: 20px;
  width: 20px;
  margin-top: 10px;
  margin-left: 5px;
}
.header p {
  font-size: 18px;
  font-weight: 550;
  margin-left: 36%;
  margin-top: 2%;
}
.card {
  background-color: #f5f7fb;
  height: 160px;
  width: 100%;
  margin-top: 5px;
}
.cardimg {
  background-image: url("https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bg_yikatongchongzhi.png");
  background-size: cover;
  height: 99%;
  width: 99%;
  margin: auto;
  position: relative;
}
.avatar {
  height: 45px;
  width: 45px;
  margin-top: 5%;
}
.cardNumber {
  position: absolute;
  left: 0;
  bottom: 0;
  margin-left: 10px;
  margin-bottom: 10px;
  font-size: 10px;
  color: #ffffff;
}
.balance {
  font-size: 10px;
  color: #ffffff;
  margin-top: 10px;
}
.money {
  font-size: 24px;
  color: #ffffff;
}
.icon {
  margin-top: 25px;
  width: 50%;
  height: 50%;
}
.font-size {
  font-size: 14px;
  color: #000000;
}
</style>
