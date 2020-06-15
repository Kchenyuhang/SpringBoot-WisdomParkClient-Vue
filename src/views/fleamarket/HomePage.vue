<template>
  <div>
    <div class="container">
      <div class="header">
        <router-link to="/layout">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
            alt=""
          />
        </router-link>
        <router-link to="/search">
          <input type="text " placeholder="请输入您要搜索的内容..." />
        </router-link>
        <router-link to="/list">
          <img src="../../assets/images/更多.png" alt="" class="imgs" />
        </router-link>
      </div>
      <Carousel :slideList="slideList"></Carousel>
      <div class="list">
        <div class="con" v-for="(item, index) in slideList" :key="index">
          <div @click="goListDetail(item.pkFleaTypeId)">
            <img :src="item.img" />
            <h5>
              宠物
            </h5>
          </div>
        </div>
      </div>
    </div>
    <div class="inform">
      <div class="right" v-for="(item, index) in reward" :key="index">
        <img :src="item.imageUrl" />
        <div class="left">
          <!-- 商品描述 -->
          <h3>{{ item.title }}</h3>
          <!-- 价格 -->
          <span>{{ item.description }}</span>
        </div>
      </div>
    </div>
    <!-- 悬赏 -->
    <div class="reward">
      <Carousel :slideList="slideList" class="ward"></Carousel>
    </div>
    <!-- 发布信息 -->
    <div class="release">
      <div class="footer" v-for="(item, index) in list" :key="index">
        <div class="goods">
          <img :src="item.userAvatar" alt="" />
          <span>{{ item.username }}</span>
          <p>¥ {{ item.goodsPrice }}</p>
        </div>
        <div class="pic">
          <img :src="item.goodsImgUrl" />
          <p>{{ item.goodsDescription }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const API = require("../../request/api.js");
export default {
  name: "Reward",
  data() {
    return {
      reward: [],
      list: [],
      type: [],
      data: {
        currentPage: 1,
        field: 4,
        pageSize: 4
      },
      slideList: [
        {
          url: "#",
          pkFleaTypeId: "7",
          description: "one",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg",
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfqyllenrej306s05qdfp.jpg"
        },
        {
          url: "#",
          pkFleaTypeId: "9",
          description: "two",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/2.jpg",
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfqypwycczj308u04f749.jpg"
        },
        {
          url: "#",
          pkFleaTypeId: "3",
          description: "three",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/3.jpg",
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfqyqle5n3j309q09qjro.jpg"
        },
        {
          url: "#",
          pkFleaTypeId: "4",
          description: "three",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/3.jpg",
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfqyqxjycdj308u04f747.jpg"
        }
      ]
    };
  },
  components: {
    Carousel: require("../../components/Carousel.vue").default
  },
  created() {
    this.getTopReward();
    this.getGodList();
    // this.getAllType();
  },
  mounted() {},
  methods: {
    async getTopReward() {
      this.url = this.GLOBAL.baseUrl + "/flea/reward/top";
      this.reward = (await API.init(this.url, this.data, "post")).data;
      console.log(this.reward);
    },
    async getGodList() {
      this.url = this.GLOBAL.baseUrl + "/flea/goods/all";
      this.list = (await API.init(this.url, this.data, "post")).data;
      console.log(this.list);
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
</style>
