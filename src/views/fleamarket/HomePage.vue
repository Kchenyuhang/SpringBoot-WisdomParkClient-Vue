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
          <img :src="item.img" />
          <h5>{{ item.sub }}</h5>
        </div>
      </div>
    </div>
    <div class="inform">
      <div class="right" v-for="(item, index) in slideList" :key="index">
        <img :src="item.img" />
        <div class="left">
          <!-- 商品描述 -->
          <h3>{{ item.sub }}</h3>
          <!-- 价格 -->
          <span>¥{{ item.description }}</span>
        </div>
      </div>
    </div>
    <!-- 悬赏 -->
    <div class="reward">
      <Carousel :slideList="slideList" class="ward"></Carousel>
    </div>
    <!-- 发布信息 -->
    <div class="release">
      <div class="footer">
        <div class="goods">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg"
            alt=""
          />
          <span>天涯海角</span>
          <p>¥ 125</p>
        </div>
        <div class="pic">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg" />
          <p>小番茄定制2017新款显瘦条纹半生裙高腰纽扣开叉雪纺中长款半裙</p>
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
          sub: "宠物",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg",
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfqyllenrej306s05qdfp.jpg"
        },
        {
          url: "#",
          description: "two",
          sub: "电子",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/2.jpg",
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfqypwycczj308u04f749.jpg"
        },
        {
          url: "#",
          description: "three",
          sub: "游戏",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/3.jpg",
          img:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfqyqle5n3j309q09qjro.jpg"
        },
        {
          url: "#",
          description: "three",
          sub: "衣物",
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
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/fleamarket/HomePage.scss";
</style>
