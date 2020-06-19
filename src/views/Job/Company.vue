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
        <p>公司</p>
      </div>
      <div class="search-input">
        <div class="search">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/sousuo.png"
            alt=""
          >
        </div>
        <div class="inp">
          <input
            type="text"
            placeholder="搜索公司或职位"
          >
        </div>
      </div>
    </div>
    <div
      v-for="(item3,index3) in companies"
      :key="index3"
    >
      <div
        v-for="(item,index) in companies[index3]"
        :key="index"
      >
        <div
          class="company-card"
          @click="intoDetails(item.pkCompanyId)"
        >
          <div class="company-top">
            <div class="company-avatar">
              <div class="avatar-box">
                <img
                  :src="item.logo"
                  alt=""
                >
              </div>
            </div>
            <div class="company-information">
              <div class="company-name">
                <p>{{item.name}}</p>
              </div>
              <div class="company-place">
                <p>{{item.address}}</p>
              </div>
            </div>
          </div>
          <div class="company-bottom">
            <div
              v-for="(Types,i) in types1[index3][index]"
              :key="i"
              class="cc-df"
            >
              <div class="company-type cc-df-center">
                <p>{{Types}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="cc-df-center cc-donghua bottom"
      v-if="isBottom"
    >
      <p>--------已经到底了---------</p>
    </div>
    <div
      class="top-btn cc-donghua"
      @click="top()"
      v-if="isTop"
    >
      <p>置顶</p>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "Company",
  data() {
    return {
      companies: [],
      types1: [],
      types: [[]],
      type: "",
      page: 1,
      z: 0,
      isBottom: false,
      isTop: false
    };
  },
  components: {},
  created() {
    this.selectCompany();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    intoDetails(index) {
      console.log(index);
      this.$router.push({
        name: "CompanyDetails",
        params: { Id: index }
      });
    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      let documentTop = document.body.scrollHeight; //全部内容的高
      let screenHeight = window.screen.availHeight; //当前屏幕的高
      // console.log(scrollTop);
      if (scrollTop + screenHeight >= documentTop - 1) {
        this.page++;
        // this.types1 = [];
        this.types = [[]];
        this.selectCompany();
        //干你想干的事儿
        /* console.log(screenTop)
				console.log(documentTop)
				console.log(screenHeight) */
      }
      if (scrollTop > 588) {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    },
    top() {
      document.documentElement.scrollTop = 0;
    },
    async selectCompany() {
      this.url = this.GLOBAL.baseUrl + "/company/list";
      this.data = {
        currentPage: this.page,
        field: "workers",
        pageSize: 10
      };
      this.result = await API.init(this.url, this.data, "post");
      if (this.result.data.length == 0) {
        this.isBottom = true;
      }
      if (this.result.data.length != 0) {
        this.companies.push(this.result.data);
        console.log(this.companies);
        for (let x = this.z; x < this.companies.length; x++) {
          for (let i = 0; i < this.companies[x].length; i++) {
            this.type = this.companies[x][i].type;
            // this.type.indexOf(",") != -1
            let j = 0;
            for (; this.type.indexOf(",") != -1; j++) {
              this.types[i][j] = this.type.substring(0, this.type.indexOf(","));
              this.type = this.type.substring(this.type.indexOf(",") + 1);
            }
            this.types[i][j] = this.type;
            if (i < this.companies[x].length - 1) {
              this.types.push([]);
            }
          }
        }
        this.z++;
        console.log(this.types);
        this.types1.push(this.types);
        console.log(this.types1);
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/Job/company.scss";
</style>
