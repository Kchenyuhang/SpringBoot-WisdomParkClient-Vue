<template>
  <div>
    <div class="bg">
      <div class="bg1"></div>
    </div>
    <div class="container">
      <div class="header">
        <div class="header-row cc-df-between">
          <router-link to="/company">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou_bai.png"
              alt=""
              class="back"
            >
          </router-link>
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/shoucang.png"
            alt=""
            class="shoucang"
          >
        </div>
      </div>
      <div class="company cc-df-between">
        <div>
          <p class="company-name">{{company.name}}</p>
          <p class="company-information">{{company.address}}</p>
        </div>
        <div class="company-avatar">
          <img
            :src="company.logo"
            alt=""
          >
        </div>
      </div>
      <div class="details cc-df-warp">
        <div class="time cc-col-4">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/shijian.png"
            alt=""
          >
          <p>{{company.workingTime}}</p>
        </div>
        <div class="time cc-col-4">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/xiuxi.png"
            alt=""
          >
          <p>{{company.vacation}}</p>
        </div>
        <div class="time cc-col-8">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/gongzuo.png"
            alt=""
          >
          <p>{{company.workingStatus}}</p>
        </div>
      </div>
      <div class="position">
        <div class="position-header">
          <div class="bar cc-df-center">
            <div class="icon"></div>
          </div>
          <div class="position-bar">
            <div class="position-nav cc-df-center">
              <p>职位</p>
            </div>
          </div>
        </div>
        <div class="position-card">
          <div
            v-for="item in companyJobVos"
            :key="item.id"
          >
            <div class="card-content" @click="intoFull(item.pkJobId)">
              <div class="row1 cc-df-between">
                <div class="position-name">
                  <p>{{item.name}}</p>
                </div>
                <div class="position-pay">
                  <p>{{item.min}}k-{{item.max}}k</p>
                </div>
              </div>
              <div class="row2 cc-df">
                  <div class="position-title cc-df-center">
                    <p>{{item.diploma}}</p>
                  </div>
                  <div class="position-title cc-df-center">
                    <p>{{item.jobType.name}}</p>
                  </div>
              </div>
              <div class="row3">
                <div class="avatar">
                  <img
                    :src="item.bossAvatar"
                    alt=""
                  >
                </div>
                <div class="boss">
                  <p>{{item.boss}}</p>
                </div>
              </div>
            </div>
            <hr class="line" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "CompanyDetails",
  data() {
    return {
      companyJobVos: [],
      company: {},
      page: 1
    };
  },
  components: {},
  created() {
    this.selectCompanyDetails();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    intoFull(index) {
      console.log(index);
      this.$router.push({
        name: "FullTimeJob",
        params: { Id: index , Type: 3,Name: this.$route.params.Id}
      });
    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= 555 * (this.page - 1) + 189) {
        this.page++;
        console.log(this.page);
        this.selectCompanyDetails();
        //干你想干的事儿
        /* console.log(screenTop)
				console.log(documentTop)
				console.log(screenHeight) */
      }
    },
    async selectCompanyDetails() {
      this.url = this.GLOBAL.baseUrl + "/company/detail";
      this.data = {
        id: this.$route.params.Id
      };
      this.result = await API.init(this.url, this.data, "post");
      this.company = this.result.data;
      for (
        let i = 0;
        i < this.page * 5 && i < this.result.data.companyJobVos.length;
        i++
      ) {
        this.companyJobVos[i] = this.result.data.companyJobVos[i];
      }
      if(this.companyJobVos.length==this.result.data.companyJobVos.length){
        console.log(this.companyJobVos);
      }
      
      console.log(this.company);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/Job/CompanyDetails.scss";
</style>
