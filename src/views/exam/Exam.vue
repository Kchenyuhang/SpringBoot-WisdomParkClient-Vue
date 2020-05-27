<template>
  <div class="bg">
    <div class="header">
      <router-link to="/layout">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        >
      </router-link>
      <p>考务查询</p>
    </div>
    <hr class="line" />
    <div class="container">
      <p>2020上学期</p>
      <img
        src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/xiajiantou.png"
        alt=""
      >
    </div>
    <div
      v-for="item in 4"
      :key="item.id"
    >
      <div class="card">
        <div class="cc-df-between">
          <div>
            <p class="mid">微信小程序</p>
          </div>
          <div>
            <p class="small1">距离考试还有2天</p>
          </div>
        </div>
        <div>
          <p class="small">考试地点：教四 304</p>
        </div>
        <div>
          <p class="small">考试时间：2020-12-12 12:12:12~2020-12-12 12:12:12</p>
        </div>
      </div>
    </div>
    <div class="btn">
      <p>
        成绩报告单
      </p>
    </div>
  </div>

</template>

<script>
export default {
  name: "exam",
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
@import "../../assets/scss/main/exam.scss";
</style>
