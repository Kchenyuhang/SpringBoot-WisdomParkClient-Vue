<template>
  <div id="app">
    <div class="advert-top" v-if="message">
      <div class="ico-horn">
        <!-- 喇叭图标 -->
        <img :src="ico_horn" alt="" class="image" />
      </div>
      <!-- 滚动文字区域 -->
      <div class="marquee-wrap">
        <ul class="marquee-box" ref="marqueeBox">
          <!-- 循环3次为了无缝衔接， 给第一个设置Id 方便计算文字宽度 -->
          <li
            class="marquee-list"
            v-for="i in 3"
            :key="i"
            v-html="message"
            ref="marquee"
            :id="i == 1 ? 'marquee' : ''"
          ></li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
const Sock = require("../assets/js/Sock");
export default {
  name: "Eservice",
  props: ["message"],
  data() {
    return {
      userId: JSON.parse(localStorage.getItem("user")).jobNumber,
      ico_horn: "https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/喇叭_1.png",
      // message: "全球新冠肺炎确诊病例超45万，死亡人数破2万！",
    };
  },
  async created() {
    await Sock.initWebSocket();
  },
  components: {},
  mounted() {
    // 延时滚动
    setTimeout(() => {
      this.runMarquee();
    }, 1000);
    //测试消息推送
    // console.log(this.userId);
    // 消息推送测试
    this.information();
  },
  methods: {
    // 测试消息推送
    information() {
      this.result = Sock.getErrendsMessage(this.userId);
      // console.log(this.result.msg.body);
    },
    runMarquee() {
      // 获取文字 计算后宽度
      var width = this.$refs.marquee[0].getBoundingClientRect().width,
        marquee = this.$refs.marqueeBox,
        disx = 0; // 位移距离

      //设置位移
      setInterval(() => {
        disx--; // disx-=1; 滚动步长
        if (-disx >= width) {
          disx = 10; // 如果位移超过文字宽度，则回到起点  marquee-list的margin值
        }
        // marquee.style.transform = 'translateX(' + disx + 'px)'
        marquee.style.left = disx + "px";
      }, 30); //滚动速度
    },
  },
};
(function px2rem(doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
      /*
       * 100 -> html,body {  font-size:100px; }
       * 750 -> 此处以 iPhone6 两倍设计稿 宽度750px 布局页面
       * 根据具体情况改变这两个数值
       */
    };
  if (!doc.addEventListener) return;
  // 窗口大小发生变化，初始化
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
  //防止在html未加载完毕时执行，保证获取正确的页宽
  setTimeout(function() {
    px2rem(doc, win);
  }, 200);
})(document, window);
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  border: 0;
}

li {
  list-style: none;
}
.advert-top {
  position: absolute;
  top: 80px;
  left: 0px;
  display: flex;
  width: 100%;
  height: 33px;
  background: linear-gradient(
    270deg,
    #fffbe8 0,
    #fffbe8 48%,
    #fffbe8 86%,
    #fffbe8 100%
  );
  color: #ef7720;
  font-size: 15px;
  align-items: center;
}
.ico-horn {
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
}
.ico-horn > img {
  width: 1.5rem;
  height: 1.5rem;
}
/* 以下代码与滚动相关 */
.marquee-wrap {
  position: relative;
  display: flex;
  overflow: hidden;
  width: 300px;
  height: 100%;
}
.marquee-box {
  position: absolute;
  top: 50%;
  display: flex;
  white-space: nowrap;
  transform: translateY(-50%);
}
.marquee-list {
color: #ef7720;
  margin-right: 10px;
} /* 此处“px”方便回到起点 */
.marquee-list span {
  padding: 0 0.04rem;
  color: #ef7720;
  font-weight: 700;
}
</style>