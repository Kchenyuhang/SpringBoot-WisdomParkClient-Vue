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
      <p>全部</p>
      <p>进行中</p>
      <p>待评价</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {};
  },
  created() {},
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/errands/Order.scss";
</style>
