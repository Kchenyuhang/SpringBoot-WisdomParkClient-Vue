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
        <p>校园聘</p>
      </div>
      <div class="search" @click="into(1)">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/sousuo.png"
          alt=""
        >
      </div>
    </div>
    <div
      class="job-type"
      :class="{'changeBackgroundColor':isBackground}"
    >
      <div
        class="part-time-job cc-df-center"
        @click="isTrue=true"
      >
        <p :class="{'fontBlack':isTrue}">兼职</p>
      </div>
      <div
        class="full-time-job cc-df-center"
        @click="isTrue=false"
      >
        <p :class="{'fontBlack':!isTrue}">校招</p>
      </div>
    </div>

    <div
      class="choose"
      v-if="isTrue"
    >
      <hr class="line" />
      <div class="choose-between cc-df-between">
        <div class="choose-title">
          <p @click="isFalse=true" :class="{'fontBlack1':isFalse}">推荐</p>
          <p @click="isFalse=false" :class="{'fontBlack1':!isFalse}">最新</p>
        </div>
        
        <div class="choose-all" @click="into(2)">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/gengduo.png"
            alt=""
          >
        </div>
      </div>
      <hr class="line1" />
    </div>
    <div
      v-for="item in 7"
      :key="item.id"
      v-show="isTrue&&isFalse"
    >
      <div class="job-card">
        <div class="job-card-wide">
          <div class="job-title cc-df-between">
            <p class="job-name">校园兼职</p>
            <p class="salary">￥99/天</p>
          </div>
          <div class="job-time">
            <p>不限工作日期</p>
            <p>14:00~18:00</p>
          </div>
          <div class="job-number">
            <p>2人</p>
          </div>
          <div class="job-place cc-df-between">
            <p class="boss">负责人信息</p>
            <p class="place">快递站</p>
          </div>
        </div>

      </div>
    </div>
    <div
      v-for="item in 7"
      :key="item.id"
      v-show="isTrue&&(!isFalse)"
    >
      <div class="job-card">
        <div class="job-card-wide">
          <div class="job-title cc-df-between">
            <p class="job-name">兼职</p>
            <p class="salary">￥99/天</p>
          </div>
          <div class="job-time">
            <p>不限工作日期</p>
            <p>14:00~18:00</p>
          </div>
          <div class="job-number">
            <p>2人</p>
          </div>
          <div class="job-place cc-df-between">
            <p class="boss">负责人信息</p>
            <p class="place">快递站</p>
          </div>
        </div>

      </div>
    </div>
    <div
      class="choose"
      v-if="!isTrue"
    >
      <hr class="line" />
      <div class="choose-between cc-df-between">
        <div class="choose-title">
          <p @click="isFalse=true" :class="{'fontBlack1':isFalse}">推荐</p>
          <p @click="isFalse=false" :class="{'fontBlack1':!isFalse}">热门</p>
        </div>
        <div class="choose-all">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/gengduo.png"
            alt=""
          >
        </div>
      </div>
      <hr class="line1" />
    </div>
    <div
      v-for="item in 7"
      :key="item.id"
      v-show="!isTrue&&isFalse"
    >
      <div class="job-card">
        <div class="job-card-wide">
          <div class="job-title cc-df-between">
            <p class="job-name">校园兼职</p>
            <p class="salary">￥99/天</p>
          </div>
          <div class="job-time">
            <p>不限工作日期</p>
            <p>14:00~18:00</p>
          </div>
          <div class="job-number">
            <p>2人</p>
          </div>
          <div class="job-place cc-df-between">
            <p class="boss">负责人信息</p>
            <p class="place">快递站</p>
          </div>
        </div>

      </div>
    </div>
    <div
      v-for="item in 7"
      :key="item.id"
      v-show="!isTrue&&(!isFalse)"
    >
      <div class="job-card">
        <div class="job-card-wide">
          <div class="job-title cc-df-between">
            <p class="job-name">兼职</p>
            <p class="salary">￥99/天</p>
          </div>
          <div class="job-time">
            <p>不限工作日期</p>
            <p>14:00~18:00</p>
          </div>
          <div class="job-number">
            <p>2人</p>
          </div>
          <div class="job-place cc-df-between">
            <p class="boss">负责人信息</p>
            <p class="place">快递站</p>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Position",
  data() {
    return {
      isTrue: true,
      isFalse: true,
      isBackground: false
    };
  },
  components: {},
  created() {},
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop; //滚动条的高
      console.log(scrollTop);
      if (scrollTop > 54) {
        this.isBackground = true;
      } else {
        this.isBackground = false;
      }
    },
    into(index) {
      if (index == 1) {
        this.$router.push("/jobsearch");
      }
      if (index == 2) {
        this.$router.push("/jobscreen");
      }
    },
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/Job/position.scss";
</style>
