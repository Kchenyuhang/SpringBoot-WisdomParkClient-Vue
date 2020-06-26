<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/privatechat">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png" alt />
        </router-link>
        <p>人名</p>
      </div>
    </div>
    <div class="body">
      <div v-for="(item, index) in dataList" :key="index">
        <div class="cc-df-between" v-if="item.fromId==user.pkUserAccountId">
          <div></div>
          <div class="msgArea cc-df-right">
            <div class="cc-col">
              <p style="text-align: right;">{{user.nickname}}</p>
              <div class="msg1"><p>{{item.content}}</p></div>
            </div>

            <div class="avatar cc-right">
              <img :src="user.avatar" />
            </div>
          </div>
        </div>
        <div class="cc-df-between" v-if="item.fromId==friend.pkUserAccountId">
          <div class="msgArea cc-df-left">
            <div class="avatar">
              <img :src="friend.avatar" />
            </div>
            <div class="cc-col">
              <p>{{friend.nickname}}</p>
              <div class="msg">
                <p>{{item.content}}</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div class="input">
        <div class="inp cc-df-center">
          <textarea name id cols="30" rows="1" v-model="msg" class="test" placeholder="请输入私聊内容"></textarea>
        </div>
        <div @click="sendToUser()" class="btn cc-df-center">
          <p>发送</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
// 安装并引入相关模块// 安装并引入相关模块
import SockJS from "sockjs-client";
import Stomp from "stompjs";
export default {
  data() {
    return {
      dataList: [],
      msg: "",
      socket: null,
      stompClient: null,
      timer: null,
      user: this.$store.state.user,
      friend: {},
      token: this.$store.state.token,
      friendId: this.$route.params.UserId,
      id: ""
    };
  },
  created() {
    this.selectUser();
    this.selectChat();
  },
  mounted: function() {
    this.initWebSocket();
  },
  beforeDestroy: function() {
    // 页面离开时断开连接,清除定时器
    this.disconnect();
    clearInterval(this.timer);
  },
  methods: {
    async selectChat() {
      this.dataList = [];
      this.id = this.friendId + this.user.pkUserAccountId;
      this.data = {
        id: this.id
      };
      this.url = "/a/dynamic/message/all";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
      this.dataList = this.result.data;
      this.id = this.user.pkUserAccountId + this.friendId;
      this.data = {
        id: this.id
      };
      this.url = "/a/dynamic/message/all";
      this.result = await API.init(this.url, this.data, "post");
      this.dataList = this.dataList.concat(this.result.data);
      console.log(this.dataList);
      this.dataList.sort(function(a, b) {
        return (
          Date.parse(a.gmtCreate.replace(/-/g, "/")) -
          Date.parse(b.gmtCreate.replace(/-/g, "/"))
        );
      });
      console.log(this.dataList);
      this.msg = "";
      document.documentElement.scrollTop = document.body.scrollHeight;
      // let documentTop = document.body.scrollHeight; //全部内容的高
      // let screenHeight = window.screen.availHeight; //当前屏幕的高
      console.log(document.documentElement.scrollTop);
    },
    async selectUser() {
      this.data = {
        field: this.friendId
      };
      this.url = this.GLOBAL.baseUrl + "/user/single/id";
      this.result = await API.init(this.url, this.data, "post");
      this.friend = this.result;
    },
    sendToUser() {
      var msg = this.msg;
      var toUserId = this.friendId;
      //第一部分为后端处理的地址，第二部分head头（认证的消息），第三部分为内容
      var data = {
        fromUserId: this.user.pkUserAccountId,
        toUserId: toUserId,
        msg: msg
      };
      // 统一前缀配置
      this.stompClient.send("/app/sendToUser", {}, JSON.stringify(data));
      this.selectChat();
    },
    initWebSocket() {
      this.connection();
      let self = this;
      // 断开重连机制,尝试发送消息,捕获异常发生时重连
      this.timer = setInterval(() => {
        try {
          self.stompClient.send("test");
        } catch (err) {
          console.log("断线了: " + err);
          self.connection();
        }
      }, 5000);
    },
    removeTab(targetName) {
      console.log(targetName);
    },
    connection() {
      // 建立连接对象
      this.socket = new SockJS("/a/websocket"); //连接服务端提供的通信接口，连接以后才可以订阅广播消息和个人消息
      // 获取STOMP子协议的客户端对象
      this.stompClient = Stomp.over(this.socket);
      // 定义客户端的认证信息,按需求配置
      const headers = {
        login: "mylogin",
        passcode: "mypasscode",
        // additional header
        "client-id": "my-client-id"
      };
      // 向服务器发起websocket连接
      this.stompClient.connect(
        headers,
        frame => {
          this.stompClient.subscribe("/topic/user" + this.friendId, msg => {
            // 订阅服务端提供的某个topic
            // console.log(msg.body.substring(0, msg.body.indexOf(":") - 1)); // msg.body存放的是服务端发送给我们的信息
            // var num = msg.body
            //   .substring(0, msg.body.indexOf(":") - 1)
            //   .match(/\d+/g);
            // this.dataList.push({
            //   userId: num[0],
            //   msg: msg.body.substring(msg.body.indexOf(":") + 1)
            // });
            // console.log(this.dataList);
            this.selectChat();
            console.log(msg.body);
            console.log(frame);
          });
          this.stompClient.subscribe(
            "/topic/user" + this.user.pkUserAccountId,
            msg => {
              // 订阅服务端提供的某个topic
              // console.log(msg.body.substring(0, msg.body.indexOf(":") - 1)); // msg.body存放的是服务端发送给我们的信息
              // var num = msg.body
              //   .substring(0, msg.body.indexOf(":") - 1)
              //   .match(/\d+/g);
              // this.dataList.push({
              //   userId: num[0],
              //   msg: msg.body.substring(msg.body.indexOf(":") + 1)
              // });
              // console.log(this.dataList);
              this.selectChat();
              console.log(msg.body);
              console.log(frame);
            }
          );
        },
        err => {
          // 连接发生错误时的处理函数
          console.log(err);
        }
      );
    },
    // 断开连接
    disconnect() {
      if (this.stompClient != null) {
        this.stompClient.disconnect();
        console.log("Disconnected");
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/Chatting.scss";
</style>