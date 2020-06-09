<template>
  <transition :name="transitionName">
    <div class="address1">
      <div class="cc-col-center">
        <p class="title">首页</p>
      </div>
      <Carousel :slideList="slideList"></Carousel>
      <div class="cc-df">
        <div
          class="cc-col-center cc-coll-3"
          @click="into(1)"
        >
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_kechengbiao.png"
            alt="课程表图标"
            class="icon"
          />
          <p class="cc-mtop font-size">课程表</p>
        </div>
        <div
          class="cc-col-center cc-coll-3 address2"
          @click="into(2)"
        >
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_kaowuchaxun.png"
            alt="考务查询图标"
            class="icon"
          />
          <p class="cc-mtop font-size">考务查询</p>
        </div>
        <div
          class="cc-col-center cc-coll-3 address2"
          @click="into(3)"
        >
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_tushuguan.png"
            alt="图书馆图标"
            class="icon"
          />
          <p class="cc-mtop font-size">图书馆</p>
        </div>
        <div
          class="cc-col-center cc-coll-3 address2"
          @click="into(4)"
        >
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_xiaoyuankachongzhi.png"
            alt="一卡通图标"
            class="icon"
          />
          <p class="cc-mtop font-size">一卡通</p>
        </div>
      </div>
      <hr class="line" />
      <div class="address">
        <p class="fontSize">我的课程</p>
        <div class="cc-df cc-mtop lateral-sliding">
          <div
            v-for="item in 3"
            :key="item.id"
          >
            <div
              class="subject-card"
              v-bind:style="{ backgroundImage: 'url(' + avatar + ')' }"
            >
              <p class="fontSizeTitle">微信小程序</p>
              <p class="fontSizebody1">1-2节</p>
              <div class="cc-df">
                <p class="fontSizebody">教四</p>
                <p class="fontSizebody cc-mleft">402</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="line" />
      <div class="address">
        <p class="fontSize">热门资讯</p>
        <div class="cc-col">
          <div
            class="cc-mtop"
            v-for="(item, index) in result"
            :key="index"
          >
            <div
              class="left"
              v-bind:style="{ backgroundImage: 'url(' + item.cover + ')' }"
            ></div>
            <div class="right cc-col">
              <p>{{ item.text.slice(0, 35) }}...</p>
              <p class="date">{{ item.gmtCreate.slice(0, 10) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
const API = require("../../request/api.js");
export default {
  name: "Index",
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
        }
      ],
      data: {
        currentPage: 1,
        field: {},
        pageSize: 3
      },
      result: [],
      transitionName: this.$store.state.transitionName,
      avatar: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bj1.png"
    };
  },
  components: {
    Carousel: require("../../components/Carousel").default
  },
  created() {
    this.getList();
  },
  mounted() {},
  methods: {
    into(index) {
      if (index == 1) {
        this.$router.push("/schedule");
      }
      if (index == 2) {
        this.$router.push("/exam");
      }
      if (index == 3) {
        this.$router.push("/library");
      }
      if (index == 4) {
        this.$router.push("/metrocard");
      }
    },
    async getList() {
      this.url = this.GLOBAL.baseUrl + "/info/isTap";
      this.result = (await API.init(this.url, this.data, "post")).data;
      for (let i = 0; i < this.result.length; i++) {
        this.slideList[i].image = this.result[i].cover;
      }
      console.log(this.result);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/index.scss";
</style>
