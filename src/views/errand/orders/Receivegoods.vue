<template>
  <div class="container">
    <div class="card" v-for="(item, index) in result" :key="index">
      <!-- 顶部发件 -->
      <div class="top">
        <h4>发件</h4>
        <button class="goodbtn" @click="receivegoods(item.id)">待取货</button>
      </div>
      <!-- 中间发件地 -->
      <div class="origin">
        <div class="bluediv"></div>
        <div class="origindiv">
          <p class="address">{{ item.originAddress }}</p>
          <span>{{ item.founderName }}</span>
          <span> {{ item.founderPhonenumber }}</span>
        </div>
      </div>
      <!-- 中间目的地 -->
      <div class="destin">
        <div class="yellodiv"></div>
        <div class="destindiv">
          <p class="address">{{ item.destination }}</p>
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
    <!-- 当没有订单的时候会显示无订单消息 -->
    <div class="messages" v-if="order">
      <img
        src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/消息.png"
        alt=""
      />
      <p>暂时没有已接订单</p>
    </div>
    <!-- 弹出框 -->
    <Dialog v-bind.sync="showBombTips" :tipsContent="tipsContent"></Dialog>
  </div>
</template>

<script>
import Dialog from "../../../components/dialog";
const API = require("../../../request/api");
export default {
  name: "Receivegoods",
  data() {
    return {
      order: false,
      showBombTips: {
        visible: false
      },
      tipsContent: "取货成功！",
      goods: [],
      result: [],
      userId: this.$store.state.user.jobNumber,
    };
  },
  created() {
    this.selectgoods();
  },
  components: { Dialog },
  methods: {
    async selectgoods() {
      this.data = {
        founderId: this.userId,
        num: 0,
        size: 100,
        status: 0
      };
      this.url = this.GLOBAL1.baseUrl + "/transaction/errends/order";
      this.result = (await API.init(this.url, this.data, "post")).data.order;
      // console.log(this.result);
      if (this.result.length === 0) {
        this.order = true;
      } else {
        this.order = false;
      }
    },
    async receivegoods(index) {
      this.data = {
        errandsId: this.userId,
        orderId: index
      };
      this.url = this.GLOBAL1.baseUrl + "/transaction/getgoods";
      this.goods = await API.init(this.url, this.data, "post");
      console.log(this.goods.msg);
      this.showBombTips.visible = true;
      // 将这条数据从界面上移除了
      this.selectgoods();
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/errands/orders/Receivegoods.scss";
</style>
