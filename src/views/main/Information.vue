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
      <Carousel :slideList="slideList" @into="into"></Carousel>
      <div class="Top">
        <p class="title">置顶帖</p>
        <div>
          <div v-for="(item, index) in result" :key="index">
            <div class="cc-df" @click="intoDetail(item.pkInfoManageId)">
              <img :src="'https://images.weserv.nl/?url='+ item.cover" />
              <div class="cc-col-between cc-mleft">
                <p class="file">{{ item.title }}...</p>
                <!-- <p v-html="item.text.slice(0, 35)"></p> -->
                <p class="time">{{ item.gmtCreate.slice(0, 10) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="cc-df container-header">
          <div class="cc-coll-4 cc-df-center" @click="isShow = 1">
            <p :class="{ blueLine: isShow == 1 }" @click="getAll">全部</p>
          </div>
          <div class="cc-coll-4 cc-df-center" @click="isShow = 2">
            <p :class="{ blueLine: isShow == 2 }" @click="getDoList">教务处</p>
          </div>
          <div class="cc-coll-4 cc-df-center" @click="isShow = 3">
            <p :class="{ blueLine: isShow == 3 }" @click="getStudentList">学生会</p>
          </div>
        </div>
        <div>
          <div v-for="(item, index) in teachResult" :key="index">
            <div class="cc-df cc-mtop cc-mleft" @click="intoDetail(item.pkInfoManageId)">
              <img :src="'https://images.weserv.nl/?url='+item.cover" alt />
              <div class="cc-col-between cc-mleft">
                <p class="file">
                  <b>{{ item.title }}</b>
                </p>
                <p class="time">{{ item.gmtCreate.slice(0, 10) }}</p>
              </div>
            </div>
          </div>
        </div>
        <p class="center" v-show="end">--------到底了--------</p>
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
          image: "",
          id: ""
        },
        {
          url: "#",
          description: "two",
          image: "",
          id: ""
        },
        {
          url: "#",
          description: "three",
          image: "",
          id: ""
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
      count: 5,
      end: false
    };
  },
  components: {
    Carousel: require("../../components/Carousel").default
  },
  created() {
    // console.log(this.transitionName);
    this.getList();
    this.getAll();
    let that = this;
    window.onscroll = function() {
      // scrollTop 滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      // windowHeight 可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      // scrollHeight 滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // 滚动条到底部的条件
      if (scrollTop + windowHeight >= scrollHeight - 50) {
        // 加载数据
        that.loadmore();
      }
      if (scrollTop + windowHeight == scrollHeight) {
        that.end = true;
        console.log(that.end);
      }
    };
  },
  mounted() {
    // this.loadMore();
  },
  methods: {
    into(index) {
      this.$router.push({
        name: "InformationDetail",
        params: { Id: this.slideList[index].id }
      });
    },
    intoDetail(index) {
      this.$router.push({
        name: "InformationDetail",
        params: { Id: index }
      });
    },
    loadmore() {
      this.count += 5;
      if (this.isShow == 1) {
        this.getAll();
      }
      if (this.isShow == 2) {
        this.getDoList();
      }
      if (this.isShow == 3) {
        this.getStudentList();
      }
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
        this.slideList[i].image =
          "https://images.weserv.nl/?url=" + this.result[i].cover;
        this.slideList[i].id = this.result[i].pkInfoManageId;
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
        currentPage: 0,
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
