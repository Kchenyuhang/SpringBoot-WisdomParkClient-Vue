<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/alumnusindex">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt
          />
        </router-link>
        <p>动态详情</p>
      </div>
    </div>
    <div class="body" v-for="(item, index) in result" :key="index">
      <p>{{ item.type }}</p>
    </div>
    <div class="input">
      <div class="inp cc-df-center">
        <textarea
          name
          id
          cols="30"
          rows="1"
          style="font-size: 14px;padding-top:10px"
          v-model="msg"
          class="test"
          placeholder="请输入评论内容"
        ></textarea>
      </div>
      <div class="btn cc-df-center"><p>发送</p></div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "DongtaiDetails",
  data() {
    return {
      result: [],
      msg: "",
      id: this.$route.params.Id
    };
  },
  components: {},
  created() {
    this.Dongtai();
  },
  mounted() {},
  methods: {
    async Dongtai() {
      this.data = {
        id: this.id
      };
      this.url = this.GLOBAL.baseUrl + "/dynamic/";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
      // this.messages = this.result.data;
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/DongtaiDetails.scss";
</style>
