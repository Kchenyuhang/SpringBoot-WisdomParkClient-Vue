<template>
  <div class="bg">
    <div class="header">
      <router-link to="/fleaMy">
        <img
          class="icon"
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <div class="inform">
        <div class="top">
          <div class="left">
            <div class="card">
              <img
                class="img"
                src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/3.jpg"
              />
              <div class="mes">
                <p class="wid">用户名称</p>
                <p class="nickname">用户昵称：xxxx</p>
              </div>
            </div>
          </div>
          <div class="right">
            <router-link to="/personaldetail">
              <div class="btn">
                <p>编辑资料</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p> 1234天前来过</p>
        <p>个人简介</p>
      </div>
      <div class="count">
        <div class="tab">
          <div @click="isShow = 1">
            <p :class="{ blueLine: isShow == 1 }">发布1</p>
          </div>
          <div @click="isShow = 2">
            <p :class="{ blueLine: isShow == 2 }">评价0</p>
          </div>
          <div @click="isShow = 3">
            <p :class="{ blueLine: isShow == 3 }">收藏0</p>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="box">
        <div class="left">
          <img src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/3.jpg" />
        </div>
        <div class="right">
          <p class="title">商品名</p>
          <p class="des">描述</p>
          <p class="price">￥价格</p>
          <div class="com">
            <img
              class="icon"
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/cc-message.png"
            />
            <p class="mes">10</p>
          </div>
        </div>
      </div>
      <div class="send">
        <div class="round">
          <img
            class="icon"
            src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/add.png"
          />
          <p>发布</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personal",
  data() {
    return {
      isShow: 1
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/personal/Personal.scss";
</style>
