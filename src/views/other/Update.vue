<template>
  <div class="bg">
    <div class="header">
      <router-link to="/base">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>设置名字</p>
      <div class="save">
        <button
          @click="updateNickname()"
          class="color"
          :class="{ changeColor: nicknameInput != user.nickname }"
        >
          <p>保存</p>
        </button>
      </div>
    </div>
    <input type="text" class="name cc-shadow" v-model="nicknameInput" />
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
        pkUserAccountId: this.user.pkUserAccountId,
        address: this.user.address
      };

      if (this.nicknameInput != this.user.nickname) {
        this.result = await API.init(this.url, this.data, "post");
        console.log(this.result.msg);
        if (this.result.msg == "成功") {
          this.user.nickname = this.nicknameInput;
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
@import "../../assets/scss/other/update.scss";
</style>
