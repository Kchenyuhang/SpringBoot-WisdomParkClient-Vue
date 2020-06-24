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
            <h5>{{ reward.title }}</h5>
            <h6>{{ reward.description }}</h6>
            <img :src="reward.imageUrl" alt="图片未能加载" />
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
            <div>
              <div class="ds-avatar">
                <img :src="item.commentAvatar" alt="" />
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
          <div class="none">
            <p v-show="comments.length <= num" class="bott">没有更多留言了</p>
          </div>
        </div>
      </div>
    </div>
    <div class="liuyan">
      <div class="btn" @click="show = !show" v-show="!show">
        <img
          class="icon"
          src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/cc-message.png"
        />
        <p>留言</p>
      </div>
    </div>
    <div class="zhezhaoceng" v-show="show">
      <textarea id="ta" rows="1" v-model="send.comment"></textarea>
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
      num: 5,
      path: "/rewarddetail/"
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
      this.comments = this.comments.slice(0, this.num).reverse();
      // this.comments.slice(0, this.num);
      // console.log(this.result);
      this.path = this.path + this.$route.params.id;
      localStorage.setItem("mypath", JSON.stringify(this.path));
    },
    gotoPerson(id) {
      this.$router.push({
        path: `/personal/${id}`
      });
    },
    backTop() {
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
      console.log(this.send);
      console.log(this.result);
      this.send.comment = "";
      this.getComment();
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/RewardDetail.scss";
</style>
