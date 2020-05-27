<template>
  <div class="bg">
    <div class="header">
      <router-link to="/layout">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        >
      </router-link>
      <p>消息</p>
    </div>
    <div
      v-for="item in 3"
      :key="item.id"
    >
      <div class="card cc-df">
        <div class="icon">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_tongzhi.png"
            alt=""
          >
        </div>

        <p>最新通知：最近教务处的老师严查学生上课情况，请同学们注意相关考勤！</p>
        <div class="time">
          <p>2020-06-01</p>
        </div>

      </div>
      <hr class="line" />
    </div>
  </div>

</template>

<script>
export default {
  name: "message",
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
@import "../../assets/scss/main/message.scss";
</style>
