<template>
  <div>
    <div class="header">
      <router-link to="/homePage">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <div class="search bar">
        <form>
          <input type="text" placeholder="请输入您要搜索的内容..." />
          <button type="submit"></button>
        </form>
      </div>
    </div>
    <div class="list">
      <p>热门推荐</p>
      <span v-for="(item, index) in type" :key="index">{{
        item.typeName
      }}</span>
    </div>
    <p>推荐</p>
    <div class="left">
      <div
        class="left-list"
        v-for="(item, index) in type.subTypes"
        :key="index"
      >
        <div>
          <img :src="item.typeCoverUrl" alt="" />
          <h5>{{ item.typeName }}</h5>
        </div>
      </div>
    </div>
    <p>数码</p>
    <div class="left">
      <div class="left-list" v-for="(item, index) in list" :key="index">
        <div>
          <img :src="item.image" alt="" />
          <h5>{{ item.menu }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const API = require("../../request/api.js");
export default {
  name: "List",
  data() {
    return {
      type: [],
      typeList: [],
      list: [
        {
          menu: "生活百货",
          image:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfnibb1ygkj30qo0qoq4w.jpg"
        },
        {
          menu: "女装",
          image:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfnibb1ygkj30qo0qoq4w.jpg"
        },
        {
          menu: "家用电器",
          image:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfnibb1ygkj30qo0qoq4w.jpg"
        },
        {
          menu: "美妆",
          image:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfnibb1ygkj30qo0qoq4w.jpg"
        },
        {
          menu: "运动户外",
          image:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfnibb1ygkj30qo0qoq4w.jpg"
        },
        {
          menu: "家具/饰品",
          image:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfnibb1ygkj30qo0qoq4w.jpg"
        },
        {
          menu: "儿童玩具",
          image:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfnibb1ygkj30qo0qoq4w.jpg"
        },
        {
          menu: "游戏装备",
          image:
            "http://ww1.sinaimg.cn/large/0064QvQTgy1gfnibb1ygkj30qo0qoq4w.jpg"
        }
      ]
    };
  },
  components: {},
  created() {
    this.getAllType();
    this.getAll();
  },
  mounted() {},
  methods: {
    async getAllType() {
      this.url = this.GLOBAL.baseUrl + "/flea/type/all";
      this.type = (await API.init(this.url, this.data, "post")).data.types;
      console.log(this.type);
    },
    async getAll() {
      this.url = this.GLOBAL.baseUrl + "/flea/type/all";
      this.typeList = (await API.init(this.url, this.data, "post")).data.types;
      console.log(this.typeList);
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/fleamarket/List.scss";
.bar form {
  height: 42px;
  margin-top: -25px;
  margin-left: 18px;
}
.bar input {
  width: 300px;
  border-radius: 42px;
  border: 2px solid white;
  background: #f1f1f1;
  transition: 0.3s linear;
  float: right;
}
.bar input:focus {
  width: 300px;
}
.bar button {
  background: none;
  top: -2px;
  right: 0;
}
.bar button:before {
  content: "\f002";
  font-family: FontAwesome;
  color: #324b4e;
}
div.search {
  padding: 30px 0;
}

form {
  position: relative;
  width: 300px;
  margin: 0 auto;
}

input,
button {
  border: none;
  outline: none;
}

input {
  width: 100%;
  height: 35px;
  padding-left: 13px;
}

button {
  height: 42px;
  width: 42px;
  cursor: pointer;
  position: absolute;
}
.list {
  // margin-top: 10px;
  width: 100px;
  height: 500px;
  float: left;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.list p {
  margin-top: 1px;
}
.left {
  margin-top: 20px;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
}
.left-list {
  width: 30%;
}
.left-list img {
  width: 60px;
  margin-left: 10px;
  border-radius: 50%;
  margin-top: 10px;
}
p {
  margin-top: 30px;
  font-weight: bold;
}
h5 {
  text-align: center;
}
</style>
