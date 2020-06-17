<template>
  <div>
    <div class="container">
      <div class="header">
        <router-link to="/list">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
            alt=""
          />
        </router-link>
        <p>{{ listName }}</p>
      </div>
      <div class="r-list">
        <div
          class="r-left"
          v-for="(item, index) in list"
          :key="index"
        >
          <!-- <div
          class="r-left-con"
          @click="gotoDetail(item.pkFleaGoodsId)"
        >  -->
          <div
            class="r-left-con"
            @click="gotoComDetail(item.pkFleaGoodsId)"
          >
            <img :src="item.goodsImgUrl.split('--**--')[0]" />
            <span>{{ item.goodsDescription }}</span>
            <p>$ {{ item.goodsPrice }}</p>
            <div class="r-right">
              <div class="img-box">
                <img
                  :src="item.userAvatar"
                  alt=""
                />
              </div>
              <p>{{ item.nickname }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../../request/api.js");
export default {
  name: "ListDetail",
  data() {
    return {
      data: {
        currentPage: 0,
        pageSize: 100,
        typeId: ""
      },
      list: [],
      listName: JSON.parse(localStorage.getItem("ListName")),
      page: [],
      count: 0,
      path: "/listDetail/"
    };
  },
  components: {},
  created() {
    this.getList();
    // localStorage.setItem("path", JSON.stringify(this.path));
  },
  mounted() {},
  methods: {
    async getList() {
      let id = this.$route.params.id;
      this.data.typeId = id;
      // console.log(this.data.typeId);
      let path = this.path + id;
      this.url = this.GLOBAL.baseUrl + "/flea/goods/type";
      this.list = (await API.init(this.url, this.data, "post")).data;
      //   this.likeList = (await API.init(this.url, this.data, "post")).data;
      localStorage.setItem("path", JSON.stringify(path));
      // console.log(this.list);
    },
    gotoComDetail(id) {
      this.page[this.count++] = id;
      localStorage.setItem("page", JSON.stringify(this.page));
      localStorage.setItem("count", JSON.stringify(this.count));
      this.$router.push({
        path: `/commoditydetails/${id}`
      });
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/commodity/ListDetail.scss";
</style>
