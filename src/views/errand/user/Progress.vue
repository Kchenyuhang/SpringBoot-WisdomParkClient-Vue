<template>
  <div class="bg">
    <!-- 顶部导航 -->
    <div class="header">
      <router-link to="/apply">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt
        />
      </router-link>
      <p>申请跑腿</p>
    </div>
    <div class="content">
      <div class="leftcard">
        <img :src="avatar" alt="" />
        <div class="span1">
          <p>{{ userName }}</p>
          <p>{{ phoneNumber }}</p>
        </div>
      </div>
      <div class="rightcard">
        <p class="announce" v-if="status === 0">已发布</p>
        <p class="success" v-if="status === 1">申请成功</p>
        <p class="cancle" v-if="status === 2">未通过</p>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../../request/api");
export default {
  name: "Progress",
  data() {
    return {
      avatar: this.$store.state.user.avatar,
      userName: this.$store.state.user.userName,
      phoneNumber: this.$store.state.user.phoneNumber,
      jobNumber: this.$store.state.user.jobNumber,
      status: ""
    };
  },
  created() {
    this.selectrun();
  },
  components: {},
  methods: {
    // 这个接口需要在请求头里面带入token 先放着
    async selectrun() {
      this.data = {
        founderId: this.jobNumber
      };
      this.url = this.GLOBAL1.baseUrl + "/reviewfrom/status";
      this.status = (await API.init(this.url, this.data, "post")).data.status;
      // alert(this.status);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/errands/user/Progress.scss";
</style>
