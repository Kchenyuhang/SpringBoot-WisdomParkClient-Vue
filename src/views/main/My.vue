<template>
  <transition :name="transitionName">
    <div class="bg">
      <div class="header cc-col-center">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bg_weidenglu.png" alt="未登录" />
        <p>未登录</p>
      </div>
      <div class="info">
        <div class="cc-df-between">
          <div class="cc-df info-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_jibenxinxi.png"
              alt="基本信息"
            />
            <p>基本信息</p>
          </div>
          <div class="info-right">
            <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png" alt="右箭头" />
          </div>
        </div>
        <hr class="line" />

        <div class="cc-df-between">
          <div class="cc-df info-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_guanyuwomen.png"
              alt="关于我们"
            />
            <p>关于我们</p>
          </div>
          <div class="info-right">
            <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png" alt="右箭头" />
          </div>
        </div>

        <hr class="line" />
        <router-link to="/feedback">
          <div class="cc-df-between">
            <div class="cc-df info-left">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_yijianfankui.png"
                alt="意见反馈"
              />
              <p>意见反馈</p>
            </div>
            <div class="info-right">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
                alt="右箭头"
              />
            </div>
          </div>
        </router-link>
        <hr class="line" />
        <div class="cc-df-between">
          <div class="cc-df info-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_qinlihuncun.png"
              alt="清理缓存"
            />
            <p>清理缓存</p>
          </div>
          <div class="info-right">
            <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png" alt="右箭头" />
          </div>
        </div>
      </div>
      <div style="height:200px"></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "My",
  data() {
    return {
      transitionName: this.$store.state.transitionName
    };
  },
  components: {},
  created() {
    console.log(this.transitionName);
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/My.scss";
</style>
