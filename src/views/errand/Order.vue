<template>
  <div class="bg">
    <div class="header">
      <router-link to="/errandshomepage">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>订单列表</p>
    </div>
    <div class="topNav">
      <div @click="all">
        <p>全部</p>
        <div class="xline" v-if="ashow"></div>
      </div>
      <div @click="underway">
        <p>已完成</p>
        <div class="xline" v-if="ushow"></div>
      </div>
       <div @click="cancle">
        <p>已取消</p>
        <div class="xline" v-if="cshow"></div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      ashow: true,
      ushow: false,
      cshow: false
    };
  },
  created() {},
  components: {},
  methods: {
    all() {
      this.ushow = false;
      this.ashow = true;
      this.cshow = false;
      this.$router.push("/order/all");
    },
    underway() {
      this.ushow = true;
      this.ashow = false;
      this.cshow = false;
      this.$router.push("/order/underway");
    },
    cancle() {
      this.ushow = false;
      this.ashow = false;
      this.cshow = true;
      this.$router.push("/order/cancle");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/errands/Order.scss";
</style>
