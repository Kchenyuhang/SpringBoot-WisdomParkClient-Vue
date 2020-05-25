<template>
  <div class="cc-donghua bg">
    <div class="header">
      <img
        src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
        alt=""
      >
      <p>意见反馈</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Feedback",
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
  background-color: #f5f7fb;
}
.header {
  height: 10%;
  background-color: #ffffff;
  top: 0;
  display: flex;
}
.header img {
  height: 5%;
  width: 5%;
  margin-top: 3%;
  margin-left: 2%;
}
.header p {
  font-size: 18px;
  font-weight: 550;
  margin-left: 34%;
  margin-top: 2%;
}
</style>
