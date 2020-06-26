<template>
  <div>
    <div class="header">
      <router-link to="/fleamy">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>我发布的</p>
    </div>
    <div class="container">
      <div
        class="box"
        v-for="(item, index) in send"
        :key="index"
        @click="gotoDetail(item.goodsId)"
      >
        <div class="left">
          <img :src="item.goodsImgUrl.split('--**--')[0]" />
        </div>
        <div class="right">
          <p class="title">{{ item.goodsName.slice(0, 7) }}...</p>
          <div class="chip-item">
            <p class="des">{{ item.goodsDescription.slice(0, 5) }}</p>
          </div>
          <p class="price">￥{{ item.goodsPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const API = require("../../../request/api.js");
export default {
  name: "Personal",
  data() {
    return {
      goodsId: 0,
      send: [],
      user: JSON.parse(localStorage.getItem("FleaUser")),
      lastPath: JSON.parse(localStorage.getItem("path"))
    };
  },
  components: {},
  created() {
    this.getSend();
  },
  mounted() {},
  methods: {
    async getSend() {
      // let id = this.$route.params.id;
      this.url = this.GLOBAL.baseUrl + "/flea/users/release";
      this.data = {
        currentPage: 1,
        pageSize: 10,
        pkFleaUserId: this.user.pkFleaUserId,
      };
      this.send = (await API.init(this.url, this.data, "post")).data.content;
      console.log(this.send);
    },
    gotoDetail(id) {
      this.lastPath[this.lastPath.length] = "/commoditydetails/" + id;
      localStorage.setItem("path", JSON.stringify(this.lastPath));
      this.$router.push({
        path: `/commoditydetails/${id}`,
      });
    },
  },

  computed: {},
};
</script>
<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/my/MyRealease.scss";
</style>
