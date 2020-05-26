<template>
  <div class=" bg">
    <div class="header">
      <router-link to="/my">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        >
      </router-link>
      <p>意见反馈</p>
    </div>
    <div class="card cc-shadow cc-donghua">
         <div class="cc-df-between">
             <p></p>
         </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Base",
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
@import '../../assets/scss/person/Base.scss'
</style>
