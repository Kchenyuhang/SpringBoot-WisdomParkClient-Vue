<template>
  <div class="bg  cc-donghua-top">
    <div class="header">
      <router-link to="/newphone">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        >
      </router-link>
      <p>填写验证码</p>
    </div>
    <hr class="line" />
    <div class="card">
      <div class="code">
        <p>短信验证码已发送，请填写验证码</p>
      </div>
      <div>
        <div class="phone">
          <p>手机号:</p>
          <p class="phonenum">15370000688</p>
        </div>
        <hr class="line1" />
        <div class="codenum">
          <p>验证码:</p>
          <input
            type="text"
            class="codenumber"
            placeholder="请输入验证码"
          >
        </div>
        <hr class="line1" />
      </div>
      <router-link to="/base">
        <div class="btn">
          <p>提交</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "update",
  data() {
    return {
      dis: true,
      user: this.$store.state.user,
      token: this.$store.state.token,
      nicknameInput: this.$store.state.user.nickname,
      url: "",
      data: {}
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    async updateNickname() {
      this.url = this.GLOBAL.baseUrl + "/user/update/info";
      this.data = {
        avatar: this.user.avatar,
        gender: this.user.gender,
        nickname: this.nicknameInput,
        pkUserAccountId: this.user.pkUserAccountId
      };
      if (this.nicknameInput != this.user.nickname) {
        this.result = await API.init(this.url, this.data, "put");
        console.log(this.result.msg);
        if (this.result.msg == "成功") {
          localStorage.setItem("user", JSON.stringify(this.result.data));
          this.$store.commit("setUser", this.result.data);
          this.$router.push("/base");
        }
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/other/newphonecode.scss";
</style>
