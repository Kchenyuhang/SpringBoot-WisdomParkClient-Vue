<template>
  <div class="bg">
    <div class="header">
      <img
        class="icon"
        src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
        alt=""
        @click="backTo()"
      />
      <div class="inform">
        <div class="top">
          <div class="left">
            <div class="card">
              <img
                class="img"
                :src="list.avatar"
              />
              <div class="mes">
                <p class="wid">{{ list.username }}</p>
                <p class="nickname">用户昵称：{{ list.nickname }}</p>
              </div>
            </div>
          </div>
          <div
            class="right"
            v-show="show"
          >
            <router-link to="/personaldetail">
              <div class="btn">
                <p>编辑资料</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>1234天前来过</p>
        <p>个人简介</p>
      </div>
      <div class="count">
        <div class="tab">
          <div @click="isShow = 1">
            <p :class="{ blueLine: isShow == 1 }">发布{{send.length}}</p>
          </div>
          <div @click="isShow = 2">
            <p :class="{ blueLine: isShow == 2 }">评价0</p>
          </div>
          <div @click="isShow = 3">
            <p :class="{ blueLine: isShow == 3 }">收藏{{like.length}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        class="box"
        v-show="isShow == 1"
        v-for="(item, index) in send"
        :key="index"
      >
        <div class="left">
          <img :src="item.goodsImgUrl" />
        </div>
        <div class="right">
          <p class="title">{{ item.goodsName }}</p>
          <p class="des">{{ item.goodsDescription }}</p>
          <p class="price">￥{{ item.goodsPrice }}</p>
          <!-- <div class="com">
            <img
              class="icon"
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/cc-message.png"
            />
            <p class="mes">0</p>
          </div> -->
        </div>
      </div>
      <div
        class="box"
        v-show="isShow == 2"
      >
        <div class="left">
          <img src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/3.jpg" />
        </div>
        <div class="right">
          <p class="title">商品名</p>
          <p class="des">描述</p>
          <p class="price">￥价</p>
          <!-- <div class="com">
            <img
              class="icon"
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/cc-message.png"
            />
            <p class="mes">10</p>
          </div> -->
        </div>
      </div>
      <div
        class="box"
        v-show="isShow == 3"
        v-for="(item, index) in like"
        :key="index"
      >
        <div class="left">
          <img :src="item.goodsImgUrl" />
        </div>
        <div class="right">
          <p class="title">{{ item.goodsName }}</p>
          <p class="des">{{ item.goodsDescription }}</p>
          <p class="price">￥{{ item.goodsPrice }}</p>
          <!-- <div class="com">
            <img
              class="icon"
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/cc-message.png"
            />
            <p class="mes">0</p>
          </div> -->
        </div>
      </div>
      <div
        class="send"
        v-show="show"
      >
        <router-link to="/sell">
          <div class="round">
            <img
              class="icon"
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/add.png"
            />
            <p>发布</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../../request/api.js");
export default {
  name: "Personal",
  data() {
    return {
      isShow: 1,
      show: true,
      user: JSON.parse(localStorage.getItem("FleaUser")),
      path1: JSON.parse(localStorage.getItem("path1")),
      list: [],
      count: 10,
      send: [],
      like: []
    };
  },
  components: {},
  created() {
    this.ifUser();
    this.getUserInfor();
    this.getSend();
    this.getLike();
  },
  mounted() {},
  methods: {
    backTo() {
      this.$router.push(this.path1);
    },
    async getUserInfor() {
      let id = this.$route.params.id;
      this.data = {
        currentPage: 0,
        pageSize: 0,
        pkFleaUserId: id
      };
      this.url = this.GLOBAL.baseUrl + "/flea/user/userMain";
      this.list = (await API.init(this.url, this.data, "post")).data;
      //   this.likeList = (await API.init(this.url, this.data, "post")).data;
      // localStorage.setItem("path", JSON.stringify(path));
      console.log(this.list);
    },
    ifUser() {
      if (this.$route.params.id == this.user.pkFleaUserId) {
        this.show = true;
      } else this.show = false;
    },
    async getSend() {
      let id = this.$route.params.id;
      this.url = this.GLOBAL.baseUrl + "/flea/users/release";
      this.data = {
        currentPage: 1,
        pageSize: this.count,
        pkFleaUserId: id
      };
      this.send = (await API.init(this.url, this.data, "post")).data.content;
      console.log(this.send);
    },
    async getLike() {
      let id = this.$route.params.id;
      this.url = this.GLOBAL.baseUrl + "/flea/collection/all";
      this.data = {
        currentPage: 1,
        pageSize: this.count,
        pkFleaUserId: id
      };
      this.like = (await API.init(this.url, this.data, "post")).data;
      // console.log(this.like);
    },
    gotoDetail(id) {
      localStorage.setItem("path", JSON.stringify(this.path));
      this.$router.push({
        path: `/commoditydetails/${id}`
      });
      this.page[this.count] = id;
      this.count++;
      localStorage.setItem("page", JSON.stringify(this.page));
      localStorage.setItem("count", JSON.stringify(this.count));
      this.getList();
      // window.location.reload();
      // this.backTop();
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/personal/Personal.scss";
</style>
