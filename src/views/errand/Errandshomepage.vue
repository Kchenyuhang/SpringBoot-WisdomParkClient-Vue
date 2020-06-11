<template>
  <div>
    <!-- 顶部图片 -->
    <div class="bg">
      <img
        src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/lADPGqGoaTpyd_7NAljNA4Q_900_600.jpg_720x720q90g.jpg"
        alt=""
      />
      <!-- 地址栏 -->
      <div class="inputDiv">
        <div class="inputTop">
          <span>帮我送</span>
          <span>帮我取</span>
        </div>
        <div class="inputCenter">
          <input
            type="text"
            class="inputext"
            placeholder="从哪里取件"
            @click="origin"
          />
          <input
            type="text"
            class="inputext"
            placeholder="送到哪里"
            @click="go"
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
              alt=""
            />
          </router-link>
          <p>个人中心</p>
        </div>
        <div>
          <router-link to="/order/all">
            <img
              src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/lALPD2eDMm1eLEfMyMzI_200_200.png_720x720q90g.jpg"
              alt=""
            />
          </router-link>
          <p>我的订单</p>
        </div>
        <div>
          <img
            src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/lALPD4BhqO7AwbXMyMzI_200_200.png_720x720q90g.jpg"
            alt=""
          />
          <p>客服中心</p>
        </div>
        <div>
          <img
            src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/lALPD3zUKkoFLEbMyMzI_200_200.png_720x720q90g.jpg"
            alt=""
          />
          <p>计费规则</p>
        </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Errandshomepage",
  data() {
    return {
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
  created() {},
  components: {},
  methods: {
    // 目的地
    go() {
      this.$router.push("/destinationadress");
    },
    // 发送地
    origin() {
      // this.$store.store.removeItem("address");
      // this.$store.store.removeItem("originname");
      // this.$store.store.removeItem("originnumber");
      // this.$store.store.removeItem("addressinfo");
      this.$router.push("/originadress");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/errands/Errandshomepage.scss";
</style>
