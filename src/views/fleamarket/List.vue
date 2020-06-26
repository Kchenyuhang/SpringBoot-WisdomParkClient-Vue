<template>
  <div>
    <div class="header">
      <router-link to="/homePage">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <router-link to="/search">
        <div class="search bar">
          <form>
            <input type="text" placeholder="请输入您要搜索的内容..." />
            <button type="submit">搜索</button>
          </form>
        </div>
      </router-link>
    </div>
    <div class="list">
      <p>热门推荐</p>
      <span
        v-for="(item, index) in type"
        :key="index"
        @click="getFleaType(item.subTypes, index, item.typeName)"
        :class="{ bgc: isShow == index }"
      >
        {{ item.typeName }}
      </span>
    </div>
    <p>推荐</p>
    <div class="left">
      <div class="left-list" v-for="(item, index) in typeList" :key="index">
        <div @click="goListDetail(item.pkFleaTypeId)">
          <img :src="item.typeCoverUrl" alt="" />
          <h5>{{ item.typeName }}</h5>
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
      first: "学习用品",
      type: [],
      typeList: [],
      isShow: 0,
      path: "/list",
      page: [],
      lastPath: JSON.parse(localStorage.getItem("path")),
      count: JSON.parse(localStorage.getItem("count")),
    };
  },
  components: {},
  created() {
    this.getAllType();
    localStorage.setItem("ListName", JSON.stringify(this.first));
  },
  mounted() {},
  methods: {
    async getAllType() {
      this.url = this.GLOBAL.baseUrl + "/flea/type/all";
      this.type = (await API.init(this.url, this.data, "post")).data.types;
      console.log(this.type);
      this.typeList = this.type[0].subTypes;
      localStorage.setItem("page", JSON.stringify(this.page));
      console.log(this.typeList);
    },
    getFleaType(subTypes, index, name) {
      localStorage.setItem("ListName", JSON.stringify(name));
      this.typeList = subTypes;
      this.isShow = index;
    },
    goListDetail(id) {
      this.lastPath[this.lastPath.length] = "/list";
      localStorage.setItem("path", JSON.stringify(this.lastPath));
      this.$router.push({
        path: `/listDetail/${id}`,
      });
    },
  },
  computed: {},
  watch: {},
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
  // content: "\f002";
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
</style>
