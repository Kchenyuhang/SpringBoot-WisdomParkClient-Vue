<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/jobscreen">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
            alt=""
          >
        </router-link>
        <p>筛选结果</p>
      </div>

    </div>
    <div class="fall cc-col-center" v-if="isBottom">
      <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/shibai.png" alt="">
      <p class="null">暂无结果</p>
      <p class="back-p">点击左上角以返回</p>
    </div>
     
    <div
      v-for="(item5,index5) in jobs"
      :key="index5"
      v-show="!isBottom"
    >
      <div
        v-for="(item1,index1) in jobs[index5]"
        :key="index1"
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
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "JobScreenDetails",
  data() {
    return {
      jobs: [],
      isBottom:false
    };
  },
  components: {},
  created() {
    this.selectJob();
  },
  mounted() {},
  methods: {
    intoFull(index) {
      console.log(index);
      this.$router.push({
        name: "FullTimeJob",
        params: { Id: index , Type: 2,Name: this.$route.params.Name}
      });
    },
    async selectJob() {
      this.url = this.GLOBAL.baseUrl + "/job/listByType";
      this.data = {
        currentPage: 1,
        field: this.$route.params.Name,
        pageSize: 100
      };
      this.result = await API.init(this.url, this.data, "post");
      this.jobs.push(this.result.data);
      console.log(this.jobs);
      if (this.result.data.length == 0) {
        this.isBottom = true;
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/Job/JobScreenDetails.scss";
</style>
