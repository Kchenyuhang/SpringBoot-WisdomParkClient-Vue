<template>
  <div class="bg">
    <div class="header">
      <router-link to="/base">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        >
      </router-link>
      <p>设置性别</p>
      <div class="save">
        <button
          @click="updateNickname()"
          class="color"
          :class="{'changeColor':nicknameInput!=user.nickname}"
        >
          <p>保存</p>
        </button>
      </div>
    </div>
    <div class="card cc-shadow">
      <div class="cc-df-between row">
        <div>
          <p class="nick">男</p>
        </div>
        <div class="cc-df-right">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/gou.png"
            alt=""
            class="nickimg"
          >
        </div>
      </div>
      <hr class="line" />
      <div class="cc-df-between row1">
        <div>
          <p class="nick">女</p>
        </div>
        <div class="cc-df-right">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/gou.png"
            alt=""
            class="nickimg"
          >
        </div>
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
@import "../../assets/scss/other/gender.scss";
</style>
