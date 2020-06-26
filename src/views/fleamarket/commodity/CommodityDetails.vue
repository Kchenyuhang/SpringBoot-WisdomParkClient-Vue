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
    <div class="solder" v-show="list[0].isDeleted == true">
      <img
        src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/0ac2e928674ff8e5bd0c0a9c00542b3f.png"
      />
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
          <div
            class="img"
            v-for="(item, index) in list[0].goodsImgUrl.split('--**--')"
            :key="index"
          >
            <img :src="list[0].goodsImgUrl.split('--**--')[index]" />
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
                <span>{{ item.goodsDescription.slice(0, 9) }}</span>
                <p class="price">¥ {{ item.goodsPrice }}</p>
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
          src="http://ww1.sinaimg.cn/large/0064QvQTly1gfw77tsfzej30jg0jg0t5.jpg"
        />
        <p>收藏</p>
      </div>
      <div
        class="collect"
        v-show="!like"
        @click="unlike(list[0].pkFleaGoodsId, user.pkFleaUserId)"
      >
        <img
          src="http://ww1.sinaimg.cn/large/0064QvQTly1gfw77dim76j30jg0jggm1.jpg"
        />

        <p>取消</p>
      </div>
      <div v-show="list[0].isDeleted != true">
        <router-link to="/pay">
          <div class="want" v-show="list[0].pkFleaUserId != user.pkFleaUserId">
            <p class="btn">我想要</p>
          </div>
        </router-link>
        <div class="want" v-show="list[0].pkFleaUserId == user.pkFleaUserId">
          <p class="btn none">我的商品</p>
        </div>
      </div>
      <div v-show="list[0].isDeleted == true">
        <div class="want">
          <p class="btn none">已卖出</p>
        </div>
      </div>
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
      lastPath: JSON.parse(localStorage.getItem("path")),
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
      count: JSON.parse(localStorage.getItem("count")),
      page: 0,
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
    this.AddComment();
    this.backTop();
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
    async AddComment() {
      this.url = this.GLOBAL.baseUrl + "/flea/comment/increased";
      this.data = {
        comment: "我是",
        reviewerId: 1,
        rewardId: 1,
        userId: 1
      };
      await API.init(this.url, this.data, "post");
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
        // console.log(this.result[i].userId == this.$route.params.id);

        if (this.result[i].userId == this.$route.params.id) {
          this.like = false;
          i = this.result.length;
        } else this.like = true;
      }
    },
    backUp() {
      this.lastPath.splice(this.lastPath.length - 1, 1);
      console.log(this.lastPath);
      this.$router.push(this.lastPath[this.lastPath.length - 1]);
      localStorage.setItem("path", JSON.stringify(this.lastPath));
      this.getList();
    },
    async getList() {
      let id = this.$route.params.id;
      this.data.pkFleaGoodsId = id;
      this.url = this.GLOBAL.baseUrl + "/flea/goods/id";
      this.list = (await API.init(this.url, this.data, "post")).data;
      // console.log(this.list[0].goodsImgUrl.split("--**--"));
      this.page = id;
      localStorage.setItem("page", JSON.stringify(this.page));
      this.getLikeList(this.list[0].pkFleaTypeId, id);
    },
    gotoDetail(id) {
      this.lastPath[this.lastPath.length] = this.path1 + id;
      localStorage.setItem("path", JSON.stringify(this.lastPath));
      this.$router.push({
        path: `/commoditydetails/${id}`
      });
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
      this.lastPath[this.lastPath.length] = "/personal/" + id;
      localStorage.setItem("path", JSON.stringify(this.lastPath));
    },
    backTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/commodity/CommodityDetails.scss";
.price {
  margin-top: 13px;
}
</style>
