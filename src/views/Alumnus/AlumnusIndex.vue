<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/layout">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt=""
          >
        </router-link>
        <p>校友圈</p>
      </div>
    </div>
    <div class="avatar-card cc-df-between">
      <div class="avatar-card-left">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/zyj.jpg"
          alt=""
        >
      </div>
      <div class="avatar-card-right">

      </div>
    </div>
    <hr class="line" />
    <div class="function-bar">
      <div class="function cc-coll-4 cc-df-center" @click="into(1)">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/icon_fabu.png"
          alt=""
        >
        <div>
          <p>发帖</p>
        </div>
      </div>
      <div class="function cc-coll-4 cc-df-center" @click="into(2)">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/xiaoxi_black_icon.png"
          alt=""
        >
        <div>
          <p>消息</p>
        </div>
      </div>
      <div class="function cc-coll-4 cc-df-center" @click="into(3)">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/icon_shoucang1.png"
          alt=""
        >
        <div>
          <p>收藏</p>
        </div>
      </div>
    </div>
    <div
      v-for="item in 4"
      :key="item.id"
    >
      <div class="dongtai-card">
        <div class="dongtai-avatar">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/zyj.jpg"
            alt=""
          >
        </div>
        <div class="dongtai-content">
          <div class="row cc-df-between">
            <div class="row">
              <div class="name">
                <p>十七岁的他</p>
              </div>
              <div class="fenge cc-df-center">
                <p>·</p>
              </div>
              <div class="time">
                <p>一天前</p>
              </div>
            </div>

            <div class="gengduo">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/gengduo_icon.png"
                alt=""
              >
            </div>
          </div>
          <div class="article">
              <p>南工院变化几年变化好大！怀念南工院的生活。</p>
          </div>
          <div class="image">
              <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/dongtai_image.jpg" alt="">
          </div>
          <div class="row2 cc-df-between">
              <div class="comment cc-df-center">
                  <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/fill_icon.png" alt="">
                  <div>
                      <p>评论</p>
                  </div>
              </div>
              <div class="like cc-df-center">
                  <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/icon_dianzan.png" alt="">
                  <div>
                      <p>点赞</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "AlumnusIndex",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
      into(index) {
      if (index == 1) {
        this.$router.push("/publish");
      }
      if (index == 2) {
        this.$router.push("/alumnusmessage");
      }
      if (index == 3) {
        this.$router.push("/alumnuscollect");
      }
    },
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/AlumnusIndex.scss";
</style>
