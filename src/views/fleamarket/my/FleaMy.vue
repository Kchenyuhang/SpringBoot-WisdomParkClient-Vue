<template>
  <div class="container">
    <div class="r-inform">
      <div class="r-left">
        <img
          :src="user.avatar"
          alt=""
        />
      </div>
      <div class="r-right">
        <h5>{{ user.nickname }}</h5>
        <p>个人简介</p>
      </div>
    </div>
    <div class="info">
      <div
        class="cc-df-between"
        @click="gotoUserDetail(user.pkFleaUserId)"
      >
        <div class="cc-df info-left1">
          <img
            src="http://ww1.sinaimg.cn/large/0064QvQTly1gft3gyow78j301c01cgld.jpg"
            alt="个人首页"
          />
          <p>个人首页</p>
        </div>
        <div class="info-right">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
            alt="右箭头"
          />
        </div>
      </div>

      <hr class="line" />
      <router-link to="/myrelease">
        <div class="cc-df-between">
          <div class="cc-df info-left2">
            <img
              src="http://ww1.sinaimg.cn/large/0064QvQTly1gft3g0kaarj301c01c0kq.jpg"
              alt="我发布的"
            />
            <p>我发布的</p>
          </div>
          <div class="info-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt="右箭头"
            />
          </div>
        </div>
      </router-link>

      <hr class="line" />
      <router-link to="/mybuy">
        <div class="cc-df-between">
          <div class="cc-df info-left3">
            <img
              src="http://ww1.sinaimg.cn/large/0064QvQTly1gft3jttqg2j301c01c0sh.jpg"
              alt="我买到的"
            />
            <p>我买到的</p>
          </div>
          <div class="info-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt="右箭头"
            />
          </div>
        </div>
      </router-link>
      <hr class="line" />
      <router-link to="/mysell">
        <div class="cc-df-between">
          <div class="cc-df info-left4">
            <img
              src="http://ww1.sinaimg.cn/large/0064QvQTly1gft3ise6juj301c01cdfl.jpg"
              alt="我卖出的"
            />
            <p>我卖出的</p>
          </div>
          <div class="info-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt="右箭头"
            />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "FleaMy",
  data() {
    return {
      menuIndex: 0,
      user: JSON.parse(localStorage.getItem("FleaUser")),
      path: "/fleaMy"
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    menuShow(index) {
      this.menuIndex = index;
      console.log(this.menuIndex);
    },
    gotoUserDetail(id) {
      this.$router.push({
        path: `/personal/${id}`
      });
      localStorage.setItem("path", JSON.stringify(this.path));
      localStorage.setItem("path1", JSON.stringify(this.path));
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/FleaMy.scss";
</style>
