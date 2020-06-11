<template>
  <div class="bg">
    <!-- 顶部部分 -->
    <div class="header" style="color: #ffffff;">
      <p @click="go">取消</p>
      <p>新建好友</p>
      <p>保存</p>
    </div>
    <img
      src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/用户 (1).png"
      alt="头像"
    />
    <!-- 中间内容部分 -->
    <div class="content">
    <div class="card">
        <input type="text" placeholder="备注" />
        <hr class="line" />
      </div>
      <div class="card">
        <input type="text" placeholder="手机号" />
        <hr class="line" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InsertAddressBook",
  data() {
    return {};
  },
  created() {},
  methods: {
    go() {
      this.$router.push("/addressbook");
    },
  },
  components: {},
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/InsertAddressBook.scss";
</style>
