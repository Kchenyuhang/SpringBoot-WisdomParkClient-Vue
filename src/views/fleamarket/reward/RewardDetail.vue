<template>
  <div class="bg">
    <div class="top">
      <router-link to="/reward">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
    </div>
    <div>
      <div class="container">
        <div class="row">
          <div class="header">
            <div class="left">
              <img
                :src="user.avatar"
                alt=""
                @click="gotoPerson(user.pkFleaUserId)"
              />
            </div>
            <div class="right">
              <p>{{user.nickname}}</p>
              <span>{{reward.createTime}}</span>
            </div>
          </div>
          <!-- <hr class="line" /> -->
          <div class="inform">
            <!-- <p>¥ 100</p> -->
            <!-- <span>#标签#</span> -->
            <h5>{{reward.title}}</h5>
            <h6>{{reward.description}}</h6>
            <img
              :src="reward.imageUrl"
              alt="图片未能加载"
            />
          </div>
        </div>
        <div class="content">
          <strong>全部评论</strong>
          <!-- <hr class="line" /> -->
          <div class="ds-post-main">
            <div class="ds-avatar">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg"
                alt=""
              />
            </div>
            <div class="ds-comment-body">
              <h5>用户昵称</h5>
              <p>内容</p>
              <p>内容</p>
              <span>评论时间</span>
            </div>
          </div>
          <!-- <hr class="line" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const API = require("../../../request/api.js");
export default {
  name: "RewardDetail",
  data() {
    return {
      reward: [],
      count: 0,
      user: []
    };
  },
  components: {},
  created() {
    this.getReward();
  },
  mounted() {},
  methods: {
    async getReward() {
      this.url = this.GLOBAL.baseUrl + "/flea/reward/all";
      this.data = {
        currentPage: 0,
        // field: 2,
        pageSize: 10
      };
      this.result = (await API.init(this.url, this.data, "post")).data.content;
      for (let i = 0; i < this.result.length; i++) {
        if (this.result[i].pkRewardId == this.$route.params.id) {
          this.count = i;
        }
      }
      this.reward = this.result[this.count];
      this.user = this.reward.fleaUser;
      console.log(this.reward);
      console.log(this.user);
    },
    gotoPerson(id) {
      this.$router.push({
        path: `/personal/${id}`
      });
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.top {
  height: 40px;
  background-color: #ffffff;
}
.top img {
  height: 20px;
  width: 20px;
  margin-top: 10px;
  margin-left: 6px;
}
.bg {
  width: 100%;
  height: 100%;
  background-color: white;
}
.container {
  width: 90%;
  // height: 10px;
  margin-left: 5%;
  background-color: white;
  /* border: 1px solid#c4c4c4; */
}
.row {
  height: 400px;
  width: 100%;
  // border: 1px solid #e6e6e6;
}
.header {
  height: 60px;
  margin-top: 10px;
  background-color: white;
  // border-bottom: 1px solid black;
  /* box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2); */
}
.left img {
  height: 50px;
  width: 50px;
  float: left;
  margin-top: 6px;
  margin-left: 14px;
}
.right p {
  margin-left: 80px;
  font-weight: bold;
  font-size: 15px;
}
.right span {
  margin-left: 18px;
  font-size: 12px;
}
// .line {
//   margin-top: 8px;
//   color: #e6e6e6;
//   width: 100%;
// }
.inform {
  height: 300px;
  width: 94%;
  margin-left: 10px;
  margin-top: 10px;
  /* background-color: blue; */
}
.inform p {
  color: red;
  font-size: 15px;
  font-weight: bold;
}
.inform span {
  font-weight: bold;
}
.inform h5 {
  font-weight: bold;
}
.inform h6 {
  margin-top: 10px;
}
.inform img {
  margin-top: 10px;
  width: 98%;
  height: 200px;
}
.content {
  height: 620px;
  margin-top: 15px;
  // border: 1px solid #e6e6e6;
  // background-color: rgb(245, 245, 245);
}
.com {
  height: 80px;
  // border: 1px solid black;
}
.c-left img {
  float: left;
  height: 40px;
  width: 40px;
  margin-left: 20px;
  margin-top: 15px;
}
.c-right {
  margin-left: 80px;
}
.c-right h5 {
  font-weight: bold;
}
.c-right p {
  font-size: 15px;
}
.c-right span {
  font-size: 10px;
}

.ds-post-main {
  position: relative;
  width: 95%;
  margin-top: 20px;
}
.ds-avatar {
  position: absolute;
  top: 20px;
  width: 31px;
  height: 31px;
  padding: 5px;
  background: rgb(245, 245, 245);
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
}
.ds-avatar a {
  display: block;
  width: 31px;
  height: 31px;
  background: #748174;
  border-radius: 50%;
}
.ds-comment-body {
  margin-left: 20px;
  padding: 10px 10px 10px 30px;
  height: auto;
  background: rgb(249, 204, 157);
}
</style>
