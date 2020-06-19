<template>
  <div class="bg">
    <div class="header">
      <router-link to="/errandshomepage">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>订单确认</p>
    </div>
    <img
      src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/bg_order_service_dialog.png"
      alt="订单确认背景图"
    />
    <div class="inputCenter">
      <div class="blueDiv"></div>
      <div class="yellowDiv"></div>
      <div class="content">
        <div>
          <h4>{{ address }}</h4>
          <p>{{ originxx }}</p>
        </div>
        <div class="desnation">
          <h4>{{ address1 }}</h4>
          <p>{{ destnaxx }}</p>
        </div>
      </div>
      <hr class="line" />
    </div>
    <div class="bottom">
      <div class="card">
        <img
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/icon_goods.png"
          alt=""
        />
        <input
          type="text"
          placeholder="物品名称"
          class="cinput"
          v-model="type"
        />
      </div>
      <div class="card">
        <img
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/icon_demo.png"
          alt=""
        />
        <input type="text" placeholder="备注" class="cinput" v-model="remark" />
      </div>
    </div>
    <button class="btn" @click="insert">发起订单</button>
  </div>
</template>
<script>
const API = require("../../../request/api");
export default {
  name: "Orderconfirmation",
  data() {
    return {
      time: "",
      type: "",
      remark: "",
      // 地址拼接
      originxx: "",
      destnaxx: "",
      address: this.$store.state.address,
      address1: this.$store.state.address1,
      // 发货地址
      originname: localStorage.getItem("originname"),
      originnumber: localStorage.getItem("originnumber"),
      addressinfo: localStorage.getItem("addressinfo"),
      //收获地址
      desinfo: localStorage.getItem("desinfo"),
      desname: localStorage.getItem("desname"),
      desnumber: localStorage.getItem("desnumber"),
      userId: this.$store.state.user.jobNumber,
      result: [],
    };
  },
  created() {
    this.originxx = this.originname + " " + this.originnumber;
    this.destnaxx = this.desname + " " + this.desnumber;
    // 获取系统时间
    this.getTime();
  },
  components: {},
  methods: {
    getTime() {
      var date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      let hour = date.getHours();
      let minuter = date.getMinutes();
      let seconds = date.getSeconds();
      this.time =
        year +
        "-" +
        month +
        "-" +
        day +
        " " +
        hour +
        ":" +
        minuter +
        ":" +
        seconds;
    },
    async insert() {
      this.data = {
        founderId: this.userId,
        founderName: this.originname,
        founderPhonenumer: this.originnumber,
        originAddress: this.address,
        olongitude: "123",
        odimension: "123",
        destination: this.address1,
        dlongitude: "123",
        ddimension: "123",
        deliveryTime: this.time,
        amount: 1,
        receiverName: this.desname,
        receiverPhoneNumber: this.desnumber,
        remark: this.remark,
        type: this.type,
        priceRang: "152"
      };
      this.url = this.GLOBAL1.baseUrl + "/errands/order";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result.msg);
      if (this.result.msg == "成功") {
        this.$router.push("/errandshomepage");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/errands/orders/Orderconfirmation.scss";
</style>
