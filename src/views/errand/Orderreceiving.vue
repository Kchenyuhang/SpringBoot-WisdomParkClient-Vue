<template>
 <div class="bg">
    <div class="header">
        <img @click="handClick"
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      <p>接单大厅</p>
    </div>
    <div class="topNav">
      <div @click="receive">
        <p>待接单</p>
        <div class="xline" v-if="show"></div>
      </div>
      <div @click="goods">
        <p>已接单</p>
        <div class="xline" v-if="!show"></div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Orderreceiving",
  data() {
    return {
      show: true
    };
  },
  created() {},
  components: {},
  methods: {
    handClick() {
      this.$router.push("/errandshomepage")
    },
    receive() {
      this.show = !this.show;
      this.$router.push("/orderreceiving/all");
    },
    goods() {
      this.show = !this.show;
      this.$router.push("/orderreceiving/goods");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/errands/Orderreceiving.scss";
</style>
