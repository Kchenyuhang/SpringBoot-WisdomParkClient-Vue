<template>
  <div class="bg">
    <div class="header cc-df-between">
      <div class="header-title">
        <router-link to="/layout">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt=""
          >
        </router-link>
        <p>公司</p>
      </div>
      <div class="search-input">
        <div class="search">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/sousuo.png"
          alt=""
        >
      </div>
      <div class="inp">
        <input type="text" placeholder="搜索公司或职位">
      </div>
      </div>
    </div>
    <div v-for="item in 7" :key="item.id">
      <div class="company-card">
        <div class="company-top">
          <div class="company-avatar">
            <div class="avatar-box">
              <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/gongsi_weixuanzhong.png" alt="">
            </div>
          </div>
          <div class="company-information">
            <div class="company-name">
              <p>中安智能</p>
            </div>
            <div class="company-place">
              <p>南京市</p>
            </div>
          </div>
        </div>
        <div class="company-bottom">
          <div v-for="item in 3" :key="item.id">
            <div class="company-type cc-df-center">
              <p>公司信息</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'Company',
  data() {
    return {

    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/Job/company.scss";
</style>
