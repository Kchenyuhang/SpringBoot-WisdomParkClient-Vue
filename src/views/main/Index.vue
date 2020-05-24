<template>
<transition :name="transitionName">
  <div style=" position:absolute;width:100%">
    <div class="cc-col-center">
      <p class="title">首页</p>
    </div>
      <Carousel :slideList="slideList"></Carousel>
    
    <div class="cc-df">
      <div class="cc-col-center cc-coll-3">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_kechengbiao.png" alt="课程表图标" class="icon">
        <p class="cc-mtop font-size">课程表</p>
      </div>
      <div class="cc-col-center cc-coll-3">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_kaowuchaxun.png" alt="课程表图标" class="icon">
        <p class="cc-mtop font-size">考务查询</p>
      </div>
      <div class="cc-col-center cc-coll-3">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_tushuguan.png" alt="课程表图标" class="icon">
        <p class="cc-mtop font-size">图书馆</p>
      </div>
      <div class="cc-col-center cc-coll-3">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_xiaoyuankachongzhi.png" alt="课程表图标" class="icon">
        <p class="cc-mtop font-size">一卡通</p>
      </div>
    </div>
    <hr class="line">
    <div class="address">
      <p class="fontSize">
        我的课程
      </p>
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
            "https://cdn.dribbble.com/users/329207/screenshots/7824170/media/cc77353e67ca46a4da78553330209a72.jpg"
        },
        {
          url: "#",
          description: "two",
          image:
            "https://cdn.dribbble.com/users/63407/screenshots/7825858/media/547d13eb0522eabcbbaa6683c82bfe40.png"
        },
        {
          url: "#",
          description: "three",
          image:
            "https://cdn.dribbble.com/users/1018201/screenshots/7816965/media/2ed92a6a7ee0017e28f3bbcaf88b8138.png"
        }
      ],
      transitionName: this.$store.state.transitionName
    };
  },
  components: {
    Carousel: require('/school/client_h5_a/src/components/Carousel').default
  },
  created() {
  },
  mounted() {},
  methods: {
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.address{
  margin-left: 5%;
}

.title {
  font-size: 18px;
  font-weight: 550;
  letter-spacing: 3px;
  margin-top: 10px;
}


.icon{
  margin-top: 25px;
  width: 55%;
  height: 50%;
}

.line{
  width: 90%;
  margin-top: 15px;
  border: none;
  height: 1px;
  background: #ececec;
  margin-bottom: 10px;
}

.font-size{
  font-size: 12px;
  color: #979797;
}
.fontSize{
  font-size: 13px;
  color: #5e5e5e;
  font-weight: 550;
}
</style>
