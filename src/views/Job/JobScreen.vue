<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/position">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/cha.png"
            alt=""
          >
        </router-link>
        <p>筛选</p>
      </div>
    </div>
    <div class="screen-card">
      <div class="screen-title">
        <p>工作类型</p>
      </div>
      <div class="screen-body cc-df-warp">
        <div
          v-for="(item,index) in types"
          :key="index"
        >
          <div class="screen-type cc-mright cc-df-center" @click="intoDetail(item.pkJobTypeId)">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer">
      <div class="footer-bin cc-df-between">
        <div class="footer-bin-clear cc-df-center">
          <p>清除</p>
        </div>
        <div class="footer-bin-sure cc-df-center">
          <p>确定</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "JobScreen",
  data() {
    return {
      types: []
    };
  },
  components: {},
  created() {
    this.selectType();
  },
  mounted() {},
  methods: {
    intoDetail(index){
      console.log(index)
      this.$router.push({
        name: "JobScreenDetails",
        params: { Name: index }
      });
    },
    async selectType() {
      this.url = this.GLOBAL.baseUrl + "/jobType/list";
      this.result = await API.init(this.url, null, "post");
      this.types = this.result.data;
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/Job/JobScreen.scss";
</style>
