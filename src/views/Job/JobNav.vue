<template>
  <div>
    <div>
      <router-view />
    </div>
    <div class="wrap">
      <div
        class="icon1"
        v-if="iconIsshow1 == 1"
      >
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zhiwei_xuanzhong.png"
          alt
          class="icon"
        />
        <p :class="{ 'blue-font': iconIsshow1 == 1 }">职位</p>
      </div>
      <div
        class="icon1"
        v-if="iconIsshow1 != 1"
        @click="iconIsshow1 = 1"
      >
        <router-link to="/position">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zhiwei_weixuanzhong.png"
            alt
            class="icon"
          />
          <p>职位</p>
        </router-link>
      </div>

      <div
        class="icon2 cc-coll-3"
        v-if="iconIsshow1 != 2"
        @click="iconIsshow1 = 2"
      >
        <router-link to="/company">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/gongsi_weixuanzhong.png"
            alt
            class="icon"
          />
          <p>公司</p>
        </router-link>
      </div>
      <div
        class="icon2 cc-coll-3"
        v-if="iconIsshow1 == 2"
      >
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/gongsi_xuanzhong.png"
          alt
          class="icon"
        />
        <p :class="{ 'blue-font': iconIsshow1 == 2 }">公司</p>
      </div>

      <div
        class="icon4 cc-coll-3"
        v-if="iconIsshow1 != 4"
        @click="iconIsshow1 = 4"
      >
        <router-link to="/jobmessage">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/xiaoxi_weixuanzhong.png"
            alt
            class="icon"
          />
          <p>消息</p>
        </router-link>
      </div>
      <div
        class="icon4 cc-coll-3"
        v-if="iconIsshow1 == 4"
      >
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/xiaoxi_xuanzhong.png"
          alt
          class="icon"
        />
        <p :class="{ 'blue-font': iconIsshow1 == 4 }">消息</p>
      </div>

      <div
        class="icon5"
        v-if="iconIsshow1 != 5"
        @click="iconIsshow1 = 5"
      >
        <router-link to="/jobmy">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/wode_weixuanzhong.png"
            alt
            class="icon"
          />
          <p>我的</p>
        </router-link>
      </div>
      <div
        class="icon5"
        v-if="iconIsshow1 == 5"
      >
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/wode_xuanzhong.png"
          alt
          class="icon"
        />
        <p :class="{ 'blue-font': iconIsshow1 == 5 }">我的</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobNav",
  data() {
    return {
      iconIsshow1: 1,
      transitionName1: ""
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/Job/JobNav.scss";
</style>
