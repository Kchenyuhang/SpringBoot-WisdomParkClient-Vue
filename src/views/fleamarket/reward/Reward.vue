<template>
  <div>
    <div class="container">
      <div class="header">
        <!-- <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        /> -->
        <p>悬赏</p>
      </div>
      <div class="recomond">
        <Carousel :slideList="slideList"></Carousel>
      </div>
      <div class="list">
        <div
          class="card"
          v-for="(item, index) in reward"
          :key="index"
          @click="gotoDetail(item.pkRewardId)"
        >
          <div>
            <div class="img">
              <img :src="item.imageUrl" alt="" />
            </div>
            <div class="right">
              <span>{{ item.title.slice(0,6) }}</span>
              <p class="mt-10">{{ item.description.slice(0, 8) }}...</p>
              <div class="info">
                <img :src="item.fleaUser.avatar" alt="" />
                <p>{{ item.fleaUser.nickname }}</p>
              </div>
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
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg",
        },
        {
          url: "#",
          description: "two",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/2.jpg",
        },
        {
          url: "#",
          description: "three",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/3.jpg",
        },
        {
          url: "#",
          description: "three",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/3.jpg",
        },
      ],
    };
  },
  components: {
    Carousel: require("../../../components/Carousel.vue").default,
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
        pageSize: 10,
      };
      this.reward = (await API.init(this.url, this.data, "post")).data.content;
      for (let i = 0; i < this.reward.length; i++) {
        this.test[i] = this.reward[i].fleaUser;
      }
      console.log(this.test);
    },
    gotoDetail(id) {
      this.$router.push({
        path: `/rewarddetail/${id}`,
      });
    },
  },
  computed: {},
  watch: {},
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/reward.scss";
</style>
