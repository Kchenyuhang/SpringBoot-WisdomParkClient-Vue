<template>
  <div class="bg">
    <!-- 顶部导航 -->
    <div class="header">
      <router-link to="/personalcenter">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt
        />
      </router-link>
      <p>我的钱包</p>
    </div>
    <div>
      <div class="card">
        <p class="wz">我的余额</p>
        <p class="wz">0元</p>
      </div>
      <div class="card">
        <p class="wz">交易明细</p>
        <img class="tpimg" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/右箭头.png" alt="">
      </div>
    </div>
     <div class="content2">
       <div class="card">
        <p class="wz">优惠卷</p>
        <img class="tpimg" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/右箭头.png" alt="">
      </div>
      <div class="card">
        <p class="wz">申请发票</p>
        <img class="tpimg" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/右箭头.png" alt="">
      </div>
     </div>
     <div class="contnet3">
      <div class="card">
        <p class="wz">计价说明</p>
        <img class="tpimg" src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/右箭头.png" alt="">
      </div>
     </div>
  </div>
</template>

<script>
export default {
  name: "Wallet",
  data() {
    return {};
  },
  created() {},
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/errands/user/Wallet.scss";
</style>
