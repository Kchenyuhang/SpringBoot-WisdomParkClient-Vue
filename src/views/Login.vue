<template>
  <div class="bg">
    <img
      src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bg_denglu.png"
      alt=""
    >
    <div class="title">
      <p>智慧校园</p>
    </div>
    <div class="login">
      <input
        type="text"
        maxlength="11"
        oninput="value=value.replace(/[^\d]/g,'')"
        placeholder="请输入手机号"
      >
      <input
        type="text"
        maxlength="6"
        placeholder="请输入验证码"
      >
      <div class="login-btn">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_denglu.png"
          alt=""
        >
        <p>确认登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.bg {
  text-align: center;
}
.title {
  font-family: STLiti;
  font-size: 50px;
  margin-top: -140%;
}
.title p {
  color: white;
}
.login {
  margin-top: 80%;
}
.login input {
  border: none;
  margin-bottom: 20px;
  width: 60%;
  border-bottom: 1px;
  border-bottom-color: #e5e5e5;
}
.login img {
  height: 70%;
  width: 70%;
}
.login-btn p {
}
</style>
