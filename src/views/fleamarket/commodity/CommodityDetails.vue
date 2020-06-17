<template>
  <div class="bg">
    <div class="header">
      <!-- <router-link :to="path"> -->
      <img
        src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
        @click="backUp()"
      />
      <!-- </router-link> -->
      <p>商品详情</p>
    </div>
    <div class="container">
      <div class="card">
        <div class="head">
          <img
            :src="list[0].userAvatar"
            @click="gotoUserDetail(list[0].pkFleaUserId)"
          />
          <div class="word">
            <p class="title">{{ list[0].nickname }}</p>
            <p class="date">{{ list[0].goodsCreateTime }}</p>
          </div>
        </div>
        <hr />
        <div class="des">
          <div class="inform">
            <p class="price">￥{{ list[0].goodsPrice }}</p>
            <p class="name">{{ list[0].goodsName }}</p>
            <p class="desc">{{ list[0].goodsDescription }}</p>
          </div>
          <div class="img">
            <img :src="list[0].goodsImgUrl.split('--**--')[0]" />
          </div>
        </div>
        <div class="like">
          <div class="head">
            <div class="pos">
              <img
                src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/like.png"
              />
              <span>猜你喜欢</span>
            </div>
          </div>
          <div class="r-list">
            <div class="r-left" v-for="(item, index) in likeList" :key="index">
              <div class="r-left-con" @click="gotoDetail(item.pkFleaGoodsId)">
                <img :src="item.goodsImgUrl.split('--**--')[0]" />
                <span>{{ item.goodsDescription }}</span>
                <p>$ {{ item.goodsPrice }}</p>
                <div class="r-right">
                  <div class="img-box">
                    <img :src="item.userAvatar" alt="" />
                  </div>
                  <p>{{ item.nickname }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="home" @click="gotoUserDetail(list[0].pkFleaUserId)">
        <img
          src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/shop.png"
        />
        <p>商家主页</p>
      </div>
      <div
        class="collect"
        v-show="like"
        @click="dolike(list[0].pkFleaGoodsId, user.pkFleaUserId)"
      >
        <img
          src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/star.png"
        />
        <p>收藏</p>
      </div>
      <div
        class="collect"
        v-show="!like"
        @click="unlike(list[0].pkFleaGoodsId, user.pkFleaUserId)"
      >
        <img
          src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/Star.png"
        />

        <p>取消收藏</p>
      </div>
      <router-link to="/pay">
        <div class="want">
          <p class="btn">我想要</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
const API = require("../../../request/api.js");
export default {
  name: "CommodityDetails",
  data() {
    return {
      // path: [],
      list: [
        {
          nickname: "",
          goodsCreateTime: "",
          goodsDescription: "",
          goodsImgUrl: ""
        }
      ],
      splist: [],
      likeList: [],
      path: JSON.parse(localStorage.getItem("path")),
      path1: "/commoditydetails/",
      data: {
        pkFleaGoodsId: ""
      },
      spdata: {
        currentPage: 0,
        pageSize: 100
      },
      likeData: {
        currentPage: 0,
        pageSize: 100,
        typeId: 0
      },
      page: JSON.parse(localStorage.getItem("page")),
      count: JSON.parse(localStorage.getItem("count")),
      user: JSON.parse(localStorage.getItem("FleaUser")),
      like: true
    };
  },
  components: {},
  watch: {
    $route: function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  created() {
    this.getList();
    this.getSpList();
    this.iflike();
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    async dolike(gId, uId) {
      this.url = this.GLOBAL.baseUrl + "/flea/collection/increased";
      this.data = {
        goodsId: gId,
        userId: uId
      };
      await API.init(this.url, this.data, "post");
      this.like = false;
    },
    async unlike(gId, uId) {
      this.url = this.GLOBAL.baseUrl + "/flea/collection/deleted";
      this.data = {
        goodsId: gId,
        userId: uId
      };
      await API.init(this.url, this.data, "post");
      this.like = true;
    },
    async iflike() {
      this.url = this.GLOBAL.baseUrl + "/flea/collection/all";
      this.data = {
        currentPage: 1,
        pageSize: 100,
        pkFleaUserId: this.user.pkFleaUserId
      };
      this.result = (await API.init(this.url, this.data, "post")).data;
      // this.like = true;
      // console.log(this.result[4].goodsId);
      // console.log(this.list[0].pkFleaGoodsId);
      for (let i = 0; i < this.result.length; i++) {
        // console.log(this.result[i].userId);
        // console.log(this.$route.params.id);
        console.log(this.result[i].userId == this.$route.params.id);

        if (this.result[i].userId == this.$route.params.id) {
          this.like = false;
          i = this.result.length;
        } else this.like = true;
      }
    },
    backUp() {
      if (this.count <= 1) {
        this.count = 0;
        localStorage.setItem("count", JSON.stringify(this.count));

        // alert(this.path);
        this.$router.push(this.path);
      } else {
        let count = this.page[this.count - 2];
        this.$router.push({
          path: `/commoditydetails/${count}`
        });
        --this.count;
        localStorage.setItem("count", JSON.stringify(this.count));
        window.location.reload();
      }
    },
    async getList() {
      let id = this.$route.params.id;
      this.data.pkFleaGoodsId = id;
      this.path1 = this.path1 + id;
      localStorage.setItem("path1", JSON.stringify(this.path1));
      this.url = this.GLOBAL.baseUrl + "/flea/goods/id";
      this.list = (await API.init(this.url, this.data, "post")).data;
      console.log(this.list);

      this.getLikeList(this.list[0].pkFleaTypeId, id);
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
    },
    async getSpList() {
      this.url = this.GLOBAL.baseUrl + "/flea/goods/all";
      this.splist = (await API.init(this.url, this.spdata, "post")).data;
      // console.log(this.splist);
    },
    async getLikeList(id, goodsId) {
      this.url = this.GLOBAL.baseUrl + "/flea/goods/type";
      this.likeData.typeId = id;
      this.likeList = (await API.init(this.url, this.likeData, "post")).data;
      for (let i = 0; i < this.likeList.length; i++) {
        if (goodsId == this.likeList[i].pkFleaGoodsId) {
          this.likeList.splice(i, 1);
          // console.log(this.likeList);
        }
      }
    },
    gotoUserDetail(id) {
      this.$router.push({
        path: `/personal/${id}`
      });
    },
    backTop() {
      // const that = this;
      // let timer = setInterval(() => {
      //   let ispeed = Math.floor(-that.scrollTop / 5);
      //   document.documentElement.scrollTop = document.body.scrollTop =
      //     that.scrollTop + ispeed;
      //   if (that.scrollTop === 0) {
      //     clearInterval(timer);
      //   }
      // }, 16);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    // 为了计算距离顶部的高度，当高度大于60显示回顶部图标，小于60则隐藏
    // scrollToTop() {
    //   const that = this;
    //   let scrollTop =
    //     window.pageYOffset ||
    //     document.documentElement.scrollTop ||
    //     document.body.scrollTop;
    //   that.scrollTop = scrollTop;
    //   if (that.scrollTop > 0) {
    //     that.btnFlag = true;
    //   } else {
    //     that.btnFlag = false;
    //   }
    // }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/commodity/CommodityDetails.scss";
</style>
