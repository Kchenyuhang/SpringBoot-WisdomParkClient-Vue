<template>
  <div class="bg  cc-donghua-top">
    <div class="header">
      <router-link to="/newphone">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
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
          <p class="phonenum">{{ phoneInput }}</p>
        </div>
        <hr class="line1" />
        <div class="codenum">
          <p>验证码:</p>
          <input
            type="text"
            class="codenumber"
            placeholder="请输入验证码"
            v-model="code"
          />
        </div>
        <hr class="line1" />
      </div>
      <div class="btn" @click="checkCode()">
        <p>提交</p>
      </div>
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
      phoneInput: this.$route.params.Phone,
      url: "",
      data: {},
      code: ""
    };
  },
  components: {},
  created() {
    this.sendMessage();
  },
  mounted() {},
  methods: {
    async sendMessage() {
      this.data = {
        phoneNumber: this.phoneInput
      };
      this.url = this.GLOBAL.baseUrl + "/sendCode";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
    },
    async updatePhone() {
      this.url = this.GLOBAL.baseUrl + "/user/update/phone";
      this.data = {
        phoneNumber: this.phoneInput,
        pkUserAccountId: this.user.pkUserAccountId
      };

      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result.msg);
      if (this.result.msg == "成功") {
        localStorage.setItem("user", JSON.stringify(this.result.data));
        this.$store.commit("setUser", this.result.data);
        this.$router.push("/base");
      }
    },
    async checkCode() {
      this.data = {
        phoneNumber: this.phoneInput,
        verifyCode: this.code
      };
      this.url = this.GLOBAL.baseUrl + "/verifyCode";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
      if (this.result.msg == "成功") {
        this.updatePhone();
      }
      this.url = this.GLOBAL.baseUrl + "/verifyCode";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
      if (this.result.msg == "成功") {
        this.updatePhone();
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/other/newphonecode.scss";
</style>
