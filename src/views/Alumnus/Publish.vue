<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/alumnusindex">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt=""
          />
        </router-link>
        <p>发帖</p>
      </div>
    </div>
    <div class="article">
      <input
        type="text"
        class="theme"
        placeholder="在此输入标题"
        v-model="data.title"
      />
      <textarea
        cols="5"
        placeholder="在此输入正文"
        class="content"
        v-model="data.content"
      ></textarea>
      <div class="image cc-col-center">
        <img
          class="up-pic"
          :src="pic[0].picture"
          @click="avatarClick()"
        />
        <div v-show="show">
          <p>添加照片</p>
        </div>
        <input
          type="file"
          @change="uploadAvatar($event)"
          ref="file"
          style="display: none;"
          id="file"
        />

      </div>
    </div>
    <hr class="line" />
    <div class="place cc-df-between">
      <div class="left cc-df-center">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/dingwei_icon.png"
          alt=""
        />
        <div>
          <p>位置信息</p>
        </div>
      </div>
      <div class="right">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
          alt=""
        />
      </div>
    </div>
    <hr class="line" />
    <div class="tips">
      <p>*请按照发帖要求，合理发帖，如有违规将会被删除，乃至封禁</p>
    </div>
    <div class="publish-btn cc-df-center">
      <p @click="send">发布</p>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api.js");
export default {
  name: "Publish",
  data() {
    return {
      data: {
        content: "",
        title: "",
        type: "校园",
        userId: ""
      },
      pic: [
        {
          dynamicId: "",
          picture:
            "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/picture_icon.png"
        }
      ],
      show: true,
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    async send() {
      this.url = this.GLOBAL.baseUrl + "/dynamic/new";
      this.data.userId = this.user.pkUserAccountId;
      this.list = (await API.init(this.url, this.data, "post")).data;
      console.log(this.list.pkDynamicId);
      this.url1 = this.GLOBAL.baseUrl + "/dynamic/photo/new";
      this.pic[0].dynamicId = this.list.pkDynamicId;
      console.log(this.pic);
      this.result = (await API.init(this.url1, this.pic, "post")).data;
      this.$router.push("/alumnusindex");
      console.log(this.result);
    },
    uploadAvatar(event) {
      const OSS = require("ali-oss");
      let client = new OSS({
        region: "oss-cn-hangzhou",
        accessKeyId: "LTAI4FcUiGZb75XGwiCC7Yzu",
        accessKeySecret: "ZX0hbGsO2aOAWUfGJlrL48Tkp0bfFQ",
        bucket: "student-m"
      });
      let timestamp = Date.parse(new Date());
      let imgUrl = "img/" + timestamp + "." + "jpeg";
      var file = event.target.files[0]; //获取文件流
      var _this = this;
      client.multipartUpload(imgUrl, file).then(function(result) {
        _this.avatar = result.res.requestUrls[0];
        _this.updateAdminInfo(_this.avatar);
        console.log(_this.avatar);
      });
    },
    avatarClick() {
      this.$refs.file.click();
    },
    updateAdminInfo(url) {
      // this.imgDataUrl = url.substring(0, url.indexOf("?"));
      this.show = false;
      this.pic[0].picture = url;
      // this.updateAvatar();
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/Publish.scss";
</style>
