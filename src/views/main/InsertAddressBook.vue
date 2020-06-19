<template>
  <div class="bg">
    <!-- 顶部部分 -->
    <div class="header" style="color: #ffffff;">
      <p @click="go">取消</p>
      <p>新建好友</p>
      <p @click="insert">保存</p>
    </div>
    <img
      src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/用户 (1).png"
      alt="头像"
    />
    <!-- 中间内容部分 -->
    <div class="content">
      <div class="card">
        <input type="text" placeholder="备注" v-model="remark" />
        <hr class="line" />
      </div>
      <div class="card">
        <input
          type="number"
          placeholder="手机号"
          v-model="phoneNumber"
          oninput="if(value.length>5)value=value.slice(0,11)"
          maxlength="11"
        />
        <hr class="line" />
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "InsertAddressBook",
  data() {
    return {
      userId: this.$store.state.user.pkUserAccountId,
      remark: "",
      phoneNumber: "",
      result: []
    };
  },
  created() {
    console.log(this.userId);
  },
  methods: {
    go() {
      this.$router.push("/addressbook");
    },
    async insert() {
      this.data = {
        avatar:
          "https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/用户 (1).png",
        phoneNumber: this.phoneNumber,
        remark: this.remark,
        userId: this.userId
      };
      this.url = this.GLOBAL.baseUrl + "/addressBook";
      this.result = await API.init(this.url, this.data, "post");
      this.$router.push("/addressbook");
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/InsertAddressBook.scss";
</style>
