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
