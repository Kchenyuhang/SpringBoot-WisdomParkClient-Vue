<template>
  <div class="bg">
    <div class="header">
      <router-link to="/layout">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png" alt="左箭头" />
      </router-link>
      <p>一卡通</p>
    </div>
    <div class="card">
      <div class="cardimg cc-col-center">
        <img :src="avatar" alt="头像" class="avatar" />
        <p class="balance">我的余额</p>
        <p class="money">{{ balance }}元</p>
        <p class="cardNumber">卡号：{{ jobNumber }}</p>
      </div>
    </div>
    <div class="cc-df-warp">
      <div class="cc-col-center cc-coll-4" @click="into(1)">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_xiaoyuankachongzhi.png"
          alt="校园卡充值图标"
          class="icon"
        />
        <p class="cc-mtop font-size">校园卡充值</p>
      </div>
      <div class="cc-col-center cc-coll-4" @click="into(2)">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_dianfei.png"
          alt="电费充值图标"
          class="icon"
        />
        <p class="cc-mtop font-size">电费充值</p>
      </div>
      <div class="cc-col-center cc-coll-4" @click="into(3)">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_wangfei.png"
          alt="网费充值图标"
          class="icon"
        />
        <p class="cc-mtop font-size">网费充值</p>
      </div>
      <div class="cc-col-center cc-coll-4" @click="into(4)">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_xiaofeimingxi.png"
          alt="消费明细图标"
          class="icon"
        />
        <p class="cc-mtop font-size">消费明细</p>
      </div>
      <div class="cc-col-center cc-coll-4" @click="into(5)">
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
const API = require("../../request/api");
export default {
  name: "MetroCard",
  data() {
    return {
      // 获取用户jobNumber 和头像
      jobNumber: this.$store.state.user.jobNumber,
      avatar: this.$store.state.user.avatar,
      // 获取结果和余额
      result: [],
      balance: "",
      path: "",
      app: this.$store.state.app
    };
  },
  components: {},
  async created() {
    this.path = this.$route.fullPath;
    this.path = this.path.substring(this.path.indexOf("total_amount") + 13);
    console.log((this.path = this.path.substring(0, this.path.indexOf("."))));
    await this.aplay();
    await this.CurrentCredit();
  },
  mounted() {},
  methods: {
    async aplay() {
      if (this.app == '"1"') {
        this.data = {
          cardNumber: this.jobNumber,
          money: this.path
        };
        this.url = this.GLOBAL.baseUrl + "/card/deposit";
        this.result = await API.init(this.url, this.data, "post");
        localStorage.setItem("app", 0);
        this.$store.commit("setapp", 0);
      }
      if (this.app == '"3"') {
        this.data = {
          cardNumber: this.jobNumber,
          money: this.path
        };
        this.url = this.GLOBAL.baseUrl + "/net/deposit";
        this.result = await API.init(this.url, this.data, "post");
        localStorage.setItem("app", 0);
        this.$store.commit("setapp", 0);
      }
    },
    into(index) {
      if (index == 1) {
        this.$router.push("/campuscard");
      }
      if (index == 2) {
        this.$router.push("/electriccharge");
      }
      if (index == 3) {
        this.$router.push("/network");
      }
      if (index == 4) {
        this.$router.push("/paylist");
      }
      if (index == 5) {
        this.$router.push("/losscard");
      }
    },
    // 查询余额交互
    async CurrentCredit() {
      this.data = {
        field: this.jobNumber
      };
      this.url = this.GLOBAL.baseUrl + "/card/balance";
      this.result = await API.init(this.url, this.data, "post");
      this.balance = this.result.data;
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/card/MetroCard.scss";
</style>
