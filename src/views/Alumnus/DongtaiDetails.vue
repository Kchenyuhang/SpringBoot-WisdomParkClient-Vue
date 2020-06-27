<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/alumnusindex">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png" alt />
        </router-link>
        <p>动态详情</p>
      </div>
    </div>
    <div class="body">
      <div class="dongtai-card">
        <div class="dongtai-avatar">
          <img :src="'https://images.weserv.nl/?url=' + user.avatar" alt />
        </div>
        <div class="dongtai-content">
          <div class="row cc-df-between">
            <div class="row">
              <div class="name">
                <p>{{user.nickname}}</p>
              </div>
              <div class="fenge cc-df-center">
                <p>·</p>
              </div>
              <div class="time">
                <p>{{message.gmtCreate}}</p>
              </div>
            </div>
          </div>
          <div class="article">
            <p>{{message.content}}</p>
          </div>
          <div class="image cc-mtop">
            <div
              v-for="(img, index3) in message.dynamicPhotoList"
              :key="index3"
              v-show="message.dynamicPhotoList.length == 1"
            >
              <div class="avatar-2">
                <img :src="'https://images.weserv.nl/?url=' + img.picture" />
              </div>
            </div>
          </div>
          <div class="image cc-df-warp cc-mtop">
            <div
              v-for="(img, index3) in message.dynamicPhotoList"
              :key="index3"
              class="cc-coll-6"
              v-show="message.dynamicPhotoList.length == 2"
            >
              <div class="avatar-2">
                <img :src="'https://images.weserv.nl/?url=' + img.picture" />
              </div>
            </div>
          </div>
          <div class="image cc-df-warp cc-mtop">
            <div
              v-for="(img, index3) in message.dynamicPhotoList"
              :key="index3"
              class="cc-coll-4"
              v-show="message.dynamicPhotoList.length == 3"
            >
              <div class="avatar-2">
                <img :src="'https://images.weserv.nl/?url=' + img.picture" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pinlun">
      <div class="all">
        <p>共{{l}}条评论</p>
      </div>
      <div v-for="(item,index) in message.commentVoList" :key="index">
        <div class="pinlun-content cc-mbottom">
          <div class="avatar">
            <img :src="'https://images.weserv.nl/?url=' + user.avatar" alt />
          </div>
          <div class="content-row">
            <div class="pinlun-content1">
              <div class="name">
                <p>{{item.nickname}}</p>
              </div>
            </div>
            <div class="pinlun-content2">
              <p>{{item.content}}</p>
            </div>
            <div class="cc-df">
              <div class="time">
                <p>{{item.gmtCreate}}</p>
              </div>
              <div class="fenge cc-df-center">
                <p>·</p>
              </div>
              <div class="time" @click="isTrue(item.pkCommentId,index)">
                <p>回复</p>
              </div>
            </div>
          </div>
          <div class="dianzan">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/icon_dianzan.png"
              alt
            />
          </div>
        </div>
        <div v-for="(item1,index1) in item.replyCommentVos" :key="index1" class="fontSize">
          <p class="fontSize">{{item1.nickname}}回复了{{item.nickname}}：{{item1.content}}</p>
        </div>
      </div>
    </div>
    <div class="input" v-if="isShow!=0">
      <div class="inp cc-df-center">
        <textarea
          name
          id
          cols="30"
          rows="1"
          style="font-size: 14px;padding-top:10px"
          v-model="msg"
          class="test"
          placeholder="请输入评论内容"
        ></textarea>
      </div>
      <div class="btn cc-df-center" @click="addPinLun()">
        <p>发送</p>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "DongtaiDetails",
  data() {
    return {
      result: [],
      user: [],
      message: {},
      msg: "",
      id: this.$route.params.Id,
      l: 0,
      isShow: 0,
      users: this.$store.state.user,
      i: 0,
      text: {}
    };
  },
  components: {},
  created() {
    this.Dongtai();
  },
  mounted() {},
  methods: {
    isTrue(index, x) {
      this.isShow = index;
      this.i = x;
    },
    async addPinLun() {
      this.url = this.GLOBAL.baseUrl + "/dynamic/replyComment/insert";
      this.data = {
        commentId: this.isShow,
        content: this.msg,
        userId: this.users.pkUserAccountId
      };
      this.result = (await API.init(this.url, this.data, "post")).data;
      console.log(this.result);
      this.text = {
        avatar: this.users.avatar,
        content: this.msg,
        dynamicId: this.message.dynamicId,
        gmtCreate: this.formatDateTime(new Date()),
        gmtModified: this.formatDateTime(new Date()),
        isDeleted: false,
        nickname: this.users.nickname,
        pkReplyCommentId: "59075843049525248",
        userId: this.users.pkUserAccountId
      };
      this.message.commentVoList[this.i].replyCommentVos.splice(
        0,
        0,
        this.text
      );
      console.log(this.message.commentVoList[this.i].replyCommentVos);
      this.isShow = 0;
    },
    formatDateTime(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    },
    async Dongtai() {
      this.url = this.GLOBAL.baseUrl + "/dynamic/";
      this.data = {
        id: this.id
      };
      this.result = (await API.init(this.url, this.data, "post")).data;
      console.log(this.result);
      this.message = this.result;
      this.l = this.message.commentVoList.length;
      this.message.commentVoList.sort(function(a, b) {
        return (
          Date.parse(b.gmtCreate.replace(/-/g, "/")) -
          Date.parse(a.gmtCreate.replace(/-/g, "/"))
        );
      });
      for (let i = 0; i < this.message.commentVoList; i++) {
        this.message.commentVoList[i].replyCommentVos.sort(function(a, b) {
          return (
            Date.parse(b.gmtCreate.replace(/-/g, "/")) -
            Date.parse(a.gmtCreate.replace(/-/g, "/"))
          );
        });
      }
      this.user = this.result.userAccount;
      console.log(this.user);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/DongtaiDetails.scss";
</style>
