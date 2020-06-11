<template>
  <div class="bg">
    <div class="header">
      <router-link to="/errandshomepage">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>收件信息</p>
    </div>
    <div class="destinationDiv">
      <div class="orginput">
        <router-link to="/address">
          <input
            class="inputtext"
            type="text"
            placeholder="送到哪里"
            @click="into(3)"
            v-model="this.address1"
          />
        </router-link>
        <hr class="line" />
      </div>
      <div class="orginput">
        <input
          class="inputtext1"
          type="text"
          placeholder="填写楼号,单元,门牌号,送达更快"
          v-model="desinfo"
        />
        <hr class="line" />
      </div>
      <div class="userinfoput">
        <input
          class="nameput"
          type="text"
          placeholder="收件人姓名"
          v-model="desname"
        />
        <p>|</p>
        <input
          class="numput"
          type="text"
          placeholder="收件人手机号"
          v-model="desnumber"
        />
      </div>
      <hr class="line" />
    </div>
    <button class="btn" @click="insert">确定</button>
  </div>
</template>

<script>
const API = require("../../../request/api");
export default {
  name: "DestinationAdress",
  data() {
    return {
      desinfo: "",
      desname: "",
      desnumber: "",
      address: this.$store.state.address,
      address1: this.$store.state.address1,
      userId: this.$store.state.user.pkUserAccountId,
      result: [],
    };
  },
  created() {},
  components: {},
  methods: {
    into(index) {
      localStorage.setItem("type", index);
      this.$store.commit("setType", index);
    },
    async insert() {
      this.data = {
        founderId: 1,
        originAddress: this.address,
        olongitude: "33.6",
        odimension: "33.6",
        destination: this.address1,
        dlongitude: "22.3",
        ddimension: "22.3",
        deliveryTime: "2020-06-01 10:12:05",
        amount: 1,
        receiverName: this.desname,
        receiverPhoneNumber: this.desnumber,
        remark: "没有备注",
        type: "文件",
        priceRang: "0-100",
      };
      this.url = this.GLOBAL.baseUrl + "/errands/order";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/errands/adressorder/DestinationAdress.scss";
</style>
