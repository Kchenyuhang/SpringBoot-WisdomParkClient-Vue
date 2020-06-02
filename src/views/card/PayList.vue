<template>
  <div class="bg">
    <div class="header">
      <router-link to="/metrocard">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        >
      </router-link>
      <p>消费明细</p>
    </div>
    <hr class="line" />
    <div
      v-for="item in 5"
      :key="item.id"
    >
      <div class="card cc-df-between">
        <div class="cc-df-warp pay">
          <div>
            <p class="mid">校园卡充值</p>
          </div>
          <div>
            <p class="small">2020-06-01</p>
          </div>
        </div>
        <div>
          <div class="add">
            <p>+100</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "paylist",
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
@import "../../assets/scss/card/PayList.scss";
</style>
