<template>
  <div class=" bg">
    <div class="header">
      <router-link to="/my">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>意见反馈</p>
    </div>
    <div class="card cc-shadow cc-donghua">
      <input type="text" class="theme" placeholder="反馈主题" v-model="title" />

      <textarea
        cols="5"
        placeholder="反馈内容"
        class="content"
        v-model="content"
      ></textarea>
      <input
        type="text"
        placeholder="联系方式（选填）"
        class="theme"
        v-model="contactWay"
      />
    </div>
    <div class="btn" @click="feedback()">
      <p>
        反馈
      </p>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "Feedback",
  data() {
    return {
      title: "",
      content: "",
      contactWay: ""
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    async feedback() {
      this.url = this.GLOBAL.baseUrl + "/user/feedback";
      this.data = {
        contactWay: this.contactWay,
        content: this.content,
        title: this.title
      };
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result.msg);
      if (this.result.msg == "成功") {
        this.$router.push("/my");
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/person/Feedback.scss";
</style>
