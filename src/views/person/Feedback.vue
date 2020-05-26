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
      <input
        type="text"
        class="theme"
        placeholder="反馈主题"
      >

      <textarea
        cols="5"
        placeholder="反馈内容"
        class="content"
      ></textarea>
      <input
        type="text"
        placeholder="联系方式（选填）"
        class="theme"
      >

    </div>
    <div class="btn">
      <p>
        反馈
      </p>

    </div>

  </div>
</template>

<script>
export default {
  name: "Feedback",
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
@import '../../assets/scss/person/Feedback.scss'
</style>
