<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/alumnusIndex">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png" alt />
        </router-link>
        <p>我的收藏</p>
      </div>
    </div>
    <div v-for="(item,index) in results" :key="(index)">
      <div class="collect-card">
        <div class="row cc-df-between">
          <div class="left">
            <div class="left-top">
              <p>{{ item.content.slice(0, 40) }}...</p>
            </div>
            <div class="left-bottom">
              <img :src="item.userAvatar" alt />
              <div>
                <p>{{ item.nickname }}</p>
              </div>
              <div class="btn" @click="dele(item.pkCollectionId,index)">
                <div>
                  <p>删除</p>
                </div>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="right-top" v-if="item.picture.length>=1">
              <img
                :src="'https://images.weserv.nl/?url=' + item.picture[0]"
                @click="geturl(item.picture[0])"
              />
            </div>
            <div class="right-top" v-if="item.picture.length<1">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/wutupian.png
"
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
      results: []
    };
  },
  components: {},
  created() {
    this.getCollect();
  },
  mounted() {},
  methods: {
    async dele(id, index) {
      console.log(id, index);
      this.url = this.GLOBAL.baseUrl + "/dynamic/Collection/deletion";
      this.data = {
        id: id
      };
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
      this.results.splice(index, 1);
      console.log(this.results);
    },
    async getCollect() {
      this.url = this.GLOBAL.baseUrl + "/dynamic/Collection";
      this.data = {
        currentPage: 0,
        field: "1",
        pageSize: 100
      };
      this.results = (await API.init(this.url, this.data, "post")).data;
      console.log(this.results);
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
