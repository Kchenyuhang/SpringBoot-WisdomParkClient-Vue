<template>
  <div class="bg">
    <div class="header">
      <router-link to="/errandshomepage">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>跑腿订单</p>
    </div>
    <div class="topNav">
      <div @click="all">
        <p>进行中</p>
        <div class="xline" v-if="ashow"></div>
      </div>
      <div @click="filish">
        <p>已完成</p>
        <div class="xline" v-if="fshow"></div>
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
      fshow: false,
    };
  },
  created() {},
  components: {},
  methods: {
    all() {
      this.ashow = true;
      this.fshow = false;
      this.$router.push("/run/all");
    },
    filish() {
      this.ashow = false;
      this.fshow = true;
      this.$router.push("/run/filish");
    }
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/errands/Runorders.scss";
</style>
