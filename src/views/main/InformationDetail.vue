<template>
  <div>
    <div class="header">
      <router-link to="/information">
        <img
          class="icon"
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt
        />
      </router-link>
      <p>详情</p>
    </div>
    <div class="body">
      <div class="image">
        <img :src="'https://images.weserv.nl/?url='+information.cover" alt />
      </div>
      <div class="title">
        <p>{{ information.title }}</p>
      </div>
      <div class="article">
        <!-- <p>
          {{ information.text }}
        </p>-->
        <div v-html="information.text"></div>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api.js");
export default {
  name: "InformationDetail",
  data() {
    return {
      id: this.$route.params.Id,
      information: {}
    };
  },
  components: {},
  created() {
    this.selectInformation();
  },
  mounted() {},
  methods: {
    async selectInformation() {
      this.url = this.GLOBAL.baseUrl + "/info/single";
      this.data = {
        id: this.id
      };
      this.result = (await API.init(this.url, this.data, "post")).data;
      this.information = this.result;
      console.log(this.result);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/InformationDetail.scss";
</style>
