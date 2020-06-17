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
          @click="updateGender()"
          class="color"
          :class="{'changeColor':isShow!=user.gender}"
        >
          <p>保存</p>
        </button>
      </div>
    </div>
    <div class="card cc-shadow">
      <div
        class="cc-df-between row"
        @click="isShow = '男'"
      >
        <div>
          <p class="nick">男</p>
        </div>
        <div class="cc-df-right">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/gou.png"
            alt=""
            class="nickimg"
            v-if="isShow == '男'"
          >
        </div>
      </div>
      <hr class="line" />
      <div
        class="cc-df-between row1"
        @click="isShow = '女'"
      >
        <div>
          <p class="nick">女</p>
        </div>
        <div class="cc-df-right">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/gou.png"
            alt=""
            class="nickimg"
            v-if="isShow == '女'"
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
      isShow: this.$store.state.user.gender,
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
    async updateGender() {
      this.url = this.GLOBAL.baseUrl + "/user/update/info";
      this.data = {
        avatar: this.user.avatar,
        gender: this.isShow,
        nickname: this.user.nickname,
        pkUserAccountId: this.user.pkUserAccountId,
        address: this.user.address
      };
      if (this.isShow != this.user.gender) {
        this.result = await API.init(this.url, this.data, "post");
        console.log(this.result.msg);
        if (this.result.msg == "成功") {
          this.user.gender = this.isShow;
          localStorage.setItem("user", JSON.stringify(this.user));
          this.$store.commit("setUser", this.user);
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
