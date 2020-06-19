<template>
  <div class="container">
    <div class="r-inform">
      <div class="bgi"></div>
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
      <div class="white"></div>
      <router-link to="/layout">
        <button><p>退出跳蚤市场</p></button>
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
  created() {
    localStorage.setItem("mypath", JSON.stringify(this.path));
  },
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
button {
  height: 40px;
  width: 60%;
  margin-left: 70px;
  margin-top: 130px;
  border: none;
  border-radius: 10px;
  background-color: red;
}
button p {
  font-size: 16px;
  color: white;
}
.white {
  height: 10px;
}
</style>
