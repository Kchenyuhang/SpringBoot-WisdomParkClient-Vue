<template>
  <transition :name="transitionName">
    <div class="bg">
      <!-- <Dialog v-bind.sync="showBombTips" :tipsContent="tipsContent"></Dialog> -->
      <div class="header cc-col-center">
        <div
          class="cc-df cc-mltop"
          id="fileBox"
        >
          <img
            :src="user.avatar"
            @click="avatarClick()"
          />
          <input
            type="file"
            @change="uploadAvatar($event)"
            ref="file"
            style="display: none;"
            id="file"
          />
        </div>
        <p class="name">{{ user.nickname }}</p>
        <p class="phone">
          {{ user.phoneNumber.substring(0, 3) }}****{{
          user.phoneNumber.substring(7)
          }}
        </p>
      </div>
      <div class="info">
        <router-link to="/base">
          <div class="cc-df-between">
            <div class="cc-df info-left1">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_jibenxinxi.png"
                alt="基本信息"
              />
              <p>基本信息</p>
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
        <router-link to="/about">
          <div class="cc-df-between">
            <div class="cc-df info-left2">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_guanyuwomen.png"
                alt="关于我们"
              />
              <p>关于我们</p>
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
        <router-link to="/feedback">
          <div class="cc-df-between">
            <div class="cc-df info-left3">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_yijianfankui.png"
                alt="意见反馈"
              />
              <p>意见反馈</p>
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
        <div
          class="cc-df-between"
          @click="logout()"
        >
          <div class="cc-df info-left4">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_qinlihuncun.png"
              alt="退出登录"
            />
            <p>退出登录</p>
          </div>
          <div class="info-right">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt="右箭头"
            />
          </div>
        </div>
      </div>
      <div style="height:200px"></div>
    </div>
  </transition>
</template>
<script>
const API = require("../../request/api");
export default {
  name: "My",
  data() {
    return {
      transitionName: this.$store.state.transitionName,
      user: this.$store.state.user,
      token: this.$store.state.token,
      avatar: "",
      imgDataUrl: "",
      showBombTips: {
        visible: true
      },
      tipsContent: "成功"
      // users: {
      //   avatar: "",
      //   nickname: "",
      //   address: "",
      //   gender: "",
      //   pkUserAccountId: ""
      // }
    };
  },
  components: {
    // Dialog: require("../../components/dialog").default
  },
  created() {
    console.log(this.user);
  },
  mounted() {},
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.commit("setUser", null);
      this.user = null;
      this.$router.push("/login");
    },
    uploadAvatar(event) {
      const OSS = require("ali-oss");
      let client = new OSS({
        region: "oss-cn-beijing",
        accessKeyId: "LTAI4FuNH3cQirWwhynvdCxv",
        accessKeySecret: "TmUIP6EkFBi5c9Mrq5kysWMRsNe7x6",
        bucket: "niit-cmj"
      });
      let timestamp = Date.parse(new Date());
      let imgUrl = "img/" + timestamp + "." + "jpg";
      var file = event.target.files[0]; //获取文件流
      var _this = this;
      client.multipartUpload(imgUrl, file).then(function(result) {
        _this.avatar = result.res.requestUrls[0];
        _this.updateAdminInfo(_this.avatar);
        console.log(_this.avatar);
      });
    },
    updateAdminInfo(url) {
      if (url.indexOf("?") != -1) {
        this.imgDataUrl = url.substring(0, url.indexOf("?"));
        this.user.avatar = this.imgDataUrl;
      } else {
        this.user.avatar = url;
      }
      this.updateAvatar();
    },
    avatarClick() {
      this.$refs.file.click();
    },
    
    async updateAvatar() {
      this.url = this.GLOBAL.baseUrl + "/user/update/info";
      console.log(this.user.avatar);
      this.data = {
        pkUserAccountId: this.user.pkUserAccountId,
        gender: this.user.gender,
        avatar: this.user.avatar,
        nickname: this.user.nickname,
        address: this.user.address
      };
      console.log(this.data);
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result.msg);
      if (this.result.msg == "成功") {
        localStorage.setItem("user", JSON.stringify(this.user));
        this.$store.commit("setUser", this.user);
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/My.scss";
</style>
