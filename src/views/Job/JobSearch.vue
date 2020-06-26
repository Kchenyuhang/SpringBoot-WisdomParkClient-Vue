<template>
  <div class="bg">
    <div class="header cc-df-between">
      <div class="header-title">
        <router-link to="/position">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt=""
          >
        </router-link>
        <div class="inp">
          <input
            type="text"
            v-model="keyInput"
            @input="select()"
          >
        </div>
        <div
          class="serch"
          @click="select()"
        >
          <p>搜索</p>
        </div>
      </div>
    </div>
    <div class="body">
      <div
        class="job-type"
        :class="{'changeBackgroundColor':isBackground}"
      >
        <div
          class="part-time-job cc-df-center"
          @click="clear(1)"
        >
          <p :class="{'fontBlack':isTrue}">搜兼职</p>
        </div>
        <div
          class="full-time-job cc-df-center"
          @click="clear(2)"
        >
          <p :class="{'fontBlack':!isTrue}">搜校招</p>
        </div>
      </div>

      <div
        v-for="(item3,index3) in partJobs"
        :key="index3"
      >
        <div
          v-for="(item,index) in partJobs[index3]"
          :key="index"
          v-show="isTrue"
        >
          <div
            class="job-card"
            @click="intoDetail(item.pkPartJobId)"
          >
            <div class="job-card-wide">
              <div class="job-title cc-df-between">
                <p class="job-name">{{item.name}}</p>
                <p class="salary">￥{{item.pay}}/天</p>
              </div>
              <div class="job-time">
                <p>{{item.workingDate}}</p>
                <p>{{item.workingTime}}</p>
              </div>
              <div class="job-number">
                <p>{{item.have}}/{{item.number}}人</p>
              </div>
              <div class="job-place cc-df-between">
                <p class="boss">{{item.bossName}}</p>
                <p class="place">{{item.workplace}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cc-df-center cc-donghua bottom"
        v-if="isBottom&&isTrue"
      >
        <p>--------已经到底了---------</p>
      </div>

      <div
        v-for="(item5,index5) in jobs"
        :key="index5"
      >
        <div
          v-for="(item1,index1) in jobs[index5]"
          :key="index1"
          v-show="!isTrue"
        >
          <div
            class="job-card2"
            @click="intoFull(item1.pkJobId)"
          >
            <div class="job-card-wide2">
              <div class="job-title2 cc-df-between">
                <p class="job-name2">{{item1.name}}</p>
                <p class="salary2">￥{{item1.min}}K~{{item1.max}}K</p>
              </div>
              <div class="type-row">
                <div class="job-type2 cc-df-center">
                  <p>{{item1.diploma}}</p>
                </div>
                <div class="job-type2 cc-df-center">
                  <p>{{item1.experience}}</p>
                </div>
                <div class="job-type2 cc-df-center">
                  <p>{{item1.jobType.name}}</p>
                </div>
              </div>
              <div class="job-number2">
                <p>{{item1.company.name}}</p>
              </div>
              <div class="job-place2 cc-df-between">
                <p class="boss">{{item1.boss}}</p>
                <p class="place">{{item1.workplace}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="cc-df-center cc-donghua bottom"
        v-if="isBottom&&!isTrue"
      >
        <p>--------已经到底了---------</p>
      </div>
      <div
        class="top-btn cc-donghua"
        @click="top()"
        v-if="isTop"
      >
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/top.png"
          alt=""
        >
      </div>
    </div>

  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "JobSearch",
  data() {
    return {
      jobs: [],
      partJobs: [],
      isTrue: false,
      keyInput: ""
    };
  },
  components: {},
  created() {
    // 兼职方法调用测试
    this.parttime();
    // 校招方法调用测试
    this.SchoolRecruitment();
  },
  mounted() {},
  methods: {
    select() {
      this.jobs = [];
      this.partJobs = [];
      // 兼职方法调用测试
      this.parttime();
      // 校招方法调用测试
      this.SchoolRecruitment();
    },
    clear(index) {
      if (index == 1) {
        this.isTrue = true;
      }
      if (index == 2) {
        this.isTrue = false;
      }
    },
    // 搜兼职查询交互
    async parttime() {
      this.data = {
        currentPage: 1,
        field: this.keyInput,
        pageSize: 100
      };
      this.url = this.GLOBAL.baseUrl + "/partJob/keyword";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
      this.partJobs.push(this.result.data);
      // console.log(this.job);
    },
    async SchoolRecruitment() {
      this.data = {
        currentPage: 1,
        field: this.keyInput,
        pageSize: 100
      };
      this.url = this.GLOBAL.baseUrl + "/job/keyword";
      this.result = await API.init(this.url, this.data, "post");
      this.jobs.push(this.result.data);
      console.log(this.result);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/Job/JobSearch.scss";
</style>
