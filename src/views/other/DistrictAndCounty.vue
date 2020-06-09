<template>
  <div class="bg">
    <div class="header">

        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
          @click="out()"
        >
      <p>设置地址</p>
    </div>
    <div class="cc-col card">
         <div v-for="(item,index) in citys" :key="index">
             <div class="cc-df-between subCard" @click="updateAddress(index)">
               <p>{{item}}</p>
             </div>
             <hr class="line">
         </div>
    </div>
  </div>
</template>


<script>
const API = require("../../request/api");
import provinces from '../../assets/js/city'
export default {
  name: "update",
  data() {
    return {
      dis: true,
      user: this.$store.state.user,
      token: this.$store.state.token,
      nicknameInput: this.$store.state.user.nickname,
      url: "",
      data: {},
      citys:[]
    };
  },
  components: {},
  created() {
    this.citys=provinces[this.$route.params.Id.split(',')[0]].city[this.$route.params.Id.split(',')[1]].districtAndCounty;
  },
  mounted() {},
  methods: {
      out(){
          this.$router.push({name: 'City', params: {Id: this.$route.params.Id.split(',')[0],Address:provinces[this.$route.params.Id.split(',')[0]].name}})
      },
    async updateAddress(index) {
      this.url = this.GLOBAL.baseUrl + "/user/update/info";
      this.data = {
        avatar: this.user.avatar,
        gender: this.user.gender,
        nickname: this.user.nickname,
        pkUserAccountId: this.user.pkUserAccountId,
        address: this.$route.params.City + "-" + this.citys[index]
      };

        this.result = await API.init(this.url, this.data, "put");
        if (this.result.msg == "成功") {
          localStorage.setItem("user", JSON.stringify(this.result.data));
          this.$store.commit("setUser", this.result.data);
          this.$router.push("/base");
        }  
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/other/address.scss";
</style>
