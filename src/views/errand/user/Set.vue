<template>
  <div class="bg">
    <div class="header">
      <router-link to="/personalcenter">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt
        />
      </router-link>
      <p>设置</p>
    </div>
    <div class="userdiv">
      <p>用户协议</p>
    </div>
    <div class="center">
      <img
        src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/ic_complain_white_full.png"
        alt=""
      />
      <p>400-612-6688</p>
    </div>
    <button class="btn" @click="layout">退出登录</button>
  </div>
</template>

<script>
export default {
  name: "Set",
  data() {
    return {};
  },
  created() {},
  components: {},
  methods: {
      // 退出到layout页面
    layout() {
      this.$router.push("/layout");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/errands/user/Set.scss";
</style>
