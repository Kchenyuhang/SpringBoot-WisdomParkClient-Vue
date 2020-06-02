<template>
  <div class="bg">
    <div class="header">
      <router-link to="/metrocard">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt="左箭头"
        >
      </router-link>
      <p>电费充值</p>
    </div>
    <hr class="line" />
    <div class="card">
      <div class="recharge">
        <p>充值金额</p>
      </div>
      <div class="rechargeicon cc-df-warp">
        <div class="cc-df-between">
          <div
            class="icon  cc-df-center"
            :class="{'change':isShow==1}"
            @click="isShow=1"
          >
            <div class="cc-col-center">
              <b>
                <p>30元</p>
              </b>
            </div>
          </div>
          <div
            class="icon  cc-df-center"
            :class="{'change':isShow==2}"
            @click="isShow=2"
          >
            <div class="cc-col-center">
              <b>
                <p>50元</p>
              </b>
            </div>
          </div>
        </div>
        <div class="cc-df-between">
          <div
            class="icon  cc-df-center"
            :class="{'change':isShow==3}"
            @click="isShow=3"
          >
            <div class="cc-col-center">
              <b>
                <p>100元</p>
              </b>
            </div>
          </div>
          <div
            class="icon  cc-df-center"
            :class="{'change':isShow==4}"
            @click="isShow=4"
          >
            <div class="cc-col-center">
              <input
                type="text"
                placeholder="自定义金额"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="pay">
        <p>选择支付方式</p>
      </div>
      <div class="paycard cc-df-warp">
        <div
          class="cc-df-between alipaycard"
          @click="radio=true"
        >
          <div class="alipay">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_zhifubao.png"
              alt=""
            >
            <p>支付宝支付</p>
          </div>
          <div class="xuanzhong cc-df-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/xuanzhong.png"
              alt=""
              v-if="radio"
            >
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/weixuanzhong.png"
              alt=""
              v-if="!radio"
            >
          </div>
        </div>
        <div
          class="cc-df-between wechatpaycard"
          @click="radio=false"
        >
          <div class="wechatpay">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_weixin.png"
              alt=""
            >
            <p>微信支付</p>
          </div>
          <div class="weixuanzhong cc-df-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/xuanzhong.png"
              alt=""
              v-if="!radio"
            >
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/weixuanzhong.png"
              alt=""
              v-if="radio"
            >
          </div>
        </div>
      </div>
      <div class="login-btn">
        <p>立即充值</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CampusCard",
  data() {
    return {
      isShow: 1,
      radio: true
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/card/Card.scss";
</style>
