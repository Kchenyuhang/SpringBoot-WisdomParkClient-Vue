<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/position">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/cha.png"
            alt=""
          >
        </router-link>
        <p>筛选</p>
      </div>
    </div>
    <div class="screen-card">
        <div class="screen-title">
            <p>工作地点</p>
        </div>
        <div class="screen-card">
        <div v-for="item in 9" :key="item.id">
            <div class="screen-type cc-df-center" >
                <p>筛选标签</p>
            </div>
        </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer-bin cc-df-between">
            <div class="footer-bin-clear cc-df-center">
                <p>清除</p>
            </div>
            <div class="footer-bin-sure cc-df-center">
                <p>确定</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'JobScreen',
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
@import "../../assets/scss/Job/JobScreen.scss";
</style>
