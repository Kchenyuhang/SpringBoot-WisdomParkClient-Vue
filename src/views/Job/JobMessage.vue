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
        <p>消息</p>
      </div>
      <div class="bell">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/lingdang.png"
          alt=""
        >
      </div>
    </div>
    <div class="body">
      <div v-for="item in 3" :key="item.id">
        <div class="message-card">
          <div class="avatar cc-df-center">
            <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/zyj.jpg" alt="">
          </div>
          <div class="message">
            <div class="row1 cc-df-between">
              <div class="row1-left">
                <p class="name">zyj</p>
                <p class="bumen">人事部</p>
              </div>
              <div class="row1-right">
                <div class="time"><p class="time">6月7日</p></div>
                
                <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/gengduo_icon.png" alt="">
              </div>
            </div>
            <div class="row2">
              <p>消息内容</p>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
 name: 'JobMessage',
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
@import "../../assets/scss/Job/JobMessage.scss";
</style>
