<template>
  <div class="bg">
    <div
      class="header"
      :style="{ width: width + '%' }"
    >
      <router-link to="/personal">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png" />
      </router-link>
      <p class="title">我的资料</p>
      <p class="jdt">完整度{{ width }}%</p>
    </div>
    <!-- <hr :style="{ width: width + '%' }" /> -->
    <div class="container">
      <div class="txt">
        <p class="title">基本信息</p>
      </div>
      <div class="card">
        <div class="text">
          <div class="left">
            <p>头像</p>
          </div>
          <div class="right">
            <div
              id="fileBox"
              v-show="show"
            >
              <img
                class="up-pic"
                :src="users.avatar"
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
            <div v-show="!show">
              <img
                class="pic"
                :src="user.avatar"
              />
              <img
                class="nickimg"
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              />
            </div>
          </div>
        </div>
        <div class="text">
          <div class="left">
            <p>昵称</p>
          </div>
          <div
            class="right"
            v-show="!show"
          >
            <p>
              {{ user.nickname }}
            </p>
            <img
              class="nickimg"
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
            />
          </div>
          <div
            class="right"
            v-show="show"
          >
            <input
              type="text"
              v-model="users.nickname"
              :placeholder="user.nickname"
            />
          </div>
        </div>
        <div class="text">
          <div class="left">
            <p>姓名</p>
          </div>
          <div class="right">
            <p>
              {{ user.name }}
            </p>
            <img
              class="nickimg"
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
            />
          </div>
        </div>
        <div class="text">
          <div class="left">
            <p>性别</p>
          </div>
          <div
            class="right"
            v-show="!show"
          >
            <p>
              {{ user.gender }}
            </p>
            <img
              class="nickimg"
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
            />
          </div>
          <div
            class="right"
            v-show="show"
          >
            <input
              type="text"
              v-model="users.gender"
              :placeholder="user.gender"
              align="right"
              readonly
              v-clickoutside="handleClose"
              @click="choice"
            />
          </div>
        </div>
        <div class="text">
          <div class="left">
            <p>联系方式</p>
          </div>
          <div class="right">
            <p>
              {{ user.tel }}
            </p>
            <img
              class="nickimg"
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
            />
          </div>
        </div>
        <div class="text bot">
          <div class="left">
            <p>学号</p>
          </div>
          <div class="right">
            <p>
              {{ user.jobNum }}
            </p>
            <img
              class="nickimg"
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
            />
          </div>
        </div>
        <div style="text-align:center">
          <p
            @click="show = true"
            v-show="!show"
          >修改</p>
          <p
            @click="update"
            v-show="show"
          >确认修改</p>
        </div>
      </div>
    </div>
    <div
      class="zhezhaoceng"
      v-show="zzc"
    >
      <div class="choice-line"></div>
      <div
        v-for="(item, index) in gender"
        :key="index"
        @mouseout="zzc = false"
      >
        <p @click="getSex(index)">{{ item.sec }}</p>
      </div>
    </div>
  </div>
</template>

<script>
const clickoutside = {
  // 初始化指令
  bind(el, binding) {
    function documentHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      if (binding.expression) {
        // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener("click", documentHandler);
  },
  update() {},
  unbind(el) {
    // 解除事件监听
    document.removeEventListener("click", el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
};
export default {
  name: "PersonalDetail",
  data() {
    return {
      user: {
        avatar: "https://student-m.oss-cn-hangzhou.aliyuncs.com/img/pic.png",
        nickname: "hn`巴德尔",
        name: "吴家浩",
        gender: "男",
        tel: "18851697931",
        jobNum: "1802333120"
      },
      users: {
        avatar: "",
        nickname: "",
        name: "",
        gender: "",
        tel: "",
        jobNum: ""
      },
      width: 50,
      show: false,
      zzc: false,
      count: 0,
      gender: [
        {
          sec: "保密"
        },
        {
          sec: "男"
        },
        {
          sec: "女"
        }
      ]
      // bottom: 9
    };
  },
  components: {},
  directives: { clickoutside },
  created() {
    this.getRd();
    this.getUser();
  },
  mounted() {},
  methods: {
    handleClose() {
      this.zzc = false;
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
      this.user.avatar = url;
      // this.updateAvatar();
    },
    getRd() {
      if (this.user.avatar != "") {
        this.count = this.count + 1;
      }
      if (this.user.nickname != "") {
        this.count = this.count + 1;
      }
      if (this.user.name != "") {
        this.count = this.count + 1;
      }
      if (this.user.gender != "") {
        this.count = this.count + 1;
      }
      if (this.user.tel != "") {
        this.count = this.count + 1;
      }
      if (this.user.jobNum != "") {
        this.count = this.count + 1;
      }
      //   parseInt(this.count / 6);
      this.width = ((this.count / 6) * 100).toFixed(2);
      this.count = 0;
    },
    update() {
      this.getRd();
      this.user = this.users;
      console.log(this.users.avatar);
      this.show = false;
    },
    getUser() {
      this.users = this.user;
    },
    choice() {
      this.zzc = true;
    },
    getSex(index) {
      this.users.gender = this.gender[index].sec;
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/personal/PersonalDetail.scss";
</style>
