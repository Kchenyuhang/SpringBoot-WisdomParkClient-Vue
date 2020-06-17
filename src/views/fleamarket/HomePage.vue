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
      <div class="cc-df">
        <div
          class="cc-col-center cc-coll-3 address2"
          v-for="(item, index) in slideList"
          :key="index"
        >
          <div @click="goListDetail(item.pkFleaTypeId)">
            <img :src="item.img" class="icon" />
            <p class="cc-mtop font-size">{{ item.sub }}</p>
            <!-- <h5>
              宠物
            </h5> -->
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
          <h3>{{ item.goodsName }}</h3>
          <!-- 价格 -->
          <span>¥{{ item.goodsPrice }}</span>
        </div>
      </div>
    </div>
    <!-- 悬赏 -->
    <!-- <div class="reward">
      <Carousel :slideList="slideList" class="ward"></Carousel>
    </div> -->
    <!-- 发布信息 -->
    <div class="release">
      <div
        class="footer"
        v-for="item in list"
        :key="item.pkFleaGoodsId"
        @click="gotoDetail(item.pkFleaGoodsId)"
      >
        <div class="goods">
          <img :src="item.userAvatar" alt="" />
          <span>{{ item.username }}</span>
          <p>¥ {{ item.goodsPrice }}</p>
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
      path: "/homePage",
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
        pageSize: 4
      },
      slideList: [
        {
          url: "#",
          pkFleaTypeId: "7",
          sub: "文具",
          description: "one",
          name: "宠物",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg",
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gftd623nrij30jg0jg3zq.jpg"
        },
        {
          url: "#",
          pkFleaTypeId: "9",
          sub: "游戏",
          description: "two",
          name: "手机数码",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/2.jpg",
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gftd3wn5m8j3046046dfq.jpg"
        },
        {
          url: "#",
          pkFleaTypeId: "3",
          sub: "衣服",
          description: "three",
          name: "游戏交易",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/3.jpg",
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gftcvo32gzj30b40b474o.jpg"
        },
        {
          url: "#",
          pkFleaTypeId: "4",
          sub: "数码",
          description: "three",
          name: "女装",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/3.jpg",
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gftcyt7vj1j30go0got9d.jpg"
        }
      ],
      id: "1"
    };
  },
  components: {
    Carousel: require("../../components/Carousel.vue").default
  },
  created() {
    this.getTopReward();
    this.getGodList();
    this.getList();
    this.reInto();
    this.getHotList();
    localStorage.setItem("path", JSON.stringify(this.path));
    // this.getAllType();
  },
  mounted() {},
  methods: {
    async getList() {
      this.url = this.GLOBAL.baseUrl + "/flea/goods/all";
      this.data = {
        currentPage: 0,
        pageSize: 4
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
        pageSize: 100
      };
      this.hotList = (await API.init(this.url, this.data, "post")).data;
      // this.count = this.list.length - 4;
      // this.list.splice(0, this.count);
      // console.log(this.list);
    },
    gotoDetail(id) {
      this.page[this.count++] = id;
      localStorage.setItem("page", JSON.stringify(this.page));
      localStorage.setItem("count", JSON.stringify(this.count));

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

      localStorage.setItem("FleaUser", JSON.stringify(this.user));
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
    goListDetail(id) {
      this.$router.push({
        path: `/listDetail/${id}`
      });
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/fleamarket/HomePage.scss";
.icon {
  height: 55px;
  width: 55px;
  margin-top: 20px;
}
.cc-df {
  margin-top: 10px;
  background-color: white;
}
.cc-df p {
  margin-left: 12px;
  margin-top: -3px;
}
</style>
