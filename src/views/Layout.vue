<template>
  <div>
    <div>
      <router-view />
    </div>
    <div class="wrap">
      <div
        class="icon1"
        v-if="iconIsshow1!=1"
        @click="iconIsshow1=1"
      >
        <router-link to="/information">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_zixun1.png"
            alt
            class="icon"
          />
          <p>资讯</p>
        </router-link>
      </div>
      <div
        class="icon1"
        v-if="iconIsshow1==1"
      >
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_zixun.png"
          alt
          class="icon"
        />
        <p :class="{'blue-font':iconIsshow1==1}">资讯</p>
      </div>

      <div
        class="icon2"
        v-if="iconIsshow1!=2"
        @click="iconIsshow1=2"
      >

        <router-link to="/addressbook">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_tongxunlu.png"
            alt
            class="icon"
          />
          <p>通讯录</p>
        </router-link>

      </div>
      <div
        class="icon2"
        v-if="iconIsshow1==2"
      >
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_tongxunlu2.png"
          alt
          class="icon"
        />
        <p :class="{'blue-font':iconIsshow1==2}">通讯录</p>
      </div>

      <div
        class="icon3"
        v-if="iconIsshow1==3"
      >
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_shouye.png"
          alt
          style="height: 60px;
  width: 60px;"
        />
        <p :class="{'blue-font':iconIsshow1==3}">首页</p>
      </div>
      <div
        class="icon3"
        v-if="iconIsshow1!=3"
        @click="iconIsshow1=3"
      >
        <router-link to="/index">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_shouye2.png"
            alt
            style="height: 60px;
  width: 60px;"
          />
          <p>首页</p>
        </router-link>
      </div>

      <div
        class="icon4"
        v-if="iconIsshow1!=4"
        @click="iconIsshow1=4"
      >
        <router-link to="/message">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_xiaoxi.png"
            alt
            class="icon"
          />
          <p>消息</p>
        </router-link>
      </div>
      <div
        class="icon4"
        v-if="iconIsshow1==4"
      >
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_xiaoxi2.png"
          alt
          class="icon"
        />
        <p :class="{'blue-font':iconIsshow1==4}">消息</p>
      </div>

      <div
        class="icon5"
        v-if="iconIsshow1!=5"
        @click="iconIsshow1=5"
      >
        <router-link to="/my">
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
        v-if="iconIsshow1==5"
      >
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_wode2.png"
          alt
          class="icon"
        />
        <p :class="{'blue-font':iconIsshow1==5}">我的</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      iconIsshow1: 3,
      transitionName1: ""
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {
    $route(to, from) {
      //此时假设从index页面跳转到pointList页面
      console.log(to); // "/pointList"
      console.log(from); // “/index”
      const routeDeep = [
        "/information",
        "/addressbook",
        "/index",
        "/message",
        "/my"
      ];
      const toDepth = routeDeep.indexOf(to.path);
      const fromDepth = routeDeep.indexOf(from.path);
      this.transitionName1 = toDepth > fromDepth ? "fold-left" : "fold-right";
      localStorage.setItem("transitionName", this.transitionName1);
      this.$store.commit("setTransitionName", this.transitionName1);
      console.log(this.$store.state.transitionName);
    }
  }
};
</script>

<style scoped lang="scss">
.blue-font {
  color: #1ca3ff;
}
.wrap {
  background-color: #ffffff;
  width: 100%;
  height: 70px;
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
  border-top: #929292 solid 1px;
}
.icon1 {
  height: 60px;
  width: 60px;
  margin-left: 5%;
  margin-top: 13px;
}
p {
  color: #929292;
  font-size: 12px;
}
.icon2 {
  height: 60px;
  width: 60px;
  margin-left: 7%;
  margin-top: 13px;
}
.icon3 {
  height: 60px;
  width: 60px;
  margin-top: -30px;
}
.icon3 p {
  font-size: 16px;
}
.icon4 {
  height: 60px;
  width: 60px;
  margin-left: 1%;
  margin-top: 13px;
}
.icon5 {
  height: 60px;
  width: 60px;
  margin-left: 5%;
  margin-top: 13px;
}
.icon {
  height: 20px;
  width: 20px;
}
</style>
