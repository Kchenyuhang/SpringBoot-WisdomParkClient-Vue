<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/position">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt=""
          >
        </router-link>
        <p>职位详情</p>
      </div>
    </div>
    <div class="position-card">
      <div class="card-content">
        <div class="row1">
          <p>轻松日结小任务</p>
        </div>
        <div class="row2">
          <p class="pay">{{position.pay}}元/天</p>
          <p class="title">{{position.payType}}</p>
        </div>
        <div class="row3 cc-df-right">
          <p class="pay">人数{{position.have}}/{{position.number}}人</p>
          <div class="icon-full cc-df-center" v-if="position.have==position.number">
            <p>已满</p>
          </div>
          <div class="icon-less cc-df-center" v-if="position.have!=position.number">
            <p>未满</p>
          </div>
        </div>
      </div>
    </div>
    <div class="detail">
      <div class="detail-card">
        <div class="detail-title">
          <p>{{position.name}}</p>
        </div>
        <div class="detail-content">
          <div class="row">
            <p class="row-title">日期</p>
            <p class="row-content">{{position.workingDate}}</p>
          </div>
          <div class="row">
            <p class="row-title">时间</p>
            <p class="row-content">{{position.workingTime}}</p>
          </div>
          <div class="row">
            <p class="row-title">地点</p>
            <p class="row-content">{{position.workplace}}</p>
          </div>
        </div>
        <div class="detail-title">
          <p>岗位详情</p>
        </div>
        <div class="content">
          <p>{{position.description}}</p>
        </div>
        <div class="detail-title">
          <p>岗位负责人</p>
        </div>
        <div class="position-boss">
          <div class="avatar">
            <img
              :src="position.bossAvatar"
              alt=""
            >
          </div>
          <div class="boss">
            <div class="boss-name">
              <p class="name">{{position.bossName}}</p>
              <p class="num">{{position.bossPhone}}</p>
            </div>
            <div class="renzheng cc-df-center cc-df-left">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/renzheng.png"
                alt=""
              >
              <p>个人认证</p>
            </div>
          </div>
        </div>
        <div class="tips">
          <div class="tips-row">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/dunpai.png"
              alt=""
            >
            <p>校园聘小贴士</p>
          </div>
          <div class="tips-p">
            <p>兼职过程中请拒绝单家缴纳任何费用，若收费向客服举报</p>

          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="btn cc-df-center">
        <p>联系对方</p>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "PositionDetails",
  data() {
    return {
      position: {}
    };
  },
  components: {},
  created() {
    this.selectCompanyDetails();
  },
  mounted() {},
  methods: {
    async selectCompanyDetails() {
      this.url = this.GLOBAL.baseUrl + "/partJob/byId";
      this.data = {
        id: this.$route.params.Id
      };
      this.result = await API.init(this.url, this.data, "post");
      this.position = this.result.data;
      console.log(this.position);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/Job/PositionDetails.scss";
</style>
