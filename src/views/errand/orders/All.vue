<template>
  <div class="contain">
    <div class="card" v-for="(item, index) in records" :key="index">
      <!-- 顶部发件 -->
      <div class="top">
        <h4>发件</h4>
        <p v-show="item.status == 0">已发布</p>
        <p v-show="item.status == 1">已取消</p>
        <p v-show="item.status == 2">进行中</p>
        <p v-show="item.status == 3">完成</p>
        <p v-show="item.status == 4">被抢单</p>
      </div>
      <!-- 中间发件地 -->
      <div class="origin">
        <div class="bluediv"></div>
        <div class="origindiv">
          <p class="address" style="font-weight: 900;font-size: 16px;">{{ item.originAddress }}</p>
          <span>{{ item.founderName }}</span>
          <span> {{ item.founderPhonenumber }}</span>
        </div>
      </div>
      <!-- 中间目的地 -->
      <div class="destin">
        <div class="yellodiv"></div>
        <div class="destindiv">
          <p class="address" style="font-weight: 900;font-size: 16px;">{{ item.destination }}</p>
          <span>{{ item.receiverName }}</span>
          <span>{{ item.receiverPhoneNumber }}</span>
        </div>
      </div>
      <hr class="line" />
      <!-- 下面时间 -->
      <div class="bottom">
        <p class="time">{{ item.oderCreateTime }}</p>
        <p class="cancle" v-show="item.status == 0" @click="canle(item.id)">
          取消
        </p>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../../request/api");
export default {
  name: "All",
  data() {
    return {
      isBackground: false,
      num: 0,
      bdAdress: localStorage.getItem("bdAdress"),
      userId: this.$store.state.user.jobNumber,
      result: [],
      records: [],
      cancle: [],
    };
  },
  created() {
    this.selectOrder();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },
  components: {},
  methods: {
    // 查询所有订单
    async selectOrder() {
      this.data = {
        founderId: this.userId,
        status: "",
        num: "1",
        size: "100"
      };
      this.url = this.GLOBAL1.baseUrl + "/errands/differentOrder";
      this.result = await API.init(this.url, this.data, "post");
      this.records = this.result.records;
      // console.log(this.records);
      //  if (this.result.data.length == 0) {
      //   this.isBottom = true;
      // }
    },
    async canle(index) {
      console.log(index);
      this.data = {
        errandsId: "1802333101",
        orderId: index
      };
      this.url = this.GLOBAL1.baseUrl + "/errands/cancle/order";
      this.cancle = await API.init(this.url, this.data, "post");
      //重新调用查询所有的方法
      console.log(this.cancle.msg);
      this.selectOrder();
    }
    // handleScroll() {
    //   let scrollTop = document.documentElement.scrollTop;
    //   let documentTop = document.body.scrollHeight; //全部内容的高
    //   let screenHeight = window.screen.availHeight; //当前屏幕的高
    //   if (scrollTop + screenHeight >= documentTop - 1) {
    //     this.num++;
    //     this.selectOrder();
    //     //干你想干的事儿
    //     /* console.log(screenTop)
    // 		console.log(documentTop)
    // 		console.log(screenHeight) */
    //   }
    //   //滚动条的高
    //   if (scrollTop > 54) {
    //     this.isBackground = true;
    //   } else {
    //     this.isBackground = false;
    //   }
    // },
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/errands/orders/All.scss";
</style>
