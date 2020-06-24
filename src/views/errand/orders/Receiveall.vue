<template>
  <div class="bg">
    <div class="card" v-for="(item, index) in result" :key="index">
      <!-- 顶部发件 -->
      <div class="top">
        <h4>发件</h4>
        <button class="qbtn" @click="sureoder(item.id)">抢单</button>
      </div>
      <!-- 中间发件地 -->
      <div class="origin">
        <div class="bluediv"></div>
        <div class="origindiv">
          <h4 class="address">{{ item.originAddress }}</h4>
          <span>手机号:</span>
          <span>{{ item.founderPhonenumber }}</span>
        </div>
      </div>
      <!-- 中间目的地 -->
      <div class="destin">
        <div class="yellodiv"></div>
        <div class="destindiv">
          <h4 class="address">{{ item.destination }}</h4>
          <span>{{ item.receiverName }}</span>
          <span>{{ item.receiverPhoneNumber }}</span>
        </div>
      </div>
      <hr class="line" />
      <!-- 下面时间 -->
      <div class="bottom">
        <p class="time">{{ item.oderCreateTime }}</p>
      </div>
    </div>
    <!-- 弹出框 -->
    <Dialog v-bind.sync="showBombTips" :tipsContent="tipsContent"></Dialog>
  </div>
</template>

<script>
import Dialog from "../../../components/dialog";
const API = require("../../../request/api");
export default {
  name: "Orderreceiving",
  data() {
    return {
      showBombTips: {
        visible: false
      },
      tipsContent: "抢单成功！",
      userId: this.$store.state.user.jobNumber,
      result: [],
      sureorder: []
    };
  },
  created() {
    this.Grab();
  },
  components: { Dialog },
  methods: {
    // 查询所有未被接的单
    async Grab() {
      this.data = {
        num: 0,
        size: 100,
        status: 0
      };
      this.url = this.GLOBAL1.baseUrl + "/errands/find/order";
      this.result = (await API.init(this.url, this.data, "post")).data.order;
      // this.results = this.result.order;
      console.log(this.result);
    },
    // 点击确认接单需要进行的操作 并且进行弹出框的操作
    async sureoder(index) {
      this.data = {
        errandsId: this.userId,
        orderId: index
      };
      this.url = this.GLOBAL1.baseUrl + "/transaction/order";
      this.sureorder = await API.init(this.url, this.data, "post");
      console.log(this.sureorder.msg);
      this.showBombTips.visible = true;
      // 再次调用查询所有的方法 页面看看是否已经取消了 我的这个接单
      this.Grab();
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/errands/orders/Receiveall.scss";
</style>
