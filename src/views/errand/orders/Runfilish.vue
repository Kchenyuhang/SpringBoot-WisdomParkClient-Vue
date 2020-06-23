<template>
  <div class="container">
    <div
      class="card"
      style="border: 1px solid #f4f4f4;"
      v-for="(item, index) in result"
      :key="index"
    >
      <!-- 顶部发件 -->
      <div class="top">
        <h4>发件</h4>
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
        <p class="time">{{ item.finshTime }}</p>
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
  </div>
</template>

<script>
const API = require("../../../request/api");
export default {
  name: "Runfilish",
  data() {
    return {
      order: false,
      result: [],
      userId: this.$store.state.user.jobNumber,
    };
  },
  created() {
    this.select();
  },
  components: {},
  methods: {
    async select() {
      this.data = {
        founderId: this.userId,
        num: 0,
        size: 100,
        status: 3
      };
      this.url = this.GLOBAL1.baseUrl + "/transaction/errends/order";
      this.result = (await API.init(this.url, this.data, "post")).data.order;
      // console.log(this.result);
      if (this.result.length === 0) {
        this.order = true;
      } else {
        this.order = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/errands/orders/Runfilish.scss";
</style>
