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
        <div class="left" v-for="(item, index) in slideList" :key="index">
          <div>
            <img :src="item.image" alt="" />
            <p>#标签#</p>
            <span>标题</span>
            <p>¥价格</p>
            <div class="right">
              <img :src="item.image" alt="" />
              <p>名称</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Reward",
  data() {
    return {
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
    Carousel: require("../../components/Carousel").default
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/fleamarket/reward.scss";
.container {
  padding: 0;
  height: 1000px;
}
.list {
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
