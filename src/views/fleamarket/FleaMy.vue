<template>
  <div class="bg">
    <div class="header">
      <div class="icon">
        <img src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/settings.png" />
      </div>
      <div class="inform">
        <div class="left">
          <div class="card">
            <img
              class="img"
              :src="user.avatar"
            />
            <div class="mes">
              <p class="wid">{{ user.username }}</p>
              <p>昵称：{{ user.nickname }}</p>
            </div>
          </div>
        </div>
        <div class="right">
          <div
            class="btn"
            @click="gotoUserDetail(user.pkFleaUserId)"
          >
            <p>个人主页></p>
          </div>
        </div>
      </div>
      <div class="count">
        <div
          class="tab"
          v-for="(item, index) in navList"
          :key="index"
          :class="{ active: !(index - menuIndex) }"
          @click="menuShow(index)"
        >
          <li>{{ item }}</li>
          <!-- <div @click="isShow = 1" class="tp">
            <p :class="{ blueLine: isShow == 1 }">{{ item }}</p>
          </div> -->
          <!-- <div @click="isShow = 2">
            <p :class="{ blueLine: isShow == 2 }">购买0</p>
          </div> -->
          <!--<div @click="isShow = 3">
            <p :class="{ blueLine: isShow == 3 }">评价0</p>
          </div>
          <div @click="isShow = 4">
            <p :class="{ blueLine: isShow == 4 }">收藏0</p>
          </div> -->
        </div>
      </div>
    </div>

    <div v-show="menuIndex == 0">
      <div class="container">
        <div class="r-inform">
          <div class="r-left">
            <img
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/3.jpg"
              alt=""
            />
          </div>
          <div class="r-right">
            <h5>title</h5>
            <p>描述</p>
            <span>¥ 价格</span>
            <img
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/cc-message.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div v-show="menuIndex == 1">
      <div class="container">
        <div class="r-inform">
          <div class="r-left">
            <img
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/3.jpg"
              alt=""
            />
          </div>
          <div class="r-right">
            <h5>title</h5>
            <p>des</p>
            <span>¥ 价格</span>
            <img
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/cc-message.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div v-show="menuIndex == 2">
      <div class="container">
        <div class="r-inform">
          <div class="r-left">
            <img
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/3.jpg"
              alt=""
            />
          </div>
          <div class="r-right">
            <h5>title</h5>
            <p>描述</p>
            <span>¥ price</span>
            <img
              src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/cc-message.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div v-show="menuIndex == 3">
      内容四
      <!--此处可以换成子组件-->
    </div>
  </div>
</template>
<script>
export default {
  name: "FleaMy",
  data() {
    return {
      menuIndex: 0,
      navList: ["购买", "收藏", "历史"],
      user: JSON.parse(localStorage.getItem("FleaUser")),
      path: "/fleaMy"
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    menuShow(index) {
      this.menuIndex = index;
      console.log(this.menuIndex);
    },
    gotoUserDetail(id) {
      this.$router.push({
        path: `/personal/${id}`
      });
      localStorage.setItem("path", JSON.stringify(this.path));
      localStorage.setItem("path1", JSON.stringify(this.path));
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/fleamarket/FleaMy.scss";
</style>
