<template>
  <div class=" bg">
    <div class="header">
      <router-link to="/metrocard">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        >
      </router-link>
      <p v-if="isTrue">挂失申请</p>
      <p v-if="!isTrue">挂失状态</p>

    </div>
    <div
      class="card cc-shadow cc-donghua"
      v-if="isTrue"
    >
      <input
        type="text"
        class="theme"
        v-model="password"
        placeholder="请输入卡密"
      >

      <textarea
        cols="5"
        placeholder="请输入备注"
        v-model="remark"
        class="content"
      ></textarea>

    </div>
    <div
      class="card1 cc-shadow cc-donghua"
      v-if="!isTrue"
    >
      <input
        type="text"
        class="theme"
        placeholder="挂失中的状态"
      >
      <input
        type="text"
        class="theme1"
        placeholder="卡密"
        v-model="password"
      >
      <textarea
        cols="5"
        placeholder="请输入备注"
        class="content"
        v-model="remark"
      ></textarea>

    </div>
    <div
      class="btn cc-df-center"
      @click="isTrue=!isTrue"
    >
      <p
        v-if="isTrue"
        @click="LossTo"
      >
        挂失
      </p>
      <p
        v-if="!isTrue"
        @click="cancelLost"
      >
        取消挂失
      </p>

    </div>

  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "LossCard",
  data() {
    return {
      isTrue: true,
      user: JSON.parse(localStorage.getItem("user")),
      password: "",
      remark: "",
      balance: ""
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    async LossTo() {
      this.url = this.GLOBAL.baseUrl + "/increase";
      this.data = {
        lossJobNumber: "",
        lossName: "",
        password: "",
        remark: ""
      };
      this.data.lossJobNumber = this.user.jobNumber;
      this.data.lossName = this.user.userName;
      this.data.password = this.password;
      this.data.remark = this.remark;
      this.result = await API.init(this.url, this.data, "post");
      this.balance = this.result.msg;
      console.log(this.balance);
    },
    async cancelLost() {
      this.url = this.GLOBAL.baseUrl + "/deletion";
      this.data = {
        lossJobNumber: "3",
        lossName: "",
        lossPhone: "",
        password: "123456",
        remark: ""
      };
      this.data.lossJobNumber = this.user.jobNumber;
      this.data.lossName = this.user.userName;
      this.data.lossPhone = this.user.phoneNumber;
      this.data.password = this.password;
      this.data.remark = this.remark;
      this.result = await API.init(this.url, this.data, "post");
      this.balance = this.result.msg;
      console.log(this.balance);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/card/LossCard.scss";
</style>
