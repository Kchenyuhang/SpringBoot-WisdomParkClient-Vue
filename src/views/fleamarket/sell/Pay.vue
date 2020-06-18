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
          <p>{{ seller[0].goodsMark }}</p>
          <p>{{ seller[0].goodsDescription }}</p>
          <span>¥ {{ seller[0].goodsPrice }}</span>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>实付款：{{ seller[0].goodsPrice }}</p>
      <!-- <p>优惠：0000</p> -->
    </div>
    <button @click="doList">确定</button>
  </div>
</template>
<script>
// import { get } from "../../../request/http";
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
        fleaGoodsPkFleaGoodsId: this.page[0],
        fleaUserBuyerPkFleaUserId: this.user.pkFleaUserId,
        fleaUserSellerPkFleaUserId: this.seller[0].pkFleaUserId,
        pkFleaOrderId: rand
      };
      console.log(this.data);
      this.result = (await API.init(this.url, this.data, "post")).data;
      this.goodData = {
        pkFleaGoodsId: this.page[0]
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
      if (this.count <= 0) {
        this.count == 0;
        this.data = {
          pkFleaGoodsId: this.page[this.count]
        };
      } else
        this.data = {
          pkFleaGoodsId: this.page[--this.count]
        };
      this.seller = (await API.init(this.url, this.data, "post")).data;
      // console.log(this.seller);
    },
    // getRandow() {
    //   Math.ceil(Math.random() * 1000000000000);
    // },
    backto() {
      this.$router.push("/commoditydetails/" + this.page);
      let c = [];
      localStorage.setItem("page", JSON.stringify(c));
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/pay/pay.scss";
@import "../../../assets/scss/person/Base.scss";
.container {
  display: flex;
  height: 140px;
  width: 100%;
  margin-top: 10px;
}
.r-inform {
  width: 98%;
  height: 140px;
  margin-left: 4px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 1px 4px rgba(223, 27, 27, 0.6);
}
.r-left {
  width: 40%;
  height: 140px;
  float: left;
  // background-color: black;
}
.r-left img {
  border-radius: 10px;
}
.r-right {
  float: right;
  width: 58%;
  margin-left: 5px;
}
.r-right h5 {
  font-weight: bold;
}
.r-right p {
  font-size: 10px;
  color: #b9b7c9;
  margin-top: 3px;
}
.r-right span {
  display: flex;
  font-size: 13px;
  color: red;
  margin-top: 30px;
}
.r-right h6 {
  display: flex;
  margin-left: 160px;
}
.line {
  width: 100%;
  border: none;
  height: 1px;
  background: gray;
  margin-top: 15px;
  margin-bottom: 15px;
}
.address {
  width: 100%;
}
.footer {
  width: 75%;
  height: 60px;
  margin-top: 450px;
  //   background-color: gray;
}
button {
  height: 60px;
  width: 25%;
  float: right;
  border: none;
  margin-top: -90px;
  background-color: red;
}
</style>
