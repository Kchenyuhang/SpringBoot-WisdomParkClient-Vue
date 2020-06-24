<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt=""
            @click="out()"
          >
      </div>
    </div>
    <div class="body">
      <div class="row1 cc-df-between">
        <p class="work-name">{{job.name}}</p>
        <p class="work-pay">{{job.min}}k-{{job.max}}k</p>
      </div>
      <div class="row2 cc-col-between">
        <div class="place">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/weizhi_hui.png"
            alt=""
          >
          <p>{{job.workplace}}</p>
        </div>

        <div class="time">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/shijian_hui.png"
            alt=""
          >
          <p>{{job.workingTime}}</p>
        </div>
      </div>
      <hr class="line" />
      <div class="row3">
        <div class="boss-avatar">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/renshixinxi.png"
            alt=""
          >
        </div>
        <div class="boss-information">
          <div class="info-row1 ">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/boss.png"
              alt=""
            >
            <p>
              {{job.boss}}
            </p>
          </div>
          <div class="info-row2 ">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/dianhua.png"
              alt=""
            >
            <p>{{job.bossPhone}}</p>
          </div>
        </div>
      </div>
      <hr class="line" />
      <div class="row4 cc-df-between">
        <div class="work-detail">
          <p>职位详情</p>
        </div>
        <div class="work-type cc-df-center">
          <p>{{job.jobType.name}}</p>
        </div>
      </div>
      <div class="row5">
        <p>{{job.description}}</p>
      </div>
      <hr class="line" />
      <div class="row6">
        <div class="company-avatar">
          <img
            :src="job.company.logo"
            alt=""
          >
        </div>
        <div class="company-detail">
          <div class="company-detail-row1">
            <p>{{job.company.name}}</p>
          </div>
          <div class="company-detail-row2">
            <p>{{job.company.tag}}·{{job.company.workers}}·{{job.company.type.substring(0,5)}}</p>
          </div>
        </div>
      </div>
      <hr class="line" />
      <div class="tips">
        <div class="tips-title">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/jinggao.png" alt="">
          <p>温馨提示</p>
        </div>
        <div class="tips-content">
          <p>该Boss承诺名下所有职位不向您收费，如有不实，请立即举报</p>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="btn cc-df-center">
        <p>立即报名</p>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "FullTimeJob",
  data() {
    return {
      job: {}
    };
  },
  components: {},
  created() {
    this.selectDetail();
  },
  mounted() {},
  methods: {
    out(){
if(this.$route.params.Type==1){
  this.$router.push("/position");
}
if(this.$route.params.Type==2){
  this.$router.push({
        name: "JobScreenDetails",
        params: { Name:  this.$route.params.Name}
      });
}
if(this.$route.params.Type==3){
    this.$router.push({
        name: "CompanyDetails",
        params: { Id:  this.$route.params.Name}
      });
}
    },
    async selectDetail() {
      this.url = this.GLOBAL.baseUrl + "/job/byId";
      this.data = {
        id: this.$route.params.Id
      };
      this.result = await API.init(this.url, this.data, "post");
      this.job = this.result.data;
      console.log(this.job);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/Job/FullTimeJob.scss";
</style>
