<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/alumnusIndex">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt=""
          />
        </router-link>
        <p>校友圈</p>
      </div>
    </div>
    <div class="message-card">
      <div class="message-icon">
        <div class="cc-col-center cc-col-4" @click="into(1)">
          <div class="icon1 cc-df-center">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/pinglun_icon.png"
              alt=""
            />
          </div>
          <div>
            <p>评论</p>
          </div>
        </div>
        <div class="cc-col-center cc-col-4" @click="into(2)">
          <div class="icon2 cc-df-center">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/dianzan_icon.png"
              alt=""
            />
          </div>
          <div>
            <p>赞</p>
          </div>
        </div>
        <div class="cc-col-center cc-col-4" @click="into(3)">
          <div class="icon3 cc-df-center">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/xiaoxi_icon.png"
              alt=""
            />
          </div>
          <div>
            <p>私聊</p>
          </div>
        </div>
      </div>
    </div>
    <div class="post">
      <div class="row cc-df-between">
        <div>
          <p>帖子动态</p>
        </div>
        <div>
          <p>全部已读</p>
        </div>
      </div>
    </div>
    <div class="nomessage cc-df-center">
      <p>暂无消息</p>
    </div>
    <hr class="line" />
  </div>
</template>

<script>
export default {
  name: "AlumnusMessage",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    into(index) {
      if (index == 1) {
        this.$router.push("/alumnuscomment");
      }
      if (index == 2) {
        this.$router.push("/alumnusawesome");
      }
      if (index == 3) {
        this.$router.push("/privatechat");
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/AlumnusMessage.scss";
</style>
