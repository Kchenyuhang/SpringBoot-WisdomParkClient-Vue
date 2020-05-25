<template>
  <div class=" bg">
    <div class="header">
      <router-link to="/my">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        >
      </router-link>
      <p>意见反馈</p>

    </div>
    <div class="card cc-shadow cc-donghua">
      <input
        type="text"
        class="theme"
        placeholder="反馈主题"
      >

      <textarea
        cols="5"
        placeholder="反馈内容"
        class="content"
      ></textarea>
      <input
        type="text"
        placeholder="联系方式（选填）"
        class="theme"
      >

    </div>
    <div class="btn">
      <p>
        反馈
      </p>

    </div>

  </div>
</template>

<script>
export default {
  name: "Feedback",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
.bg {
  background-color: #f5f7fb;
  height: 900px;
  width: 100%;
}
.header {
  background-color: #ffffff;
  height: 40px;
  display: flex;
}
.header img {
  height: 20px;
  width: 20px;
  margin-top: 10px;
  margin-left: 5px;
}
.header p {
  font-size: 18px;
  font-weight: 550;
  margin-left: 34%;
  margin-top: 2%;
}
.card {
  width: 95%;
  margin: auto;
  margin-top: 10px;
  background: white;
  height: 40%;
  border-radius: 5px;
}
.theme {
  width: 94%;
  outline-style: none;
  border: 0px;
  margin-left: 3%;
  margin-top: 3%;
  background-color: #e6e6e6;
  padding: 14px 14px;
}
.content {
  width: 94%;
  outline-style: none;
  border: 0px;
  margin-left: 3%;
  margin-top: 5%;
  background-color: #e6e6e6;
  padding: 14px;
  height: 180px;
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  color: #808080;
}
.btn {
  width: 60%;
  height: 50px;
  background-color: #46abf1;
  border: none;
  font-size: 16px;
  border-radius: 5px;
  margin: auto;
  margin-top: 20%;
  position: relative;
}
.btn p {
  font-size: 16px;
  color: #ffffff;
  position: absolute;
  left: 42%;
  top: 30%;
}
</style>
