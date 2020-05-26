<template>
  <transition :name="transitionName">
    <div class="bg">
      <div class="header cc-col-center">
        <div class="cc-df cc-mltop" id="fileBox">
          <img :src="user.avatar" @click="avatarClick()" />
          <input
            type="file"
            @change="uploadAvatar($event)"
            ref="file"
            style="display: none;"
            id="file"
          />
        </div>
        <p>{{user.nickname}}</p>
      </div>
      <div class="info">
        <router-link to="/base">
        <div class="cc-df-between">
          <div class="cc-df info-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_jibenxinxi.png"
              alt="基本信息"
            />
            <p>基本信息</p>
          </div>
          <div class="info-right">
            <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png" alt="右箭头" />
          </div>
        </div>
        </router-link>
        
        <hr class="line" />

        <div class="cc-df-between">
          <div class="cc-df info-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_guanyuwomen.png"
              alt="关于我们"
            />
            <p>关于我们</p>
          </div>
          <div class="info-right">
            <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png" alt="右箭头" />
          </div>
        </div>

        <hr class="line" />
        <router-link to="/feedback">
          <div class="cc-df-between">
            <div class="cc-df info-left">
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
        <div class="cc-df-between" @click="logout()">
          <div class="cc-df info-left">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_qinlihuncun.png"
              alt="清理缓存"
            />
            <p>清理缓存</p>
          </div>
          <div class="info-right">
            <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png" alt="右箭头" />
          </div>
        </div>
      </div>
      <div style="height:200px"></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "My",
  data() {
    return {
      transitionName: this.$store.state.transitionName,
      user: this.$store.state.user,
      token: this.$store.state.token,
      avatar: "",
      imgDataUrl: ""
    };
  },
  components: {},
  created() {
    console.log(this.transitionName);
  },
  mounted() {},
  methods: {
    logout() {
      localStorage.removeItem("token");
      this.$store.commit("setUser", null);
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
      let imgUrl = "img/" + timestamp;
      var file = event.target.files[0]; //获取文件流
      var _this = this;
      client.multipartUpload(imgUrl, file).then(function(result) {
        _this.avatar = result.res.requestUrls[0];
        _this.updateAdminInfo(_this.avatar);
      });
    },
    updateAdminInfo(url) {
      this.imgDataUrl = url.substring(0, url.indexOf("?"));
      this.user.avatar = this.imgDataUrl;
      this.updateAvatar()
    },
    avatarClick() {
      this.$refs.file.click();
    },
    updateAvatar() {
      this.$axios({
        method: "put",
        url: this.GLOBAL.baseUrl + "/user/update/info",
        data: {
          avatar: this.imgDataUrl,
          gender: this.user.gender,
          nickname: this.user.nickname,
          pkUserAccountId: this.user.pkUserAccountId
        }
      })
        .then(res => {
          console.log(res);
          localStorage.setItem("user", JSON.stringify(res.data.data));
          this.$store.commit("setUser", res.data.data);
          console.log(res.data.data)
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/My.scss";
</style>
