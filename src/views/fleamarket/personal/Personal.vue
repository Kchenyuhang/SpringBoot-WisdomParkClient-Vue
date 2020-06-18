<template>
  <div class="bg">
    <div class="header">
      <div
        class="bgi"
        :style="{ backgroundImage: 'url(' + this.list.avatar + ')' }"
      ></div>
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
              <img class="img" :src="list.avatar" />
              <div class="mes">
                <p class="wid">{{ list.username }}</p>
                <p class="nickname">用户昵称：{{ list.nickname }}</p>
              </div>
            </div>
          </div>
          <div class="right" v-show="show">
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
            <p :class="{ blueLine: isShow == 1 }">发布</p>
          </div>
          <div @click="isShow = 2" v-show="show">
            <p :class="{ blueLine: isShow == 2 }">订单{{ buy.length }}</p>
          </div>
          <div @click="isShow = 3">
            <p :class="{ blueLine: isShow == 3 }">收藏{{ like.length }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="zhezhaoceng" v-show="zzc">
        <p>是否想要下架这件商品</p>
        <div class="b-pos">
          <span @click="zzc = false">取消</span>
          <span @click="deleteSend()">确认</span>
        </div>
      </div>
      <div class="zhezhaoceng" v-show="zzc1">
        <p>成功下架商品</p>
        <div class="b-pos">
          <span @click="zzc1 = false">确认</span>
        </div>
      </div>
      <div
        class="box"
        v-show="isShow == 1"
        v-for="(item, index) in send"
        :key="item.id"
      >
        <div class="left" v-if="item.isDeleted == false">
          <img :src="item.goodsImgUrl.split('--**--')[0]" />
        </div>
        <div class="right" v-if="item.isDeleted == false">
          <p class="title">{{ item.goodsName }}</p>
          <p class="des">{{ item.goodsDescription }}</p>
          <div class="price">
            <span class="red">￥{{ item.goodsPrice }}</span>
            <img
              v-show="show"
              class="del"
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/delete.png"
              @click="showzzc(item.goodsId, index)"
            />
            <!-- <div class="com">
            <img
              class="icon"
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/cc-message.png"
            />
            <p class="mes">0</p>
          </div> -->
          </div>
        </div>
      </div>
      <div class="box" v-show="isShow == 2" v-for="item in buy" :key="item.id">
        <div class="left">
          <!-- <img src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/3.jpg" /> -->
        </div>
        <div class="right">
          <p class="title">订单号：{{ item.orderId }}</p>
          <p class="title">商品名：{{ item.goodsName }}</p>
          <p class="des">{{ item.goodsDescription }}</p>
          <p class="des">卖家：{{ item.goodsSeller }}</p>
          <div class="price">
            <span class="red"> ￥{{ item.goodsPrice }}</span>
            <span class="right"> {{ item.orderCreateTime }}</span>
          </div>
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
        @click="gotoDetail(item.userId)"
      >
        <div class="left">
          <img :src="item.goodsImgUrl.split('--**--')[0]" />
        </div>
        <div
          class="solder"
          v-show="ifDelete[index] ==true"
        >
          <img src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/0ac2e928674ff8e5bd0c0a9c00542b3f.png" />
        </div>
        <div class="right">
          <p class="title">{{ item.goodsName }}</p>
          <p class="des">{{ item.goodsDescription }}</p>
          <p class="price">￥{{ item.goodsPrice }}</p>
        </div>
      </div>
      <div class="send" v-show="show">
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
      path: "/personal/",
      isShow: 1,
      show: true,
      user: JSON.parse(localStorage.getItem("FleaUser")),
      path1: JSON.parse(localStorage.getItem("path1")),
      page: JSON.parse(localStorage.getItem("page")),
      pageCount: JSON.parse(localStorage.getItem("count")),
      list: [],
      count: 100,
      send: [],
      like: [],
      buy: [],
      zzc: false,
      zzc1: false,
      goodsId: 0,
      deleteCount: 0,
      xiabiao: 0,
      ifDelete: []
    };
  },
  components: {},
  created() {
    this.ifUser();
    this.getUserInfor();
    this.getSend();
    this.getLike();
    this.getBuy();
  },
  mounted() {},
  methods: {
    backTo() {
      this.$router.push("/fleaMy");
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
    },
    showzzc(id, index) {
      this.zzc = true;
      this.goodsId = id;
      this.xiabiao = index;
      // console.log(id);
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
      // for (let i = 0; i < this.send.length; i++) {
      //   if (this.send[i].isDeleted == true) {
      //     this.deleteCount += 1;
      //   }
      // }
      // console.log(this.send);
    },
    async getBuy() {
      let id = this.$route.params.id;
      this.url = this.GLOBAL.baseUrl + "/flea/users/orders";
      this.data = {
        currentPage: 1,
        pageSize: this.count,
        pkFleaUserId: id
      };
      this.buy = (await API.init(this.url, this.data, "post")).data.content;
      // console.log(this.buy);
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
      for (let i = 0; i < this.like.length; i++) {
        this.getIfDelete(this.like[i].userId, i);
        // console.log(this.like[i].goodsId);
      }
    },
    gotoDetail(id) {
      let now = this.path + this.user.pkFleaUserId;
      localStorage.setItem("path", JSON.stringify(now));
      this.$router.push({
        path: `/commoditydetails/${id}`
      });
      this.page[this.pageCount] = id;
      this.pageCount++;
      localStorage.setItem("page", JSON.stringify(this.page));
      localStorage.setItem("count", JSON.stringify(this.pageCount));
      // this.getList();
      // window.location.reload();
      // this.backTop();
    },
    async deleteSend() {
      this.zzc = false;
      this.zzc1 = true;
      this.url = this.GLOBAL.baseUrl + "/flea/goods/delete";
      this.data = {
        // isDeleted: true,
        pkFleaGoodsId: this.goodsId
      };
      this.result = await API.init(this.url, this.data, "post");

      this.send.splice(1, this.xiabiao);
      this.getSend();
      // console.log(this.send.length);

      // console.log(this.result);
    },
    async getIfDelete(id, i) {
      // console.log(id);

      this.url = this.GLOBAL.baseUrl + "/flea/goods/id";
      this.data = {
        // isDeleted: true,
        pkFleaGoodsId: id
      };
      this.likeDetail = (await API.init(this.url, this.data, "post")).data;
      this.ifDelete[i] = this.likeDetail[0].isDeleted;
      console.log(this.ifDelete);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/personal/Personal.scss";
</style>
