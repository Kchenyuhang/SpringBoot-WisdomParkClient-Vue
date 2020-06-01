<template>
  <div class="bg">
    <div class="header">
      <router-link to="/layout">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png" alt />
      </router-link>
      <p>图书馆</p>
    </div>
    <hr class="line" />
    <div class="book cc-df">
      <p class="font">已阅读</p>
      <p class="num">15</p>
      <p class="font">本</p>
    </div>
    <div>
      <div class="title">
        <p>待还书记</p>
      </div>
    </div>
    <div v-for="item in 2" :key="item.id">
      <div class="card">
        <div class="card1">
          <div>
            <p class="mid">Java理论基础与实践</p>
          </div>
          <div class="cc-df-between">
            <div>
              <p class="small">借阅日期：2020-12-12</p>
            </div>
            <div>
              <p class="small1">应还日期：2020-12-12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="title">
      <p>历史借阅</p>
    </div>
    <div v-for="item in 3" :key="item.id">
      <div class="card">
        <div class="card1">
          <div>
            <p class="mid">Java理论基础与实践</p>
          </div>
          <div class="cc-df-between">
            <div>
              <p class="small">借阅日期：2020-12-12</p>
            </div>
            <div>
              <p class="small">归还日期：2020-12-12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "library",
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
@import "../../assets/scss/library/Library.scss";
</style>
