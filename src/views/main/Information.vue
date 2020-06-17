<template>
  <transition :name="transitionName">
    <div class="bg address1">
      <div class="header">
        <router-link to="/index">
          <img
            class="icon"
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
            alt
          />
        </router-link>
        <p>资讯</p>
      </div>
      <Carousel :slideList="slideList"></Carousel>
      <div class="Top">
        <p class="title">置顶帖</p>
        <div>
          <div v-for="(item, index) in result" :key="index">
            <div class="cc-df">
              <img :src="item.cover" />
              <div class="cc-col-between cc-mleft">
                <p class="file">{{ item.title }}...</p>
                <!-- <p v-html="item.text.slice(0, 35)"></p> -->
                <p class="time">{{ item.gmtCreate.slice(0, 10) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container ">
        <div class="cc-df container-header">
          <div class="cc-coll-4 cc-df-center" @click="isShow = 1">
            <p :class="{ blueLine: isShow == 1 }" @click="getAll">全部</p>
          </div>
          <div class="cc-coll-4 cc-df-center" @click="isShow = 2">
            <p :class="{ blueLine: isShow == 2 }" @click="getDoList">教务处</p>
          </div>
          <div class="cc-coll-4 cc-df-center" @click="isShow = 3">
            <p :class="{ blueLine: isShow == 3 }" @click="getStudentList">
              学生会
            </p>
          </div>
        </div>
        <div>
          <div v-for="(item, index) in teachResult" :key="index">
            <div class="cc-df cc-mtop cc-mleft">
              <img :src="item.cover" alt="" />
              <div class="cc-col-between cc-mleft">
                <p class="file">
                  <b>{{ item.title }}</b>
                </p>
                <p class="time">{{ item.gmtCreate.slice(0, 10) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const API = require("../../request/api.js");
export default {
  name: "Information",
  data() {
    return {
      transitionName: this.$store.state.transitionName,
      slideList: [
        {
          url: "#",
          description: "one",
          image: ""
        },
        {
          url: "#",
          description: "two",
          image: ""
        },
        {
          url: "#",
          description: "three",
          image: ""
        }
      ],
      isShow: 1,
      result: [],
      teachResult: [],
      data: {
        currentPage: 0,
        field: "1",
        pageSize: 5
      },
      count: 5
    };
  },
  components: {
    Carousel: require("../../components/Carousel").default
  },
  created() {
    // console.log(this.transitionName);
    this.getList();
    this.getAll();
  },
  mounted() {
    // this.loadMore();
  },
  methods: {
    loadMore() {
      // window.onscroll = () => {
      /**
       * document.documentElement.offsetHeight：网页可见区域高，获取元素自身的高度（包含边框）
       * document.documentElement.scrollTop; 获取当前页面的滚动条纵坐标位置，网页被卷去的高
       * window.innerHeight：获取浏览器页面可用高度
       */
      // console.log(document.documentElement.offsetHeight);
      // console.log(document.documentElement.scrollTop);
      // console.log(window.innerHeight);
      this.data.pageSize = this.data.pageSize + 10;
      //注：只有距离满足条件，允许加载下一页数据，且当前page为1,2,3时，才允许滚动加载
      // if (bottomOfWindow && this.loadMore === true && this.page <= 3) {
      // console.log("请求加载数据，请求page为", this.page);
      // this.get_article_list(this.page);
      // }
      // };
    },
    async getList() {
      this.url = this.GLOBAL.baseUrl + "/info/isTap";
      this.data = {
        currentPage: 0,
        field: "1",
        pageSize: this.count
      };
      this.result = (await API.init(this.url, this.data, "post")).data;
      for (let i = 0; i < this.result.length; i++) {
        this.slideList[i].image = this.result[i].cover;
        // console.log(this.slideList[i].image);
      }
    },
    async getDoList() {
      this.url = this.GLOBAL.baseUrl + "/info/type/page";
      this.data = {
        currentPage: 0,
        field: "1",
        pageSize: this.count
      };
      this.teachResult = (await API.init(this.url, this.data, "post")).data;
      // console.log(this.teachResult);
    },
    async getStudentList() {
      this.url = this.GLOBAL.baseUrl + "/info/type/page";
      this.data = {
        currentPage: 0,
        field: "2",
        pageSize: this.count
      };
      this.teachResult = (await API.init(this.url, this.data, "post")).data;
      // console.log(this.teachResult);
    },
    async getAll() {
      this.url = this.GLOBAL.baseUrl + "/info/allInfo";
      this.data = {
        currentPage: 1,
        field: "1",
        pageSize: this.count
      };
      this.teachResult = (await API.init(this.url, this.data, "post")).data;
      // console.log(this.teachResult);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/Information.scss";
</style>
