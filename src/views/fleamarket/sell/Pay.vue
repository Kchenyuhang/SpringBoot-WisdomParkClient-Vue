<template>
  <div>
    <div class="header">
      <img
        src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
        alt=""
        @click="backto()"
      />
      <p>购买宝贝</p>
    </div>
    <div class="container">
      <div class="r-inform">
        <div class="r-left">
          <img :src="seller[0].goodsImgUrl.split('--**--')[0]" />
        </div>
        <div class="r-right">
          <h5>{{ seller[0].goodsName }}</h5>
          <p>{{ seller[0].username }}</p>
          <!-- <p>{{ seller[0].goodsMark }}</p> -->
          <p>{{ seller[0].goodsDescription }}</p>
          <span>¥ {{ seller[0].goodsPrice }}</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>实付款：¥ {{ seller[0].goodsPrice }}</p>
    </div>
    <button @click="doList">确定</button>
  </div>
</template>
<script>
const API = require("../../../request/api.js");
export default {
  name: "Pay",
  data() {
    return {
      user: JSON.parse(localStorage.getItem("FleaUser")),
      page: JSON.parse(localStorage.getItem("page")),
      count: JSON.parse(localStorage.getItem("count")),
      seller: [
        {
          goodsImgUrl: "",
          goodsName: "",
          goodsDescription: "",
          goodsPrice: 0,
          username: "",
          goodsMark: ""
        }
      ]
    };
  },
  components: {},
  created() {
    // this.getRandow();
    this.getSeller();
  },
  mounted() {},
  methods: {
    async doList() {
      this.url = this.GLOBAL.baseUrl + "/flea/order/increased";
      this.url1 = this.GLOBAL.baseUrl + "/flea/goods/delete";
      let rand = Math.ceil(Math.random() * 100000000);
      this.data = {
        fleaGoodsPkFleaGoodsId: this.page,
        fleaUserBuyerPkFleaUserId: this.user.pkFleaUserId,
        fleaUserSellerPkFleaUserId: this.seller[0].pkFleaUserId,
        pkFleaOrderId: rand
      };
      console.log(this.data);
      this.result = (await API.init(this.url, this.data, "post")).data;
      this.goodData = {
        pkFleaGoodsId: this.page
      };
      this.return = (await API.init(this.url1, this.goodData, "post")).data;
      if (this.result == "OK") {
        this.$router.push({
          path: `/personal/${this.user.pkFleaUserId}`
        });
      } else this.doList();
    },
    async getSeller() {
      this.url = this.GLOBAL.baseUrl + "/flea/goods/id";
      this.data = {
        pkFleaGoodsId: this.page
      };
      this.seller = (await API.init(this.url, this.data, "post")).data;
      // console.log(this.seller);
    },
    // getRandow() {
    //   Math.ceil(Math.random() * 1000000000000);
    // },
    backto() {
      this.$router.push("/commoditydetails/" + this.page);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/pay/pay.scss";
@import "../../../assets/scss/person/Base.scss";
</style>
