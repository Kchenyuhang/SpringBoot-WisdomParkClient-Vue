<template>
  <transition :name="transitionName">
    <div class="address1">
      <div class="cc-col-center">
        <p class="title">首页</p>
      </div>
      <Carousel :slideList="slideList"></Carousel>
      <div class="cc-df">
        <div class="cc-col-center cc-coll-3">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_kechengbiao.png"
            alt="课程表图标"
            class="icon"
          />
          <p class="cc-mtop font-size">课程表</p>
        </div>
        <div class="cc-col-center cc-coll-3">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_kaowuchaxun.png"
            alt="考务查询图标"
            class="icon"
          />
          <p class="cc-mtop font-size">考务查询</p>
        </div>
        <div class="cc-col-center cc-coll-3">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_tushuguan.png"
            alt="图书馆图标"
            class="icon"
          />
          <p class="cc-mtop font-size">图书馆</p>
        </div>
        <div class="cc-col-center cc-coll-3">
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
          <div v-for="item in 3" :key="item.id">
            <div class="subject-card" v-bind:style="{backgroundImage:'url(' + avatar + ')'}">
              <p class=" fontSizeTitle">微信小程序</p>
              <p class=" fontSizebody1">1-2节</p>
              <div class="cc-df">
                <p class=" fontSizebody">教四</p>
                <p class=" fontSizebody cc-mleft">402</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="line" />
      <div class="address">
        <p class="fontSize">热门资讯</p>
        <div class="cc-col">
          <div class="cc-mtop" v-for="item in 3" :key="item.id">
            <div class="left" v-bind:style="{backgroundImage:'url(' + avatar + ')'}"></div>
            <div class="right cc-col">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      slideList: [
        {
          url: "#",
          description: "one",
          image:
            "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/lunbo1.jpeg"
        },
        {
          url: "#",
          description: "two",
          image:
            "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/lunbo2.jpg"
        },
        {
          url: "#",
          description: "three",
          image:
            "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/lunbo3.jpg"
        }
      ],
      transitionName: this.$store.state.transitionName,
      avatar:"https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bj1.png"
    };
  },
  components: {
    Carousel: require("../../components/Carousel").default
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.address {
  margin-left: 5%;
}
.address1{
  position: absolute;
  width: 100%;
  margin-bottom: 100px;
  background-color: white;
}
.title {
  font-size: 18px;
  font-weight: 550;
  letter-spacing: 3px;
  margin-top: 10px;
}

.icon {
  margin-top: 25px;
  width: 55%;
  height: 50%;
}

.line {
  width: 90%;
  margin-top: 15px;
  border: none;
  height: 1px;
  background: #ececec;
  margin-bottom: 10px;
}

.font-size {
  font-size: 12px;
  color: #979797;
}
.fontSize {
  font-size: 13px;
  color: #5e5e5e;
  font-weight: 550;
}

.subject-card {
  width: 130px;
  height: 80px;
  border-radius: 5px;
  margin-right: 30px;
  padding-left: 5px;
  padding-top: 3px;
  background-size: cover;
}

.lateral-sliding {
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
}

.fontSizeTitle{
  font-size: 15px;
  color: #a2c3ff;
}

.fontSizebody{
  font-size: 1px;
  color: #a2c3ff;
}

.fontSizebody1{
  font-size: 1px;
  color: #a2c3ff;
  margin-top: 10px;
  margin-bottom: 10px;
}

.left{
  width: 100px;
  height: 80px;
}
</style>
