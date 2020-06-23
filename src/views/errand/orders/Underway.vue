<template>
  <div class="container" style="background-color:#f5f5f5;">
    <div
      class="card"
      v-for="(item, index) in result"
      :key="index"
      style="margin-top:10px;border: 1px solid #f4f4f4;"
    >
      <!-- 顶部发件 -->
      <div class="top">
        <h4>发件</h4>
        <button class="cbtn" @click="deletebtn(item.id)">删除</button>
      </div>
      <!-- 中间发件地 -->
      <div class="origin">
        <div class="bluediv"></div>
        <div class="origindiv">
          <p class="address" style="font-weight: 900;font-size: 16px;">
            {{ item.originAddress }}
          </p>
          <span>{{ item.founderName }}</span>
          <span> {{ item.founderPhonenumber }}</span>
        </div>
      </div>
      <!-- 中间目的地 -->
      <div class="destin">
        <div class="yellodiv"></div>
        <div class="destindiv">
          <p class="address" style="font-weight: 900;font-size: 16px;">
            {{ item.destination }}
          </p>
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
      <p>暂时没有已完成订单</p>
    </div>
    <!-- 弹出框 -->
    <Dialog v-bind.sync="showBombTips" :tipsContent="tipsContent"></Dialog>
  </div>
</template>
<script>
import Dialog from "../../../components/dialog";
const API = require("../../../request/api");
export default {
  name: "Underway",
  data() {
    return {
      order: false,
      showBombTips: {
        visible: false
      },
      tipsContent: "删除成功！",
      userId: this.$store.state.user.jobNumber,
      search: "",
      result: [],
      del: [],
    };
  },
  created() {
    this.filish();
  },
  components: { Dialog },
  methods: {
    async filish() {
      this.data = {
        founderId: this.userId,
        status: 3,
        num: "0",
        size: "100"
      };
      this.url = this.GLOBAL1.baseUrl + "/errands/differentOrder";
      this.result = (await API.init(this.url, this.data, "post")).records;
      if (this.result.length == 0) {
        this.order = true;
      } else {
        this.order = false;
      }
    },
    async deletebtn(index) {
      this.data = {
        errandsId: this.userId,
        orderId: index
      };
      this.url = this.GLOBAL1.baseUrl + "/errands/delete/order";
      this.del = await API.init(this.url, this.data, "post");
      console.log(this.del.msg);
      this.showBombTips.visible = true;
      this.filish();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/errands/orders/Underway.scss";
</style>
