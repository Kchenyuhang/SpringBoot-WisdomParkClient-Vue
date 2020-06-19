<template>
  <div class="bg">
    <div class="header">
      <router-link to="/metrocard">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt="左箭头"
        >
      </router-link>
      <p>校园卡充值</p>
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
      <div
        class="login-btn"
        @click="topUp()"
      >
        <p>立即充值</p>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "CampusCard",
  data() {
    return {
      isShow: 1,
      radio: true,
      user: this.$store.state.user,
      token: this.$store.state.token
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    async topUp() {
      if (this.isShow == 1) {
        this.money = 30;
      }
      if (this.isShow == 2) {
        this.money = 50;
      }
      if (this.isShow == 3) {
        this.money = 100;
      }
      this.url = this.GLOBAL.baseUrl + "/alipay/toPay/";
      this.data = {
        amount: this.money,
        jobNumber: this.user.jobNumber,
        rechargeType: "支付宝",
        regexId: 3
      };
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
    }
  //   goAlipay () {
  //   this.$loading.show()
  //   const data = {
  //     /* 自身接口所需的一些参数 */
  //     ...
  //     amount: this.price,
  //     /* 支付后支付宝return的url */
  //     // returnUrl: 'www.baidu.com'
  //     returnUrl: window.location.origin + window.location.pathname + '?userParams=' + this.userParams
  //   }
  //   this.$http(
  //     this.$apiSetting.alipay,
  //     data
  //   ).then(res => {
  //     this.$loading.hide()
  //     if (res.data.statusCode === '000000') {
  //       const div = document.createElement('div')
  //       /* 此处form就是后台返回接收到的数据 */
  //       div.innerHTML = res.data.data.alipayInfo
  //       document.body.appendChild(div)
  //       document.forms[0].submit()
  //     }
  //   }, error => {
  //     this.$loading.hide()
  //     console.log(error)
  //   })
  // }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/card/Card.scss";
</style>
