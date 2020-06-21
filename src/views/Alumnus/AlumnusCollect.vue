<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/alumnusIndex">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt=""
          />
        </router-link>
        <p>我的收藏</p>
      </div>
    </div>
    <div
      v-for="item in result"
      :key="item.id"
    >
      <div class="collect-card">
        <div class="row cc-df-between">
          <div class="left">
            <div class="left-top">
              <p>{{ item.content.slice(0, 60) }}...</p>
            </div>
            <div class="left-bottom">
              <img
                :src="item.userAvatar"
                alt=""
              />
              <div>
                <p>{{ item.nickname }}</p>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="right-top">
              <img
                :src="'https://images.weserv.nl/?url=' + item.picture[0]"
                @click="geturl(item.picture[0])"
              />
            </div>
            <div class="right-bottom cc-df-right">
              <div>
                <p>{{ item.gmtCreate }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="line" />
    </div>
  </div>
</template>

<script>
const API = require("../../request/api.js");
export default {
  name: "AlumnusCollect",
  data() {
    return {
      count: 5,
      result: []
    };
  },
  components: {},
  created() {
    this.getCollect();
  },
  mounted() {},
  methods: {
    async getCollect() {
      this.url = this.GLOBAL.baseUrl + "/dynamic/Collection";
      this.data = {
        currentPage: 0,
        field: "1",
        pageSize: this.count
      };
      this.result = (await API.init(this.url, this.data, "post")).data;
      console.log(this.result);
    },
    geturl(a) {
      console.log(a);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/AlumnusCollect.scss";
</style>
