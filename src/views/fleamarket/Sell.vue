<template>
  <div>
    <div class="header">
      <router-link to="/homePage">
        <h4>取消</h4>
      </router-link>
      <p>发布</p>
    </div>
    <textarea
      style="border: 0;border-radius:5px;background-color:#ffffff;width: 375px;height: 50px;padding: 10px;resize: none;"
      placeholder="标题，品牌，型号"
      v-model="data.goodsName"
    ></textarea>
    <textarea
      style="border:0;border-radius:5px;background-color:#ffffff;width: 375px;height: 50px;padding: 10px;resize: none;"
      placeholder="描述下你的商品"
      v-model="data.goodsDescription"
    ></textarea>
    <!-- 图片上传区域 -->
    <p>点击上传图片</p>
    <div class="upload">
      <img
        class="up-pic"
        :src="data.goodsImgUrl"
        @click="avatarClick()"
      />
      <input
        @click="avatarClick()"
        type="file"
        @change="uploadAvatar($event)"
        ref="file"
        style="display: none;"
        id="file"
      />
    </div>
    <div class="list">
      <div class="price">
        <input
          type="number"
          placeholder="请输入价格"
          v-model="data.goodsPrice"
        />
        <input
          type="text"
          placeholder="请输入类型"
          v-model="data.goodsMark"
        />
        <select
          name="bbxb"
          id="selecte1"
          class="longselect"
          v-model="id"
          @click="get(id)"
        >
          <option value="">---请选择--</option>
          <option
            :value="item.pkFleaTypeId"
            selected="selected"
            v-for="(item, index) in type"
            :key="index"
          >{{ item.typeName }}</option>
        </select>
        <!-- <router-link to="/pay"> -->
        <button @click="getSell">确认发布</button>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
const API = require("../../request/api.js");
export default {
  name: "Sell",
  data() {
    return {
      type: [],
      id: "",
      user: JSON.parse(localStorage.getItem("FleaUser")),
      data: {
        goodsDescription: "",
        goodsImgUrl:
          "https://student-m.oss-cn-hangzhou.aliyuncs.com/img/add.png",
        goodsMark: "",
        goodsName: "",
        goodsPrice: "",
        pkFleaTypeId: 0,
        pkFleaUserId: 0
      }
    };
  },
  components: {},
  created() {
    this.getAllType();
  },
  mounted() {},
  methods: {
    get(id) {
      this.data.pkFleaTypeId = id;
      this.data.pkFleaUserId = this.user.pkFleaUserId;
    },
    async getAllType() {
      this.url = this.GLOBAL.baseUrl + "/flea/type/all";
      this.type = (await API.init(this.url, this.data, "post")).data.types;
      // console.log(this.type);
    },
    async getSell() {
      this.url = this.GLOBAL.baseUrl + "/flea/goods/increased";
      // console.log(this.data);

      this.type = (await API.init(this.url, this.data, "post")).data.types;
      // console.log(this.type);
      this.$router.push({
        path: `/personal/${this.data.pkFleaUserId}`
      });
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
      this.imgDataUrl = url.substring(0, url.indexOf("?"));
      this.data.goodsImgUrl = url;
      // this.updateAvatar();
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/fleamarket/Sell.scss";
h4 {
  margin-top: 10px;
  font-weight: 20px;
  margin-left: 10px;
  font-size: 13px;
}
.up-pic {
  width: 50px;
  height: 50px;
  border: 1px solid black;
}
.upload {
  height: 100px;
  // background-color: blue;
}
.list {
  height: 200px;
  margin-top: 10px;
  // background-color: brown;
}
.price input {
  height: 30px;
  width: 100%;
  margin-top: 5px;
  border-radius: 10px;
  border: none;
}
select {
  height: 30px;
  width: 100%;
  border: none;
}
button {
  height: 40px;
  width: 100%;
  margin-top: 80px;
  // background-color: red;
  border: none;
  border-radius: 5px;
}
</style>
