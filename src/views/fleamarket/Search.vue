<template>
  <div class="bg">
    <div class="header">
      <router-link to="/homePage">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <input
        type="serch"
        id="serch"
        placeholder="请输入"
        v-model="keyword"
        @keyup="clear"
      />
      <button
        class="btn"
        @click="search"
      >
        <p>搜索</p>
      </button>
    </div>
    <div
      class="history"
      v-show="show"
    >
      <p>搜索发现</p>
      <div>
        <button
          v-for="(item, index) in tag"
          :key="index"
          @click="searchTag(item)"
        >
          {{ item }}
        </button>
      </div>
    </div>
    <div
      class="like"
      v-show="!show"
    >
      <div class="r-list">
        <div
          class="r-left"
          v-for="(item, index) in list"
          :key="index"
        >
          <div
            class="r-left-con"
            @click="gotoDetail(item.pkFleaGoodsId)"
          >
            <img :src="item.goodsImgUrl" />
            <span>{{ item.goodsName }}</span>
            <p>$ {{ item.goodsPrice }}</p>
            <div class="r-right">
              <div class="img-box">
                <img
                  :src="item.fleaUser.avatar"
                  alt=""
                />
              </div>
              <p>{{ item.fleaUser.nickname }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api.js");
export default {
  name: "Search",
  data() {
    return {
      path: "/search",
      keyword: "",
      start: 0,
      end: 10,
      list: [],
      page: [],
      count: 0,
      show: true,
      tag: []
    };
  },
  components: {},
  created() {
    this.getTag();
  },
  mounted() {},
  methods: {
    async search() {
      this.url = this.GLOBAL.baseUrl + "/flea/search";
      this.data = {
        content: this.keyword,
        currentPage: this.start,
        pageSize: this.end
      };
      this.result = (await API.init(this.url, this.data, "post")).data;
      this.list = this.result.fleaGoods.content;
      // console.log(this.list);
      this.show = false;
    },
    async getTag() {
      this.url = this.GLOBAL.baseUrl + "/flea/mark/top";
      this.tag = (await API.init(this.url, this.data, "post")).data;
      // console.log(this.tag);
    },
    clear() {
      if (this.keyword == "") this.show = true;
    },
    gotoDetail(id) {
      localStorage.setItem("path", JSON.stringify(this.path));
      this.$router.push({
        path: `/commoditydetails/${id}`
      });
      this.page[this.count] = id;
      this.count++;
      localStorage.setItem("page", JSON.stringify(this.page));
      localStorage.setItem("count", JSON.stringify(this.count));
      // this.page[this.count] = id;
      // this.count++;
      // this.getList();
    },
    searchTag(index) {
      this.keyword = index;
      this.search();
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/fleamarket/Search.scss";
</style>
