<template>
  <div class="bg">
    <div class="header cc-df-between">
      <div class="header-title">
        <router-link to="/position">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt=""
          >
        </router-link>
        <div class="inp">
          <input type="text">
        </div>
        <div class="serch">
          <p>搜索</p>
        </div>
      </div>
    </div>
    <!-- <div class="faxian">
      <div class="faxian-card">
        <div class="row">
          <p>搜索发现</p>
        </div>
        <div class="faxian-title-card">
          <div
            v-for="item in 3"
            :key="item.id"
          >
            <div class="faxian-title cc-df-center">
              <p>发现title</p>
            </div>
          </div>
        </div>
      </div>

    </div> -->
    <div class="body">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "JobSearch",
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
@import "../../assets/scss/Job/JobSearch.scss";
</style>
