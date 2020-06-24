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
      <div
        class="search"
        @click="into(1)"
      >
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
        @click="clear(1)"
      >
        <p :class="{'fontBlack':isTrue}">兼职</p>
      </div>
      <div
        class="full-time-job cc-df-center"
        @click="clear(2)"
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
          <p>排序：</p>
          <div>
            <Select
              @changeOption="changeOption"
              :selectData="selectData"
            ></Select>
          </div>
        </div>
      </div>
      <hr class="line1" />
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
      class="choose"
      v-if="!isTrue"
    >
      <hr class="line" />
      <div class="choose-between cc-df-between">
         <div class="cc-df">
          <div
            class="choose-all"
            @click="into(2)"
          >
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/gengduo.png"
              alt=""
            >
          </div>
        </div>
        <div class="choose-title">
          <p>排序：</p>
          <Select
            @changeOption="changeOption1"
            :selectData="selectData1"
          ></Select>
        </div>
      </div>
      <hr class="line1" />
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
      <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/top.png" alt="">
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "Position",
  data() {
    return {
      isTrue: true,
      isBackground: false,
      isBottom: false,
      isTop: false,
      field: "gmt_create",
      page: 1,
      partJobs: [],
      jobs: [],
      selectData: {
        defaultIndex: 0, //默认选中的是第几个
        selectStatus: false, // 通过selectStatus来控制下拉框的显示/隐藏
        selectOptions: [
          // 下拉框中的数据 name这样的参数，看项目是否有需求，可自行修改
          {
            name: "gmt_create",
            context: "时间"
          },
          {
            name: "pay",
            context: "薪资"
          }
        ]
      },
      selectData1: {
        defaultIndex: 0, //默认选中的是第几个
        selectStatus: false, // 通过selectStatus来控制下拉框的显示/隐藏
        selectOptions: [
          // 下拉框中的数据 name这样的参数，看项目是否有需求，可自行修改
          {
            name: "gmt_create",
            context: "时间"
          },
          {
            name: "max",
            context: "薪资"
          }
        ]
      }
    };
  },
  components: {
    Select: require("../../components/select").default
  },
  created() {
    this.selectPartJob();
    this.selectJob();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },

  methods: {
    clear(index) {
      if (index == 1) {
        this.isTrue = true;
      }
      if (index == 2) {
        this.isTrue = false;
      }
      this.isBottom = false;
      this.page = 1;
      this.isTop = false;
      this.isBackground = false;
    },
    intoFull(index) {
      console.log(index);
      this.$router.push({
        name: "FullTimeJob",
        params: { Id: index , Type: 1,Name: null}
      });
    },
    intoDetail(index) {
      console.log(index);
      this.$router.push({
        name: "PositionDetails",
        params: { Id: index }
      });
    },
    top() {
      document.documentElement.scrollTop = 0;
    },
    async selectPartJob() {
      this.url = this.GLOBAL.baseUrl + "/partJob/list";
      this.data = {
        currentPage: this.page,
        field: this.field,
        pageSize: 5
      };
      this.result = await API.init(this.url, this.data, "post");
      this.partJobs.push(this.result.data);
      if (this.result.data.length == 0) {
        this.isBottom = true;
      }
    },
    async selectJob() {
      this.url = this.GLOBAL.baseUrl + "/job/list";
      this.data = {
        currentPage: this.page,
        field: this.field,
        pageSize: 5
      };
      this.result = await API.init(this.url, this.data, "post");
      this.jobs.push(this.result.data);
      console.log(this.jobs);
      if (this.result.data.length == 0) {
        this.isBottom = true;
      }
    },
    onChangeOption(index) {
      //子组件通过一个事件来触发onChangeOption方法，从而传递一系列参数，这里的index就是传过来的
      this.selectData.defaultIndex = index;
      //触发过后，动态改变了需要值
      this.selectPartJob();
    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      let documentTop = document.body.scrollHeight; //全部内容的高
      let screenHeight = window.screen.availHeight; //当前屏幕的高
      if (scrollTop + screenHeight >= documentTop - 1) {
        this.page++;
        this.selectPartJob();
        this.selectJob();
        //干你想干的事儿
        /* console.log(screenTop)
				console.log(documentTop)
				console.log(screenHeight) */
      }
      //滚动条的高
      if (scrollTop > 54) {
        this.isBackground = true;
      } else {
        this.isBackground = false;
      }
      if (scrollTop > 588) {
        this.isTop = true;
      } else {
        this.isTop = false;
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
    changeOption1(index) {
      this.jobs = [];
      this.page = 1;
      this.field = this.selectData1.selectOptions[index].name;
      this.selectJob();
    },
    changeOption(index) {
      this.partJobs = [];
      this.page = 1;
      this.field = this.selectData.selectOptions[index].name;
      this.selectPartJob();
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/Job/position.scss";
</style>
