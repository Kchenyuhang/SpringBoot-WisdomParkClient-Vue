<template>
  <div>
    <!-- <button @click="sss">发送消息</button> -->
    <!-- 顶部图片 -->
    <div class="bg">
      <img
        src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/lADPGqGoaTpyd_7NAljNA4Q_900_600.jpg_720x720q90g.jpg"
        alt
      />
      <!-- 消息推送 -->
      <Eservice :message="dd"></Eservice>
      <!-- 地址栏 -->
      <div class="inputDiv">
        <div class="inputTop">
          <div @click="get">
            <span>
              帮我送
              <div class="helpd" v-if="show"></div>
            </span>
          </div>
          <div @click="send">
            <span>
              帮我取
              <div class="helpd" v-if="!show"></div>
            </span>
          </div>
        </div>
        <!-- 帮我送 -->
        <div class="inputCenter" v-if="getshow">
          <input
            style="font-weight: 900;font-size: 16px;"
            type="text"
            class="inputext"
            placeholder="从哪里取件"
            @click="origin"
            v-model="this.address"
          />
          <input
            type="text"
            class="inputext"
            placeholder="送到哪里"
            @click="go"
          />
          <hr class="line" />
        </div>
        <!-- 帮我取 -->
        <div class="inputCenter" v-if="!getshow">
          <input
            type="text"
            class="inputext"
            placeholder="送到哪里"
            @click="go"
          />
          <input
            type="text"
            class="inputext"
            placeholder="从哪里取件"
            v-model="this.address1"
            @click="origin"
            style="font-weight: 900;font-size: 16px;"
          />
          <hr class="line" />
        </div>
      </div>
      <!-- 菜单栏部分 -->
      <div class="menu">
        <div>
          <router-link to="/personalcenter">
            <img
              src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/lALPD4PvJ5OUkSbMyMzI_200_200.png_720x720q90g.jpg"
              alt
            />
          </router-link>
        </div>
        <div>
          <router-link to="/order/all">
            <img
              src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/lALPD2eDMm1eLEfMyMzI_200_200.png_720x720q90g.jpg"
              alt
            />
          </router-link>
        </div>
        <div>
          <img
            @click="receiver"
            src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/lALPD4BhqO7AwbXMyMzI_200_200.png_720x720q90g.jpg"
            alt
          />
        </div>
        <div>
          <img
            @click="runorders"
            src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/lALPD3zUKkoFLEbMyMzI_200_200.png_720x720q90g.jpg"
            alt
          />
        </div>
      </div>
      <div class="wz">
        <p>个人中心</p>
        <p>我的订单</p>
        <p>接单大厅</p>
        <p>跑腿订单</p>
      </div>
      <!-- 底部内容 -->
      <div class="bottom">
        <div class="card" v-for="(item, index) in list" :key="index">
          <div class="leftdiv">
            <p class="title">{{ item.title }}</p>
            <p>{{ item.description }}</p>
          </div>
          <div class="rightdiv">
            <img :src="item.image" alt="底部内容图片" />
          </div>
        </div>
      </div>
      <div class="citydiv">
        <p>{{ homeCity }}</p>
        <img
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/右箭头 (1).png"
          alt=""
        />
      </div>
      <router-link to="/layout">
        <img
          id="layout"
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
    </div>
    <!-- 弹出框 -->
    <Dialog v-bind.sync="showBombTips" :tipsContent="tipsContent"></Dialog>
  </div>
</template>

<script>
import Eservice from "../../components/Eservice";
const Sock = require("../../assets/js/Sock");
import Dialog from "../../components/dialog";
const API = require("../../request/api");
export default {
  name: "Errandshomepage",
  data() {
    return {
      dd: this.$store.state.message1,
      userId: this.$store.state.user.jobNumber,
      homeCity: "",
      showBombTips: {
        visible: false,
      },
      tipsContent: "",
      show: true,
      getshow: true,
      apply: [],
      addressdd: [],
      address: this.$store.state.address,
      address1: this.$store.state.address1,
      addressArr: "",
      codes: "",
      list: [
        {
          title: "闪送全新服务“密送”上线,全程密码箱配送",
          description: "快给你的文件加个锁！",
          image:
            "https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/s43.png",
        },
        {
          title: "2元代金券直接领,下单更有惊喜抽奖!",
          description: "点击关注闪送公众号,更多精彩内容更多福利",
          image: "https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/s2.png",
        },
      ],
    };
  },
  created() {
    Sock.initWebSocket();
    this.orerrand();
    this.runorders();
    this.receiver();
    this.getaddress();
    // 定位南京市 高德地图
    this.$axios({
      method: "Get",
      url:
        "https://restapi.amap.com/v3/ip?key=" +
        "3612ea7f539f61f33e49e15f6c3cb748",
    }).then((res) => {
      this.homeCity = res.data.city;
    });
  },
  components: { Dialog, Eservice },
  mounted() {
    console.log(this.userId);
    // 消息推送测试
    this.information();
  },
  methods: {
    sss() {
      Sock.sendMessageToErrends("一对一急送,拒绝拼单！", 1802333101, 1802333101);
      this.dd = localStorage.getItem("message1");
    },

    // 腾讯地图定位 拿到具体详细的地址
    getaddress() {
      let url = "https://apis.map.qq.com/ws/location/v1/ip?";
      this.$jsonp(url, {
        key: "2ODBZ-XXLCS-M6IOU-6WZBZ-LCTXQ-M5FCR",
        output: "jsonp",
      })
        .then((res) => {
          this.addressdd = res.result;
          console.log(this.addressdd);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    get() {
      this.show = !this.show;
      this.getshow = !this.getshow;
    },
    send() {
      this.show = !this.show;
      this.getshow = !this.getshow;
    },
    // 目的地
    go() {
      this.$router.push("/destinationadress");
    },
    // 发送地
    origin() {
      localStorage.removeItem("originname");
      localStorage.removeItem("originnumber");
      localStorage.removeItem("addressinfo");
      localStorage.removeItem("address");
      this.$router.push("/originadress");
    },
    async orerrand() {
      this.data = {
        founderId: this.userId,
        status: 1
      };
      this.url = this.GLOBAL1.baseUrl + "/reviewfrom/isErrends";
      this.apply = await API.init(this.url, this.data, "post");
      this.codes = this.apply.code;
      console.log(this.codes);
    },
    // 新用户进来没有申请为跑腿的时候的状态是
    runorders() {
      if (this.codes === 80002) {
        this.tipsContent = "请先申请为跑腿";
        this.showBombTips.visible = true;
      }
      if (this.codes === 1) {
        this.$router.push("/run");
      }
    },
    receiver() {
      if (this.codes === 80002) {
        this.tipsContent = "请先申请为跑腿";
        this.showBombTips.visible = true;
      }
      if (this.codes === 1) {
        this.$router.push("/orderreceiving");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/errands/Errandshomepage.scss";
</style>
