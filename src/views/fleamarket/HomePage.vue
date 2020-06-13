<template>
  <div class="container">
    <div class="header">
      <router-link to="/layout">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>跳蚤市场</p>
    </div>

    <!-- 搜索框 -->
    <div class="search bar">
      <form>
        <input
          type="text"
          placeholder="请输入您要搜索的内容..."
        />
        <button>搜索</button>
      </form>
    </div>
    <!-- 分类图标 -->
    <div class="listAll">
      <div class="row">
        <div class="list">
          <img
            src="https://kxingchen.oss-cn-shanghai.aliyuncs.com/develop/animal.png"
            alt="宠物图标"
            class="icon"
          />
          <p class="zl">宠物</p>
        </div>
        <div class="list">
          <img
            src="https://kxingchen.oss-cn-shanghai.aliyuncs.com/develop/close.png"
            alt="衣服图标"
            class="icon"
          />
          <p class="zl">衣服</p>
        </div>
        <div class="list">
          <img
            src="https://kxingchen.oss-cn-shanghai.aliyuncs.com/develop/game.png"
            alt="游戏图标"
            class="icon"
          />
          <p class="zl">游戏</p>
        </div>
        <div class="list">
          <img
            src="https://kxingchen.oss-cn-shanghai.aliyuncs.com/develop/book.png"
            alt="书本图标"
            class="icon"
          />
          <p class="zl">书本</p>
        </div>
        <div class="list">
          <router-link to="/list">
            <img
              src="https://kxingchen.oss-cn-shanghai.aliyuncs.com/develop/type.png"
              alt="分类图标"
              class="icon"
            />
          </router-link>
          <p class="zl">分类</p>
        </div>
      </div>
    </div>
    <!-- 悬赏界面 -->
    <div class="reward">
      <div class="reward-top">
        <p>悬赏</p>
        <span>更多</span>
      </div>
      <div class="reward-list">
        <div
          class="col-4"
          v-for="(item, index) in reward"
          :key="index"
          style="display:flex"
        >
          <img
            :src="item.imageUrl"
            alt="分类图标"
            class="icon"
          />
          <span>{{item.title}}</span>
        </div>
      </div>
    </div>
    <!-- 推荐界面 -->
    <div class="r-list">
      <div
        class="r-left"
        v-for="(item, index) in list"
        :key="index"
      >
        <div
          class="r-left-con"
          @click="gotoDetail(item.pkFleaGoodsId)"
        >
          <img :src="item.goodsImgUrl" />
          <span>{{ item.goodsDescription }}</span>
          <p>$ {{ item.goodsPrice }}</p>
          <div class="r-right">
            <div class="img-box">
              <img
                :src="item.userAvatar"
                alt=""
              />
            </div>
            <p>{{item.nickname}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const API = require("../../request/api.js");
export default {
  name: "HomePage",
  data() {
    return {
      path: "/homePage",
      reward: [],
      data: {
        currentPage: 0,
        pageSize: 100
      },
      list: [],
      page: [],
      users: JSON.parse(localStorage.getItem("user")),
      user: [],
      count: 0
    };
  },
  components: {},
  created() {
    this.getTopReward();
    this.getList();
    this.reInto();
    localStorage.setItem("path", JSON.stringify(this.path));
  },
  mounted() {},
  methods: {
    async getTopReward() {
      this.url = this.GLOBAL.baseUrl + "/flea/reward/top";
      this.reward = (await API.init(this.url, null, "post")).data;
      // console.log(this.reward);
    },
    async getList() {
      this.url = "http://101.37.31.188:8080/flea/goods/all";
      this.list = (await API.init(this.url, this.data, "post")).data;
      // console.log(this.list);
    },
    gotoDetail(id) {
      this.page[this.count++] = id;
      localStorage.setItem("page", JSON.stringify(this.page));
      localStorage.setItem("count", JSON.stringify(this.count));

      this.$router.push({
        path: `/commoditydetails/${id}`
      });
    },
    async reInto() {
      this.url = "http://101.37.31.188:8080/flea/users/saving";
      this.data = {
        jobNumber: this.users.jobNumber
      };
      this.user = (await API.init(this.url, this.data, "post")).data;
      console.log(this.user);

      localStorage.setItem("FleaUser", JSON.stringify(this.user));
    }
  },
  computed: {},
  watch: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/fleamarket/HomePage.scss";
.container {
  background-color: #f2f2f2;
  position: absolute;
  width: 100%;
  height: 1000px;
  margin-bottom: 100px;
}
.bar form {
  height: 42px;
  margin-top: -20px;
}
.bar input {
  width: 300px;
  border-radius: 42px;
  border: 2px solid white;
  background: #f1f1f1;
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
.row {
  display: flex;
  flex-wrap: wrap;
  margin-left: 18px;
  margin-top: -50px;
}
.list {
  display: flex;
  flex: 0 0 18%;
  flex-wrap: wrap;
  margin-left: 4px;
  margin-top: 10px;
}
.list p {
  text-align: center;
  font-size: 12px;
  margin-left: 8px;
}
.list img {
  height: 35px;
  width: 40px;
}
.reward {
  width: 90%;
  margin-left: 20px;
  height: 150px;
  background-color: white;
  border-radius: 15px;
  margin-top: -10px;
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px;
  // flex: 0 0 12%;
}
.reward-list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.reward-list img {
  height: 80px;
  width: 80px;
  margin-top: 5px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
}
.reward-list {
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  span {
    font-size: 0.8rem;
    margin-top: 10px;
  }
}
.reward-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 100%;
  font-size: 0.8rem;
  padding-left: 10px;
  padding-right: 10px;
  p {
    color: red;
  }
  span {
    color: red;
  }
}
.col-4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.listAll {
  width: 90%;
  height: 75px;
  background-color: white;
  border-radius: 15px;
  margin: 20px;
}
.r-list {
  width: 90%;
  margin-left: 5%;
  display: flex;
  flex-wrap: wrap;
}
.r-left {
  height: 230px;
  width: 46%;
  margin-left: 8px;
  margin-top: 15px;
  background-color: white;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.r-left img {
  height: 100px;
  border: none;
  border-bottom: 1px solid #eeeeee;
}
.r-right p {
  color: red;
}

.r-right img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-top: 30px;
}
.r-right p {
  float: right;
  margin-right: 60px;
  margin-top: -24px;
  color: red;
}
.r-left-con {
  p {
    font-size: 0.7rem;
    color: red;
  }
  span {
    font-size: 0.8rem;
  }
}
</style>
