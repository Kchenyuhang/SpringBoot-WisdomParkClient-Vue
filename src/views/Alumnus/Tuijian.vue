<template>
  <div>
    <div class="header">
      <div class="header-title">
        <router-link to="/layout">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png" alt />
        </router-link>
        <p>推荐好友</p>
      </div>
    </div>
    <div class="body">
      <div class="row1">
        <p>90%</p>
      </div>
      <div class="row2">
        <p>互动亲密度</p>
      </div>
      <div class="row3">
        <div class="chongdie">
          <div class="up cc-col-center">
            <p>Ta在刚刚也评论了你的动态</p>
            <p>我和原来是渐渐相离。。</p>
          </div>
          <div class="down">
          </div>
        </div>
      </div>
      <div class="row4">
        <div class="chongdie">
          <div class="up">
            <p>聊一聊，会有惊喜发现！</p>
          </div>
          <div class="down">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'Tuijian',
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
@import "../../assets/scss/alumnus/Tuijian.scss";
</style>
