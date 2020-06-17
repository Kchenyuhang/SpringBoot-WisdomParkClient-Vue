<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/privatechat">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png" class="back"/>
        </router-link>
        <p>私聊设置</p>
      </div>
    </div>
    <div class="container">
      <div class="lahei-row">
        <div class="lahei cc-df-between">
          <div class="lahei-title">
            <p>拉黑列表</p>
          </div>
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/youjiantou_icon.png" alt="">
        </div>
      </div>
      <div class="clean-row cc-df-center">
        <p>清空聊天记录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'AlumnusSetting',
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
@import "../../assets/scss/alumnus/AlumnusSetting.scss";
</style>
