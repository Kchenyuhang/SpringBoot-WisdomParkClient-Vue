<template>
  <div class=" bg">
    <div class="header">
      <router-link to="/my">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        >
      </router-link>
      <p>基本信息</p>
    </div>
    <div class="card cc-shadow">
      <div class="cc-df-between row">
        <div>
          <p class="nick">昵称</p>
        </div>
        <div>
          <p class="nickname">{{user.nickname}}</p>
        </div>
      </div>
      <hr class="line" />
      <div class="cc-df-between row1">
        <div>
          <p class="nick">性别</p>
        </div>
        <div class="cc-df-right">
          <p class="nickname cc-mright">{{user.gender}}</p>
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
            alt="右箭头"
            class="nickimg"
          >
        </div>
      </div>
      <hr class="line" />
      <div class="cc-df-between row1">
        <div>
          <p class="nick">手机号</p>
        </div>
        <div>
          <p class="nickname">{{user.phoneNumber}}</p>
        </div>
      </div>
      <hr class="line" />
      <div class="cc-df-between row1">
        <div>
          <p class="nick">学号</p>
        </div>
        <div>
          <p class="nickname">{{user.jobNumber}}</p>
        </div>
      </div>
      <hr class="line" />
      <div class="cc-df-between row1">
        <div>
          <p class="nick">班级</p>
        </div>
        <div>
          <p class="nickname">{{user.clazzId}}</p>
        </div>
      </div>
    </div>
    <div class="btn">
      <p>
        保存
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Base",
  data() {
    return {
      user: this.$store.state.user,
      token: this.$store.state.token
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/person/Base.scss";
</style>
