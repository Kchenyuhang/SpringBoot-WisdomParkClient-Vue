<template>
  <div class="bg">
    <!-- 顶部导航 -->
    <div class="header">
      <router-link to="/personalcenter">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt
        />
      </router-link>
      <p>跑腿</p>
      <router-link to="/progress">
        <img
          class="image"
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/lALPDiQ3LlXs7OHMyM0BZA_356_200.png_720x720q90g.jpg"
          alt
        />
      </router-link>
    </div>
    <!-- 中间身份证图片 -->
    <div class="imgcard">
      <img
        src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/hyj102021.png"
        alt
      />
      <img class="useravatar" :src="user.avatar" />
      <p>{{ user.userName }}</p>
    </div>
    <div class="card" id="fileBox">
      <img :src="zimg" @click="avatarClick(1)" />
      <input
        type="file"
        @change="uploadAvatar($event, 1)"
        ref="file"
        style="display: none;"
        id="file"
      />
    </div>
    <div class="card" id="fileBox">
      <img :src="fimg" @click="avatarClick(2)" />
      <input
        type="file"
        @change="uploadAvatar($event, 2)"
        ref="file1"
        style="display: none;"
        id="file1"
      />
    </div>
    <button class="btn" @click="apply" ref="applys">确认申请</button>
  </div>
</template>
<script>
const API = require("../../../request/api");
export default {
  name: "Apply",
  data() {
    return {
      userId: this.$store.state.user.jobNumber,
      phoneNumber: this.$store.state.user.phoneNumber,
      user: this.$store.state.user,
      result: [],
      zimg:
        "https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/lALPDh0cMMr-eWjMiczI_200_137.png_720x720q90g.jpg",
      fimg:
        "https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/lALPDiQ3LhSTJALMiczI_200_137.png_720x720q90g.jpg",
    };
  },
  created() {},
  components: {},
  methods: {
    uploadAvatar(event, index) {
      const OSS = require("ali-oss");
      let client = new OSS({
        region: "oss-cn-beijing",
        accessKeyId: "LTAI4FuNH3cQirWwhynvdCxv",
        accessKeySecret: "TmUIP6EkFBi5c9Mrq5kysWMRsNe7x6",
        bucket: "niit-cmj",
      });
      let timestamp = Date.parse(new Date());
      let imgUrl = "img/" + timestamp;
      var file = event.target.files[0]; //获取文件流
      var _this = this;
      client.multipartUpload(imgUrl, file).then(function(result) {
        _this.avatar = result.res.requestUrls[0];
        _this.updateAdminInfo(_this.avatar, index);
      });
    },
    updateAdminInfo(url, index) {
      if (url.indexOf("?") != -1) {
        url = url.substring(0, url.indexOf("?"));
      }
      if (index == 1) {
        this.zimg = url;
      }
      if (index == 2) {
        this.fimg = url;
      }
    },
    avatarClick(index) {
      if (index == 1) {
        this.$refs.file.click();
      }
      if (index == 2) {
        this.$refs.file1.click();
      }
    },
    async apply() {
      this.data = {
        idCardBack: this.zimg,
        idCardFront: this.fimg,
        remark: "无",
        requesterId: this.userId,
        requesterName: this.userName,
        requesterPhonenumber: this.phoneNumber
      };
      this.url = this.GLOBAL1.baseUrl + "/reviewfrom/application";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result.msg);
      if (this.result.msg == "成功") {
        this.$router.push("/personalcenter");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/scss/errands/user/Apply.scss";
</style>
