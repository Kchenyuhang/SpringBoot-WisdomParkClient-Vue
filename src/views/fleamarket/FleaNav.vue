<template>
  <div>
    <div>
      <router-view />
    </div>
    <div class="wrap">
      <div
        class="icon1"
        v-if="iconIsshow1 != 1"
        @click="iconIsshow1 = 1"
      >
        <router-link to="/homePage">
          <img
            src="http://ww1.sinaimg.cn/large/0064QvQTly1gfmwd5fycjj305k05k3yc.jpg"
            alt
            class="icon"
          />
          <p>首页</p>
        </router-link>
      </div>
      <div
        class="icon1"
        v-if="iconIsshow1 == 1"
      >
        <img
          src="http://ww1.sinaimg.cn/large/0064QvQTly1gfso0a3w3gj308c08c0sn.jpg"
          alt
          class="icon"
        />
        <p :class="{ 'yellow-font': iconIsshow1 == 1 }">首页</p>
      </div>

      <div
        class="icon2"
        v-if="iconIsshow1 != 2"
        @click="iconIsshow1 = 2"
      >
        <router-link to="/list">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_zixun1.png"
            alt
            class="icon"
          />
          <p>分类</p>
        </router-link>
      </div>
      <div
        class="icon2"
        v-if="iconIsshow1 == 2"
      >
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_zixun.png"
          alt
          class="icon"
        />
        <p :class="{ 'yellow-font': iconIsshow1 == 2 }">分类</p>
      </div>

      <div
        class="icon3"
        v-if="iconIsshow1 == 3"
      >
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/jiahao.PNG"
          alt
          style="height: 40px;
  width: 40px;"
        />
        <p :class="{ 'yellow-font': iconIsshow1 == 3 }">卖闲置</p>
      </div>
      <div
        class="icon3"
        v-if="iconIsshow1 != 3"
        @click="iconIsshow1 = 3"
      >
        <router-link to="/sell">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/jiahao.PNG"
            alt
            style="height: 40px;
  width: 40px; "
          />
          <p>卖闲置</p>
        </router-link>
      </div>

      <div
        class="icon4"
        v-if="iconIsshow1 != 4"
        @click="iconIsshow1 = 4"
      >
        <router-link to="/reward">
          <img
            src="http://ww1.sinaimg.cn/large/0064QvQTgy1gfmeysdryej3082082glp.jpg"
            alt
            class="icon"
          />
          <p>悬赏</p>
        </router-link>
      </div>
      <div
        class="icon4"
        v-if="iconIsshow1 == 4"
      >
        <img
          src="http://ww1.sinaimg.cn/large/0064QvQTly1gfsnzbx45hj308c08cwem.jpg"
          alt
          class="icon"
        />
        <p :class="{ 'yellow-font': iconIsshow1 == 4 }">悬赏</p>
      </div>

      <div
        class="icon5"
        v-if="iconIsshow1 != 5"
        @click="iconIsshow1 = 5"
      >
        <router-link to="/fleaMy">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_wode.png"
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
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_wode2.png"
          alt
          class="icon"
        />
        <p :class="{ 'yellow-font': iconIsshow1 == 5 }">我的</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      iconIsshow1: 1,
      transitionName1: ""
    };
  },
  components: {},
  created() {
    this.choice();
  },
  mounted() {},
  methods: {
    choice() {
      if (this.$route.path == "/homePage") {
        this.iconIsshow1 = 1;
      }
      if (this.$route.path == "/list") {
        this.iconIsshow1 = 2;
      }
      if (this.$route.path == "/sell") {
        this.iconIsshow1 = 3;
      }
      if (this.$route.path == "/reward") {
        this.iconIsshow1 = 4;
      }
      if (this.$route.path == "/fleaMy") {
        this.iconIsshow1 = 5;
      }
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/fleamarket/FleaNav.scss";
</style>
