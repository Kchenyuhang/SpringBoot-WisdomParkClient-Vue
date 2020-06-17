<template>
  <div class="bg">
    <div class="header">
      <router-link to="/layout">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt
        />
      </router-link>
      <p>图书馆</p>
    </div>
    <hr class="line" />
    <div class="book cc-df">
      <p class="font">已阅读</p>
      <p class="num">{{ result.sysBorrowReturnList.length+result.sysBorrowNoReturnList.length }}</p>
      <p class="font">本</p>
    </div>
    <div>
      <div class="title">
        <p>待还书记</p>
      </div>
    </div>
    <div
      v-for="(item, index) in result.sysBorrowNoReturnList"
      :key="index"
    >
      <div
        class="card"
        v-if="item.isReturned === false"
      >
        <div class="card1">
          <div>
            <p class="mid">{{ item.borrowBookName }}</p>
          </div>
          <div class="cc-df-between">
            <div>
              <p class="small">借阅日期：{{ item.gmtCreate.slice(0, 10) }}</p>
            </div>
            <div>
              <p class="small1">
                应还日期：{{ item.gmtModified.slice(0, 10) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="title">
      <p>历史借阅</p>
    </div>
    <div
      v-for="item in result.sysBorrowReturnList"
      :key="item.pkBorrowId"
    >
      <div class="card">
        <div class="card1">
          <div>
            <p class="mid">{{ item.borrowBookName }}</p>
          </div>
          <div class="cc-df-between">
            <div>
              <p class="small">借阅日期：{{ item.gmtCreate.slice(0, 10) }}</p>
            </div>
            <div>
              <p class="small">归还日期：{{ item.gmtModified.slice(0, 10) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api.js");
export default {
  name: "library",
  data() {
    return {
      url: "",
      show: false,
      result: [],
      count: 0,
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  components: {},
  created() {
    this.getList();
  },
  mounted() {},
  methods: {
    async getList() {
      this.url = this.GLOBAL.baseUrl + "/book/borrow";
      (this.data = {
        jobNumber: this.user.jobNumber
      }),
        (this.result = (await API.init(this.url, this.data, "post")).data);
      this.count = this.result.borrowCount;
      console.log(this.result);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/library/Library.scss";
</style>
