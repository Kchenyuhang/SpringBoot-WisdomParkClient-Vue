<template>
  <div class="bg cc-donghua-top">
    <div class="header">
      <router-link to="/base"><img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        ></router-link>
      <p>绑定手机号</p>
    </div>
    <hr class="line" />
    <div class="card">
      <div class="pic"><img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/iPhone-X.png"
          alt=""
        ></div>
      <div class="phone">
        <p>您的手机号：{{user.phoneNumber}}</p>
      </div>
      <router-link to="/newphone">
        <div class="btn">
          <p>更换手机号</p>
        </div>
      </router-link>
    </div>
  </div>
</template><script>
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

  created() {
    console.log(this.$route.path);
  },

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
</script><style scoped lang="scss">
@import "../../assets/scss/other/olderphone.scss";
</style>