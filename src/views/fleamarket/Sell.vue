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
    <div class="upload">
      <div class="hengzhe">
        <div
          v-for="(item, index) in img"
          :key="index"
        >
          <img
            :src="item"
            alt=""
            class="suolue"
          />
        </div>
      </div>
      <img
        class="up-pic"
        :src="data.goodsImgUrl"
        v-show="suolue"
        @click="avatarClick()"
      />
      <input
        @click="avatarClick()"
        type="file"
        @change="uploadAvatar($event)"
        ref="file"
        multiple="multiple"
        style="display: none;"
        accept="image/gif,image/jpeg,image/jpg,image/png"
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
          class="option"
          name="bbxb"
          id="selecte1"
          v-model="id"
          @click="get(id)"
        >
          <option value="">---请选择--</option>
          <option
            class="option"
            :value="item.pkFleaTypeId"
            selected="selected"
            v-for="(item, index) in type"
            :key="index"
          >{{ item.typeName }}</option>
        </select>
        <!-- <p>{{this.imgstr}}</p> -->
        <button @click="getSell">确认发布</button>
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
      path: JSON.parse(localStorage.getItem("path")),
      data: {
        goodsDescription: "",
        goodsImgUrl:
          "http://ww1.sinaimg.cn/large/0064QvQTly1gfv2m80e6jj30jg0jg3z4.jpg",
        goodsMark: "",
        goodsName: "",
        goodsPrice: "",
        pkFleaTypeId: 0,
        pkFleaUserId: 0
      },
      img: [],
      imgstr: "",
      suolue: true
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
    },
    async getSell() {
      this.path[this.path.length] = "/homePage";
      localStorage.setItem("path", JSON.stringify(this.path));
      this.url = this.GLOBAL.baseUrl + "/flea/goods/increased";
      this.data.goodsImgUrl = this.imgstr;
      console.log(this.data);

      this.type = (await API.init(this.url, this.data, "post")).data.types;
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
      var _this = this;
      for (let i = 0; i < event.target.files.length; i++) {
        let timestamp = Date.parse(new Date());
        let imgUrl = "img/" + timestamp + i + "." + "png";
        var file = event.target.files[i];
        client.multipartUpload(imgUrl, file).then(function(result) {
          _this.img.push(result.res.requestUrls[0]);
          _this.updateAdminInfo(_this.img);
        });
      }
    },
    avatarClick() {
      this.$refs.file.click();
    },
    updateAdminInfo(img) {
      this.img = img;
      this.suolue = false;
      // for (let i = 0; i < img.length; i++) {
      //   this.imgstr = img[i] + "--**--" + this.imgstr;
      // }
      this.imgstr = img.join("--**--");
      // console.log(this.imgstr);

      // this.imgstr = this.imgstr.slice(0, 216);
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
  width: 90px;
  height: 90px;
  margin-left: 140px;
  border: none;
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
  background-color: rgb(0, 133, 215);
  border: none;
  color: white;
  border-radius: 5px;
  transition-duration: 0.4s;
  cursor: pointer;
}
button:hover {
  background-color: rgb(17, 112, 188);
}
.option {
  width: auto;
  position: absolute;
  left: 50%;
}
</style>
