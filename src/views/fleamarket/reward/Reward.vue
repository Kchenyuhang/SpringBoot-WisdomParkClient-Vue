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
        <p>悬赏</p>
      </div>
      <div class="recomond">
        <Carousel :slideList="slideList"></Carousel>
      </div>
      <div class="list">
        <div class="left" v-for="(item, index) in reward" :key="index">
          <div>
            <img :src="item.imageUrl" alt="" />
            <p>{{ item.description }}</p>
            <span>{{ item.title }}</span>
            <p>¥价格</p>
            <div class="right" v-for="(item, index) in test" :key="index">
              <!-- <img :src="item.avatar" alt="" /> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const API = require("../../../request/api.js");
export default {
  name: "Reward",
  data() {
    return {
      test: [],
      reward: [],
      data: {
        currentPage: 1,
        field: 2,
        pageSize: 6
      },
      slideList: [
        {
          url: "#",
          description: "one",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg"
        },
        {
          url: "#",
          description: "two",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/2.jpg"
        },
        {
          url: "#",
          description: "three",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/3.jpg"
        },
        {
          url: "#",
          description: "three",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/3.jpg"
        }
      ]
    };
  },
  components: {
    Carousel: require("../../../components/Carousel.vue").default
  },
  created() {
    this.getReward();
  },
  mounted() {},
  methods: {
    async getReward() {
      this.url = this.GLOBAL.baseUrl + "/flea/reward/all";
      this.reward = (await API.init(this.url, this.data, "post")).data.content;
      for (let i = 0; i < this.reward.length; i++) {
        this.test = this.reward[i].fleaUser;
        console.log(this.test);
      }
      console.log(this.reward);
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/reward.scss";
.container {
  padding: 0;
  height: 1000px;
}
.list {
  height: 1000px;
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-wrap: wrap;
}
.left {
  height: 230px;
  width: 47%;
  margin-left: 8px;
  margin-top: 40px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
}
.left img {
  height: 100px;
  border-radius: 10px;
}
.right img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-top: 30px;
  margin-left: 10px;
}
.right p {
  float: right;
  margin-right: 60px;
  margin-top: 34px;
}
.recomond {
  width: 90%;
  margin-left: 20px;
}
</style>
