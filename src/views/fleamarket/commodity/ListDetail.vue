<template>
  <div>
    <div class="container">
      <div class="header">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
          @click="goBack()"
        />
        <p>{{ listName }}</p>
      </div>
      <div class="r-list">
        <div class="r-left" v-for="(item, index) in list" :key="index">
          <!-- <div
          class="r-left-con"
          @click="gotoDetail(item.pkFleaGoodsId)"
        >  -->
          <div class="r-left-con" @click="gotoComDetail(item.pkFleaGoodsId)">
            <img :src="item.goodsImgUrl.split('--**--')[0]" />
            <div class="r-left-con-div">
              <span>
                {{ item.goodsDescription.slice(0, 10) }}
              </span>
            </div>
            <p>¥ {{ item.goodsPrice }}</p>


            <div class="r-right">
              <div class="img-box">
                <img :src="item.userAvatar" alt="" />
              </div>
              <div>
                <p class="nick">{{ item.nickname }}</p>
              </div>
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
      repath: JSON.parse(localStorage.getItem("path")),
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
    goBack() {
      this.repath.splice(this.repath.length - 1, 1);
      this.$router.push(this.repath[this.repath.length - 1]);
      localStorage.setItem("path", JSON.stringify(this.repath));
    },
    async getList() {
      let id = this.$route.params.id;
      this.data.typeId = id;
      // console.log(this.data.typeId);
      this.url = this.GLOBAL.baseUrl + "/flea/goods/type";
      this.list = (await API.init(this.url, this.data, "post")).data;
      //   this.likeList = (await API.init(this.url, this.data, "post")).data;
      // console.log(this.list);
    },
    gotoComDetail(id) {
      this.repath[this.repath.length] = "/listDetail/" + this.$route.params.id;
      localStorage.setItem("path", JSON.stringify(this.repath));
      this.repath[this.repath.length] = "/commoditydetails/" + id;
      localStorage.setItem("path", JSON.stringify(this.repath));
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
