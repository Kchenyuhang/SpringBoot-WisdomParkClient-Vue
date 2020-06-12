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
      <router-link to="/order/all"><p>全部</p></router-link>
      <router-link to="/order/underway"><p>进行中</p></router-link>
      <p>待评价</p>
    </div>
    <div class="content">
      <!-- 二级路由入口 -->
    </div>
    <router-view></router-view>
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
