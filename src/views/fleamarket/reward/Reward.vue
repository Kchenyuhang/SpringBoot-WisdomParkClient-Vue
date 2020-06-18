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
        <div
          class="left"
          v-for="(item, index) in reward"
          :key="index"
          @click="gotoDetail(item.pkRewardId)"
        >
          <div>
            <img
              :src="item.imageUrl"
              alt=""
            /> <span>{{ item.title }}</span>
            <p>{{ item.description.slice(0, 30) }}...</p>

            <p>¥价格</p>
            <div class="right">
              <img
                :src="item.fleaUser.avatar"
                alt=""
              />
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
      this.data = {
        currentPage: 0,
        // field: 2,
        pageSize: 10
      };
      this.reward = (await API.init(this.url, this.data, "post")).data.content;
      for (let i = 0; i < this.reward.length; i++) {
        this.test[i] = this.reward[i].fleaUser;
        // console.log(this.test);
      }
      // console.log(this.reward);
    },
    gotoDetail(id) {
      this.$router.push({
        path: `/rewarddetail/${id}`
      });
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
  height: auto;
}
.list {
  height: auto;
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  justify-content: space-between;
}
.left {
  height: auto;
  width: 45%;
  // margin-left: 18px;
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
