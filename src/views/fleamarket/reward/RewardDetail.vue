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
              <p>{{ user.nickname }}</p>
              <span>{{ reward.createTime }}</span>
            </div>
          </div>
          <!-- <hr class="line" /> -->
          <div class="inform">
            <!-- <p>¥ 100</p> -->
            <!-- <span>#标签#</span> -->
            <h5>{{ reward.title }}</h5>
            <h6>{{ reward.description }}</h6>
            <img
              :src="reward.imageUrl"
              alt="图片未能加载"
            />
          </div>
        </div>
        <div class="content">
          <strong>全部评论</strong>
          <!-- <hr class="line" /> -->
          <div v-if="comments.length == 0">
            <p>暂无评论</p>
          </div>
          <div
            class="ds-post-main"
            v-for="(item, index) in comments"
            :key="index"
          >
            <div v-if="item.title == reward.title">
              <div class="ds-avatar">
                <img
                  src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg"
                  alt=""
                />
              </div>
              <div class="ds-comment-body">
                <h5>{{ item.commentByName }}</h5>
                <p>{{ item.comment }}</p>
                <!-- <p>内容</p> -->
                <span>{{ item.createTime }}</span>
              </div>
            </div>
          </div>
          <!-- <hr class="line" /> -->
        </div>
      </div>
    </div>
    <div class="liuyan">
      <div
        class="btn"
        @click="show = !show"
        v-show="!show"
      >
        <img
          class="icon"
          src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/cc-message.png"
        />
        <p>留言</p>
      </div>
    </div>
    <div
      class="zhezhaoceng"
      v-show="show"
    >
      <textarea
        id="ta"
        rows="1"
        v-model="send.comment"
      ></textarea>
      <img
        src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/send.png"
        @click="doSend"
      />
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
      userInfor: JSON.parse(localStorage.getItem("FleaUser")),
      count: 0,
      user: [],
      comments: [],
      send: {
        comment: "",
        reviewerId: 0,
        rewardId: 0,
        userId: 0
      },
      show: false,
      num: 5
    };
  },
  components: {},
  created() {
    this.getReward();
    this.getComment();
    this.backTop();
    let that = this;
    window.onscroll = function() {
      // scrollTop 滚动条滚动时，距离顶部的距离
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      // windowHeight 可视区的高度
      var windowHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      // scrollHeight 滚动条的总高度
      var scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      // 滚动条到底部的条件
      if (scrollTop + windowHeight >= scrollHeight - 50) {
        // 加载数据

        that.loadmore();
      }
    };
  },
  mounted() {
    function $(id) {
      return document.getElementById(id);
    }

    $("ta").onkeyup = function() {
      this.style.height = "auto";
      this.style.height = this.scrollHeight + "px";
    };
  },
  methods: {
    loadmore() {
      this.num += 5;
      this.getComment();
    },
    async getReward() {
      this.url = this.GLOBAL.baseUrl + "/flea/reward/all";
      this.data = {
        currentPage: 0,
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
      console.log(this.user);
    },
    async getComment() {
      this.url = this.GLOBAL.baseUrl + "/flea/comment/getByRewardId";
      this.data = {
        pkRewardId: this.$route.params.id
      };
      this.comments = (await API.init(this.url, this.data, "post")).data;
      this.comments = this.comments.reverse();
      // this.comments.slice(0, this.num);
      // console.log(this.result);
    },
    gotoPerson(id) {
      this.$router.push({
        path: `/personal/${id}`
      });
    },
    backTop() {
      // const that = this;
      // let timer = setInterval(() => {
      //   let ispeed = Math.floor(-that.scrollTop / 5);
      //   document.documentElement.scrollTop = document.body.scrollTop =
      //     that.scrollTop + ispeed;
      //   if (that.scrollTop === 0) {
      //     clearInterval(timer);
      //   }
      // }, 16);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    async doSend() {
      this.url = this.GLOBAL.baseUrl + "/flea/comment/increased";
      this.send.reviewerId = this.user.pkFleaUserId;
      this.send.userId = this.userInfor.pkFleaUserId;
      this.send.rewardId = this.$route.params.id;
      this.result = (await API.init(this.url, this.send, "post")).data;
      this.show = false;
      this.send.comment = "";
      this.getComment();
      // console.log(this.result);
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
.liuyan {
  position: fixed;
  z-index: 999;
  bottom: 5%;
  left: 45%;
  .btn {
    width: 60px;
    height: 60px;
    border: 3px solid white;
    border-radius: 50%;
    background-color: rgb(244, 213, 58);
    text-align: center;
    padding: 5px 5px 5px 5px;
    .icon {
      width: 20px;
      height: 20px;
    }
    p {
      font-size: 12px;
      font-weight: 600;
    }
  }
}
.zhezhaoceng {
  z-index: 999;
  position: fixed;
  width: 100%;
  height: auto;
  background-color: white;
  border: none;
  bottom: 0;
  display: flex;
  textarea {
    display: block;
    width: 300px;
    height: 40px;
    overflow: hidden;
    padding: 5px 10px;
    margin: 0px auto 0;
    resize: none;
    line-height: 30px;
    font-size: 16px;
    color: #666;
    border: 1px solid #ccc;
    outline: 0 none;
    box-shadow: 0 0 5px #999;
    border-radius: 3px;
    box-sizing: border-box;
    transition: all 200ms linear;
  }
  textarea:focus {
    color: #277fe4;
    border-color: #2196f3;
    box-shadow: 0 0 5px #03a9f4;
  }
  img {
    width: 30px;
    height: 30px;
    // margin-bottom: -10px;
    margin-top: 10px;
    margin-left: -10px;
    margin-right: 10px;
  }
}
</style>
