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
            <img :src="item.goodsImgUrl" />
            <span>{{ item.goodsDescription }}</span>
            <p>$ {{ item.goodsPrice }}</p>
            <div class="r-right">
              <div class="img-box">
                <img
                  src="https://kxingchen.oss-cn-shanghai.aliyuncs.com/develop/yhChen171427.jpg"
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
      listName: JSON.parse(localStorage.getItem("ListName"))
    };
  },
  components: {},
  created() {
    this.getList();
  },
  mounted() {},
  methods: {
    async getList() {
      let id = this.$route.params.id;
      this.data.typeId = id;
      console.log(this.data.typeId);
      this.url = "http://101.37.31.188:8080/flea/goods/type";
      this.list = (await API.init(this.url, this.data, "post")).data;
      //   this.likeList = (await API.init(this.url, this.data, "post")).data;
      console.log(this.list);
    },
    gotoComDetail(id) {
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
