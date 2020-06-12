<template>
  <div class="bg">
    <div class="header">
      <router-link to="/errandshomepage">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>个人中心</p>
    </div>
    <div class="personDiv">
      <div class="avatardiv"></div>
    </div>
    <div class="centerDiv"></div>
  </div>
</template>

<script>
export default {
  name: "Personalcenter",
  data() {
    return {};
  },
  created() {},
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/errands/Personalcenter.scss";
</style>
