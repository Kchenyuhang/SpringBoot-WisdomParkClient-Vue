<template>
  <div class="bg">
    <div class="header">
      <router-link :to="path">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png" />
      </router-link>
      <p>Back</p>
    </div>
    <div class="container">
      <div class="card">
        <div class="head">
          <img src="https://kxingchen.oss-cn-shanghai.aliyuncs.com/develop/yhChen171427.jpg" />
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
            <img :src="list[0].goodsImgUrl" />
          </div>
        </div>
        <div class="like">
          <div class="head">
            <div class="pos">
              <img src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/like.png" />
              <span>猜你喜欢</span>
            </div>
          </div>
          <div class="r-list">
            <div
              class="r-left"
              v-for="(item, index) in splist"
              :key="index"
            >
              <div
                class="r-left-con"
                @click="gotoDetail(item.pkFleaGoodsId)"
              >
                <img :src="item.goodsImgUrl" />
                <span>{{ item.goodsDescription }}</span>
                <p>$ {{ item.goodsPrice }}</p>
                <div class="r-right">
                  <div class="img-box">
                    <img
                      src="https://kxingchen.oss-cn-shanghai.aliyuncs.com/develop/yhChen171427.jpg"
                      alt=""
                    />
                  </div>
                  <p>{{ item.nickname }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom"></div>
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
      splist: [
        // {
        //   nickname: "",
        //   goodsCreateTime: "",
        //   goodsDescription: "",
        //   goodsImgUrl: ""
        // }
      ],
      //   likeList: [
      //     {
      //       nickname: "",
      //       goodsCreateTime: "",
      //       goodsDescription: "",
      //       goodsImgUrl: ""
      //     }
      //   ],
      path: JSON.parse(localStorage.getItem("path")),
      data: {
        pkFleaGoodsId: ""
      },
      spdata: {
        currentPage: 0,
        pageSize: 100
      }
    };
  },
  components: {},
  created() {
    this.getList();
    this.getSpList();
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    async getList() {
      let id = this.$route.params.id;
      this.data.pkFleaGoodsId = id;
      console.log(this.data.pkFleaGoodsId);
      this.url = "http://101.37.31.188:8080/flea/goods/id";
      this.list = (await API.init(this.url, this.data, "post")).data;
      //   this.likeList = (await API.init(this.url, this.data, "post")).data;
      //   console.log(this.list);
    },
    gotoDetail(id) {
      this.backTop();
      localStorage.setItem("path", JSON.stringify(this.path));
      this.$router.push({
        path: `/commoditydetails/${id}`
      });
      this.getList();
    },
    async getSpList() {
      this.url = "http://101.37.31.188:8080/flea/goods/all";
      this.splist = (await API.init(this.url, this.spdata, "post")).data;
      console.log(this.splist);
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
