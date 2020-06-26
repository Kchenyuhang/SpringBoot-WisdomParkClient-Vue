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
    <div class="body">
      <div class="dongtai-card">
        <div class="dongtai-avatar">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/zyj.jpg"
            alt=""
          />
        </div>
        <div class="dongtai-content">
          <div class="row cc-df-between">
            <div class="row">
              <div class="name">
                <p>123</p>
              </div>
              <div class="fenge cc-df-center">
                <p>·</p>
              </div>
              <div class="time">
                <p>时间</p>
              </div>
            </div>
          </div>
          <div class="article">
            <p>123...</p>
          </div>
          <div class="image">
            <div class="avatar-2">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/zyj.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="image cc-df-warp">
            <div class="avatar-2">
              <img src="" alt="" />
            </div>
          </div>
          <div class="image cc-df-warp">
            <div class="avatar-2">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pinlun">
      <div class="all">
        <p>共2条评论</p>
      </div>
      <div v-for="item in 3" :key="item.id">
        <div class="pinlun-content">
          <div class="avatar">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/zyj.jpg"
              alt=""
            />
          </div>
          <div class="content-row">
            <div class="pinlun-content1">
              <div class="name">
                <p>123</p>
              </div>
              <div class="fenge cc-df-center">
                <p>·</p>
              </div>
              <div class="time">
                <p>时间</p>
              </div>
            </div>
            <div class="pinlun-content2">
              <p>评论内容</p>
            </div>
          </div>
          <div class="dianzan">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/icon_dianzan.png"
              alt=""
            />
          </div>
        </div>
      </div>
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
      user: [],
      comment: [],
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
      this.url = this.GLOBAL.baseUrl + "/dynamic/";
      this.data = {
        id: this.id
      };
      this.result = (await API.init(this.url, this.data, "post")).data;
      console.log(this.result);
      // this.messages = this.result.data;
      this.user = this.result.userAccount;
      this.comment = this.result.commentVoList;
      console.log(this.user);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/DongtaiDetails.scss";
</style>
