<template>
  <div class=" bg">
    <div class="header">
      <router-link to="/metrocard">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        >
      </router-link>
      <p v-if="isTrue">挂失申请</p>
      <p v-if="!isTrue">挂失状态</p>

    </div>
    <div
      class="card cc-shadow cc-donghua"
      v-if="isTrue"
    >
      <input
        type="text"
        class="theme"
        placeholder="请输入卡密"
      >

      <textarea
        cols="5"
        placeholder="请输入备注"
        class="content"
      ></textarea>

    </div>
    <div
      class="card1 cc-shadow cc-donghua"
      v-if="!isTrue"
    >
      <input
        type="text"
        class="theme"
        placeholder="挂失中的状态"
      >
      <input
        type="text"
        class="theme1"
        placeholder="挂失时间"
      >
      <textarea
        cols="5"
        placeholder="请输入备注"
        class="content"
      ></textarea>

    </div>
    <div
      class="btn cc-df-center"
      @click="isTrue=!isTrue"
    >
      <p v-if="isTrue">
        挂失
      </p>
      <p v-if="!isTrue">
        取消挂失
      </p>

    </div>

  </div>
</template>

<script>
export default {
  name: "LossCard",
  data() {
    return {
      isTrue: true
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
@import "../../assets/scss/card/LossCard.scss";
</style>
