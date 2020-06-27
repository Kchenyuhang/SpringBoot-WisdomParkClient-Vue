<template>
  <div class="bg">
    <div class="header">
      <router-link to="/my">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt
        />
      </router-link>
      <p>基本信息</p>
    </div>
    <div class="card cc-shadow">
      <router-link to="/update">
        <div class="cc-df-between row">
          <div>
            <p class="nick">昵称</p>
          </div>
          <div>
            <p class="nickname">{{ user.nickname }}</p>
          </div>
        </div>
      </router-link>
      <hr class="line" />
      <router-link to="/gender">
        <div class="cc-df-between row1">
          <div>
            <p class="nick">性别</p>
          </div>
          <div class="cc-df-right">
            <p class="nickname cc-mright">{{ user.gender }}</p>
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt="右箭头"
              class="nickimg"
            />
          </div>
        </div>
      </router-link>
      <hr class="line" />
      <router-link to="/address">
        <div class="cc-df-between row1" @click="into(1)">
          <div class="address">
            <p class="nick">地址</p>
          </div>
          <div class="cc-df-right">
            <p class="nickname cc-mright">{{ user.address }}</p>
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt="右箭头"
              class="nickimg"
            />
          </div>
        </div>
      </router-link>
      <hr class="line" />
      <router-link to="/olderphone">
        <div class="cc-df-between row1">
          <div>
            <p class="nick">手机号</p>
          </div>
          <div>
            <p class="nickname">{{ user.phoneNumber }}</p>
          </div>
        </div>
      </router-link>
      <hr class="line" />
      <div class="cc-df-between row1">
        <div>
          <p class="nick">学号</p>
        </div>
        <div>
          <p class="nickname">{{ user.jobNumber }}</p>
        </div>
      </div>
      <hr class="line" />
      <div class="cc-df-between row1">
        <div>
          <p class="nick">班级</p>
        </div>
        <div>
          <p class="nickname">软件1851</p>
        </div>
      </div>
      <hr class="line" />
      <div class="cc-df-between row1" @click="into(1)">
        <div class="address">
          <p class="nick" @click="qq">QQ</p>
        </div>
        <div class="cc-df-right">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
            alt="右箭头"
            class="nickimg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "Base",
  data() {
    return {
      user: this.$store.state.user,
      token: this.$store.state.token,
      openid: ""
    };
  },
  components: {},
  created() {
    let openid = this.$route.query.openid;
    if (openid != null) {
      this.openid = openid;
      this.qqBanding(this.$store.state.user.jobNumber, openid);
    } else {
      if (localStorage.getItem("token") === null) {
        this.$router.push("/base");
      }
    }
  },
  mounted() {},
  methods: {
    into(index) {
      localStorage.setItem("type", index);
      this.$store.commit("setType", index);
    },
    qq() {
      window.location.href =
        "https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101883898&redirect_uri=http%3A%2F%2Fwww.ntt1914866205.xyz%2Fconnect&state=e9e3f9ee0f10480b927b25eae8f32776";
    },
    async qqBanding(jobNumber, openid) {
      let url = this.GLOBAL.baseUrl + "/LoginAccount/increased";
      let data = {
        jobNumber: jobNumber,
        qqOpenId: openid
      };
      await API.init(url, data, "post");
      alert("绑定成功");
      this.$router.push("/my");
    },
    async updatedQQ() {
      //更新需要先删除,再重新绑定
      let url = this.GLOBAL.baseUrl + "/LoginAccount/deleted";
      let data = {
        field: this.$store.state.user.jobNumber
      };
      alert(data.jobNumber);
      let res = await API.init(url, data, "post");
      if (res.data == "ok") {
        this.qq();
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/person/Base.scss";
</style>
