<template>
  <div class="bg">
    <div class="header">
      <img
        src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
        alt=""
        @click="out()"
      />
      <p>设置地址</p>
    </div>
    <div class="cc-col card">
      <div v-for="(item, index) in citys" :key="index">
        <div class="cc-df-between subCard" @click="into(index)">
          <p>{{ item }}</p>
        </div>
        <hr class="line" />
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
import provinces from "../../assets/js/city";
export default {
  name: "update",
  data() {
    return {
      pkUserAccountId1: this.$store.state.user.pkUserAccountId,
      dis: true,
      user: this.$store.state.user,
      token: this.$store.state.token,
      type: this.$store.state.type,
      nicknameInput: this.$store.state.user.nickname,
      url: "",
      data: {},
      citys: [],
      result1: []
    };
  },
  components: {},
  created() {
    this.citys =
      provinces[this.$route.params.Id.split(",")[0]].city[
        this.$route.params.Id.split(",")[1]
      ].districtAndCounty;
  },
  mounted() {},
  methods: {
    out() {
      this.$router.push({
        name: "City",
        params: {
          Id: this.$route.params.Id.split(",")[0],
          Address: provinces[this.$route.params.Id.split(",")[0]].name,
        },
      });
    },
    into(index) {
      if (this.type == 1) {
        this.updateAddress(index);
      }
      if (this.type == 2) {
        this.orgin(index);
        this.$router.push("/originadress");
      }
       if (this.type == 3) {
        this.orgin1(index);
        this.$router.push("/destinationadress");
      }
    },
    orgin1(index) {
      localStorage.setItem(
        "address1",
        this.$route.params.City + "-" + this.citys[index]
      );
      this.$store.commit(
        "setAddress1",
        this.$route.params.City + "-" + this.citys[index]
      );
    },
    orgin(index) {
      localStorage.setItem(
        "address",
        this.$route.params.City + "-"+ this.citys[index]
      );
      this.$store.commit(
        "setAddress",
        this.$route.params.City + "-"+ this.citys[index]
      );
    },
    async updateAddress(index) {
      this.url = this.GLOBAL.baseUrl + "/user/update/info";
      this.data = {
        avatar: this.user.avatar,
        gender: this.user.gender,
        nickname: this.user.nickname,
        pkUserAccountId: this.user.pkUserAccountId,
        address: this.$route.params.City + "-" + this.citys[index],
      };

      this.result = await API.init(this.url, this.data, "post");
      if (this.result.msg == "成功") {
        await this.selectUser();
        this.$router.push("/base");
      }
    },
    async selectUser() {
      this.data = {
        field: this.pkUserAccountId1
      };
      this.url = this.GLOBAL.baseUrl + "/user/single/id";
      this.result1 = await API.init(this.url, this.data, "post");
      console.log(this.result1);
      localStorage.setItem("user", JSON.stringify(this.result1));
      this.$store.commit("setUser", this.result1);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/other/address.scss";
</style>
