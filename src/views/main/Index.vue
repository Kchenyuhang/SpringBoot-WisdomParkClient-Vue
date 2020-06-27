<template>
  <transition :name="transitionName">
    <div class="address1">
      <div class="cc-col-center">
        <p class="title">首页</p>
      </div>
      <Carousel :slideList="slideList"></Carousel>
      <div class="cc-df">
        <div class="cc-col-center cc-coll-3" @click="into(1)">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_kechengbiao.png"
            alt="课程表图标"
            class="icon"
          />
          <p class="cc-mtop font-size">课程表</p>
        </div>
        <div class="cc-col-center cc-coll-3 address2" @click="into(2)">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_kaowuchaxun.png"
            alt="考务查询图标"
            class="icon"
          />
          <p class="cc-mtop font-size">考务查询</p>
        </div>

        <div class="cc-col-center cc-coll-3 address2" @click="into(4)">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_xiaoyuankachongzhi.png"
            alt="一卡通图标"
            class="icon"
          />
          <p class="cc-mtop font-size">一卡通</p>
        </div>

        <div class="cc-col-center cc-coll-3 address2" @click="isShow = true">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/gengduo.png"
            alt="更多图标"
            class="icon"
          />
          <p class="cc-mtop font-size">更多</p>
        </div>
      </div>
      <transition name="fold-top">
        <div class="more cc-df cc-donghua-top" v-if="isShow">
          <div class="close" @click="isShow = false">
            <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/cha.png" alt />
          </div>
          <div class="more-row cc-df-warp">
            <div class="cc-col-center cc-coll-3 address2" @click="into(3)">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_tushuguan.png"
                alt="图书馆图标"
                class="icon"
              />
              <p class="cc-mtop font-size">图书馆</p>
            </div>
            <div class="cc-col-center cc-coll-3 address2" @click="into(5)">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/jianzhi1.png"
                alt="兼职图标"
                class="icon"
              />
              <p class="cc-mtop font-size">兼职</p>
            </div>
            <div class="cc-col-center cc-coll-3 address2" @click="into(6)">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/xiaoyouquan1.png"
                alt="校友圈图标"
                class="icon"
              />
              <p class="cc-mtop font-size">校友圈</p>
            </div>

            <div class="cc-col-center cc-coll-3 address2" @click="into(7)">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/paotui.png"
                alt="跑腿图标"
                class="icon"
              />
              <p class="cc-mtop font-size">跑腿</p>
            </div>
            <div class="cc-col-center cc-coll-3 address2" @click="into(8)">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/ershoushichang.png"
                alt="二手市场图标"
                class="icon"
              />
              <p class="cc-mtop font-size">跳蚤市场</p>
            </div>
            <div class="cc-col-center cc-coll-3 address2">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zhinengjiaju.png"
                alt="智能家居图标"
                class="icon"
              />
              <p class="cc-mtop font-size">智能家居</p>
            </div>
            <div class="cc-col-center cc-coll-3 address2">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zhihuikaisuo.png"
                alt="智慧开锁图标"
                class="icon"
              />
              <p class="cc-mtop font-size">智慧开锁</p>
            </div>
            <div class="cc-col-center cc-coll-3 address2">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zhihuianfang.png"
                alt="智慧安防图标"
                class="icon"
              />
              <p class="cc-mtop font-size">智慧安防</p>
            </div>
          </div>
        </div>
      </transition>
      <hr class="line" />
      <div class="address">
        <p class="fontSize">我的课程</p>
        <div class="cc-df cc-mtop lateral-sliding">
          <div v-for="(item, index) in today" :key="index">
            <div
              class="subject-card"
              v-bind:style="{ backgroundImage: 'url(' + bj1 + ')'}"
              v-if="index%2==0"
            >
              <p class="fontSizeTitle">{{ item.subjectName }}</p>
              <p class="fontSizebody1">{{ item.time }}</p>
              <div class="cc-df">
                <p class="fontSizebody">{{ item.towerName }}</p>
                <p class="fontSizebody cc-mleft">{{ item.roomName }}</p>
              </div>
            </div>

            <div
              class="subject-card"
              v-bind:style="{ backgroundImage: 'url(' + bj2 + ')'}"
              v-if="index%2==1"
            >
              <p class="fontSizeTitle">{{ item.subjectName }}</p>
              <p class="fontSizebody1">{{ item.time }}</p>
              <div class="cc-df">
                <p class="fontSizebody">{{ item.towerName }}</p>
                <p class="fontSizebody cc-mleft">{{ item.roomName }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="line" />
      <div class="address">
        <p class="fontSize">热门资讯</p>
        <div class="cc-col">
          <div class="cc-mtop" v-for="(item, index) in infromation" :key="index">
            <div class="cc-df" @click="intoDetail(item.pkInfoManageId)">
              <div class="left" v-bind:style="{ backgroundImage: 'url('+ 'https://images.weserv.nl/?url=' + item.cover + ')' }"></div>
              <div class="right cc-col">
                <div class="right-top">
                  <p>{{ item.title }}</p>
                </div>
                <div class="right-bottom">
                  <p>{{ item.gmtCreate }}</p>
                </div>
              </div>
            </div>

            <hr class="line1" />
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
      todayData: {
        field: 1
      },
      result: [],
      infromation: [],
      user: this.$store.state.user,
      transitionName: this.$store.state.transitionName,
      isShow: false,
      today: [],
      bj1: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bj1.png",
      bj2: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bj2.png"
    };
  },
  components: {
    Carousel: require("../../components/Carousel").default
  },
  created() {
    this.getList();
    this.getToday();
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
      if (index == 5) {
        this.$router.push("/position");
      }
      if (index == 6) {
        this.$router.push("/alumnusindex");
      }
      if (index == 7) {
        this.$router.push("/errandshomepage");
      }
      if (index == 8) {
        this.$router.push("/homePage");
      }
    },
    intoDetail(index) {
      this.$router.push({
        name: "InformationDetail",
        params: { Id: index }
      });
    },
    async getList() {
      this.url = this.GLOBAL.baseUrl + "/info/isTap";
      this.infromation = (await API.init(this.url, this.data, "post")).data;
      console.log(this.infromation);
    },
    async getToday() {
      this.url = this.GLOBAL.baseUrl + "/course/today";
      this.data = {
        field: this.user.clazzId
      };
      this.result = await API.init(this.url, this.data, "post");
      this.today = this.result.data;

      for (let i = 0; i < this.today.length; i++) {
        if (this.today[i].time == 1) {
          this.today[i].time = "1-2";
        }
        if (this.today[i].time == 2) {
          this.today[i].time = "3-4";
        }
        if (this.today[i].time == 3) {
          this.today[i].time = "5-6";
        }
        if (this.today[i].time == 4) {
          this.today[i].time = "7-8";
        }
        if (this.today[i].time == 5) {
          this.today[i].time = "9-10";
        }
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/index.scss";
</style>
