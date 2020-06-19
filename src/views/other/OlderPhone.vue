<template>
  <div class="bg cc-donghua-top">
    <div class="header">
      <router-link to="/base"
        ><img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
      /></router-link>

      <p>绑定手机号</p>
    </div>
    <hr class="line" />
    <div class="card">
      <div class="pic">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/iPhone-X.png"
          alt=""
        />
      </div>

      <div class="phone">
        <p>您的手机号：{{ user.phoneNumber }}</p>
      </div>
      <router-link to="/newphone">
        <div class="btn">
          <p>更换手机号</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "update",
  data() {
    return {
      dis: true,
      user: this.$store.state.user,
      token: this.$store.state.token,
      url: "",
      data: {}
    };
  },

  components: {},

  created() {
    console.log(this.$route.path);
  },

  mounted() {},

  methods: {},

  computed: {}
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/other/olderphone.scss";
</style>
