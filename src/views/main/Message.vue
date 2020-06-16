<template>
  <div class="bg">
    <div class="header">
      <router-link to="/layout">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>消息</p>
    </div>
    <div v-for="(item, index) in messages" :key="index">
      <div class="card cc-df">
        <div class="icon">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_tongzhi.png"
            alt=""
          />
        </div>

        <p>{{ item.content }}</p>
        <div class="time">
          <p>{{ item.gmtCreate }}</p>
        </div>
      </div>
      <hr class="line" />
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "message",
  data() {
    return {
      result: {},
      messages: [],
      page: 0,
    };
  },
  components: {},
  created() {
    this.selectMessage();
  },
  mounted() {},
  methods: {
    async selectMessage() {
      this.data = {
        currentPage: this.page,
        pageSize: 5
      };
      this.url = this.GLOBAL.baseUrl + "/message/all";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
      this.messages = this.result.data;
    },
  },
  computed: {},
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/message.scss";
.line {
  width: 100%;
}
.time p {
  margin-top: 100px;
}
</style>
