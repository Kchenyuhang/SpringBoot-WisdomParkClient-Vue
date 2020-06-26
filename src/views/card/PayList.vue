<template>
  <div class="bg">
    <div class="header">
      <router-link to="/metrocard">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png" alt />
      </router-link>
      <p>消费明细</p>
    </div>
    <hr class="line" />
    <div v-for="item in customers" :key="item">
      <div class="card cc-df-between">
        <div class="cc-df-warp pay">
          <div>
            <p class="mid">{{ item.description }}</p>
          </div>
          <div>
            <p class="small">{{ item.gmtCreate }}</p>
          </div>
        </div>
        <div>
          <div class="add">
            <p>+{{ item.orderMoney }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "paylist",
  data() {
    return {
      // 获取用户卡号
      jobNumber: this.$store.state.user.jobNumber,
      result: [],
      customers: []
    };
  },
  components: {},
  created() {
    this.customer();
  },
  mounted() {},
  methods: {
    async customer() {
      this.data = {
        field: this.jobNumber
      };
      this.url = this.GLOBAL.baseUrl + "/card/consume";
      this.result = await API.init(this.url, this.data, "post");
      this.customers = this.result.data;
      console.log(this.customers);
      this.customers.sort(function(a, b) {
        return (
          Date.parse(b.gmtCreate.replace(/-/g, "/")) -
          Date.parse(a.gmtCreate.replace(/-/g, "/"))
        );
      });
      console.log(this.customers);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/card/PayList.scss";
</style>
