<template>
  <div class="bg">
    <div class="container">
      <div class="header">
        <router-link to="/layout">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
            alt=""
          />
        </router-link>
        <input
          type="text "
          placeholder="请输入您要搜索的内容..."
          @click="gotoSearch(id)"
        />
        <router-link to="/list">
          <img src="../../assets/images/更多.png" alt="" class="imgs" />
        </router-link>
      </div>
      <Carousel :slideList="slideList"></Carousel>
      <!-- 首页四个分类 -->
      <div class="cc-df">
        <div
          class="cc-col-center cc-coll-3 address2"
          v-for="(item, index) in slideList"
          :key="index"
        >
          <div @click="goListDetail(item.pkFleaTypeId, item.name)">
            <img :src="item.img" class="icon" />
            <p class="cc-mtop font-size">{{ item.sub }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="inform">
      <div
        class="right"
        v-for="item in list"
        :key="item.pkFleaGoodsId"
        @click="gotoDetail(item.pkFleaGoodsId)"
      >
        <img :src="item.goodsImgUrl.split('--**--')[0]" />
        <div class="left">
          <!-- 商品描述 -->
          <h3>{{ item.goodsName.slice(0, 10) }}</h3>
          <!-- 价格 -->
          <span>¥{{ item.goodsPrice }}</span>
        </div>
      </div>
    </div>
    <div class="release" @scroll="doload()">
      <div
        class="footer"
        v-for="item in hotList"
        :key="item.pkFleaGoodsId"
        @click="gotoDetail(item.pkFleaGoodsId)"
      >
        <div class="goods">
          <img :src="item.userAvatar" alt="" />
          <span>{{ item.username }}</span>
          <h5>{{ item.goodsCreateTime }}</h5>
          <!-- <p>¥ {{ item.goodsPrice }}</p> -->
        </div>
        <div class="pic">
          <img :src="item.goodsImgUrl.split('--**--')[0]" />
          <p>{{ item.goodsDescription }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const API = require("../../request/api.js");
export default {
  name: "HomePage",
  data() {
    return {
      path: ["/homePage"],
      reward: [],
      list: [],
      page: [],
      users: JSON.parse(localStorage.getItem("user")),
      user: [],
      count: 0,
      type: [],
      hotList: [],
      data: {
        currentPage: 1,
        field: 4,
        pageSize: 6
      },
      slideList: [
        {
          url: "#",
          pkFleaTypeId: "7",
          sub: "文具",
          description: "one",
          name: "文具",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg",
          // 上面四个图标
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTly1gfxa4t8zypj30jg0jg3zb.jpg"
        },
        {
          url: "#",
          pkFleaTypeId: "13",
          sub: "游戏",
          description: "two",
          name: "游戏",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/2.jpg",
          // 上面四个图标
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTly1gfxa54zfyoj30jg0jg0tn.jpg"
        },
        {
          url: "#",
          pkFleaTypeId: "3",
          sub: "衣服",
          description: "three",
          name: "衣服",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/3.jpg",
          // 上面四个图标
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTly1gfxa3xyg8mj30jg0jgq3l.jpg"
        },
        {
          url: "#",
          pkFleaTypeId: "4",
          sub: "数码",
          description: "three",
          name: "数码",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/3.jpg",
          // 上面四个图标
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTly1gfxa4f62waj30jg0jg751.jpg"
        }
      ],
      id: "1",
      num: 5
    };
  },
  components: {
    Carousel: require("../../components/Carousel.vue").default
  },
  created() {
    this.reInto();
    this.getTopReward();
    this.getGodList();
    this.getList();
    this.getHotList();
    localStorage.setItem("path", JSON.stringify(this.path));
    localStorage.setItem("count", JSON.stringify(0));
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
    };
  },
  mounted() {},
  methods: {
    async getList() {
      this.url = this.GLOBAL.baseUrl + "/flea/goods/all";
      this.data = {
        currentPage: 0,
        pageSize: 6
      };
      this.list = (await API.init(this.url, this.data, "post")).data;
      // this.count = this.list.length - 4;
      // this.list.splice(0, this.count);
      // console.log(this.list);
    },
    async getHotList() {
      this.url = this.GLOBAL.baseUrl + "/flea/goods/all";
      this.data = {
        currentPage: 0,
        pageSize: this.num
      };
      this.hotList = (await API.init(this.url, this.data, "post")).data;
      // this.count = this.list.length - 4;
      // this.list.splice(0, this.count);
      // console.log(this.list);
    },
    loadmore() {
      this.num += 5;
      this.getHotList();
    },
    gotoDetail(id) {
      this.path[this.path.length] = "/commoditydetails/" + id;
      localStorage.setItem("path", JSON.stringify(this.path));
      this.$router.push({
        path: `/commoditydetails/${id}`
      });
    },
    gotoSearch() {
      this.$router.push({
        path: "/search"
      });
    },
    async reInto() {
      this.url = this.GLOBAL.baseUrl + "/flea/users/saving";
      this.data = {
        jobNumber: this.users.jobNumber
      };
      this.user = (await API.init(this.url, this.data, "post")).data;
      // console.log(this.user);
      if (this.user == "用户数据添加成功") {
        this.reInto();
      } else localStorage.setItem("FleaUser", JSON.stringify(this.user));
    },
    async getTopReward() {
      this.url = this.GLOBAL.baseUrl + "/flea/reward/top";
      this.reward = (await API.init(this.url, this.data, "post")).data;
      console.log(this.reward);
    },
    async getGodList() {
      this.url = this.GLOBAL.baseUrl + "/flea/goods/all";
      this.data = {
        currentPage: 0,
        pageSize: 6
      };
      this.list = (await API.init(this.url, this.data, "post")).data;
      // this.count = this.list.length - 4;
      // this.list.splice(0, this.count);
      // console.log(this.list);
    },
    getFleaType(subTypes, index, name) {
      localStorage.setItem("ListName", JSON.stringify(name));
      this.typeList = subTypes;
      this.isShow = index;
    },
    goListDetail(id, name) {
      this.path[this.path.length] = "/listDetail/" + id;
      localStorage.setItem("path", JSON.stringify(this.path));
      this.$router.push({
        path: `/listDetail/${id}`
      });
      localStorage.setItem("ListName", JSON.stringify(name));
    },
    handleScroll() {
      //scrollTop为滚动条在Y轴上的滚动距离。
      //clientHeight为内容可视区域的高度。
      //scrollHeight为内容可视区域的高度加上溢出（滚动）的距离。
      console.log(this.$el.scrollTop);
      if (this.$el.scrollTop + this.$el.offsetHeight > this.$el.scrollHeight) {
        this.num += 10;
        this.scloll = true;
        this.getHotList();
      } else {
        this.scloll = false;
      }
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/fleamarket/HomePage.scss";
</style>
