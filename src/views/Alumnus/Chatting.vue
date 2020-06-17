<template>
  <div>
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
        <div class="cc-df-between" v-if="item.userId==user.pkUserAccountId">
          <div></div>
          <div class="msgArea cc-df-right">
            <div class="msg">{{item.msg}}</div>
            <div class="avatar cc-right">
              <img :src="user.avatar" />
            </div>
          </div>
        </div>
        <div class="cc-df-between" v-if="item.userId==friend.pkUserAccountId">
          <div class="msgArea">
            <div class="avatar">
              <img :src="friend.avatar" />
            </div>
            <div class="msg">
              <p>{{item.msg}}</p>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div class="input">
        <div class="inp cc-df-center">
          <textarea name id cols="30" rows="1" v-model="msg" class="test"></textarea>
        </div>
        <button @click="sendToUser" class="btn">发送</button>
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
      friendId: this.$route.params.UserId
    };
  },
  created() {
    this.selectUser();
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
      this.socket = new SockJS("http://118.31.21.206:8080/websocket"); //连接服务端提供的通信接口，连接以后才可以订阅广播消息和个人消息
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
            console.log(msg.body.substring(0, msg.body.indexOf(":") - 1)); // msg.body存放的是服务端发送给我们的信息
            var num = msg.body
              .substring(0, msg.body.indexOf(":") - 1)
              .match(/\d+/g);
            this.dataList.push({
              userId: num[0],
              msg: msg.body.substring(msg.body.indexOf(":") + 1)
            });
            console.log(this.dataList);
            console.log(frame);
          });
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
// .body {
//   margin: 20px;
// }
// .msgArea {
//   width: 45%;
//   height: 50px;
//   border: #4cd7ff solid 1px;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
// }
// /*.msgAreaReverse {*/
// /*  width: 45%;*/
// /*  height: 50px;*/
// /*  border: #4cd7ff solid 1px;*/
// /*  display: flex;*/
// /*  flex-wrap: nowrap;*/
// /*  flex-direction: row-reverse;*/
// /*  align-items: center;*/
// /*}*/
// .msg {
//   margin-left: 10px;
// }
// .input {
//   margin-top: 500px;
// }
</style>