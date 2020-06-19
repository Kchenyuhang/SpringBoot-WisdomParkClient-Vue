<template>
  <div class="bg">
    <div class="header">
      <router-link to="/errandshomepage">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>个人中心</p>
    </div>
    <div class="personDiv">
      <div class="avatardiv">
        <img
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/ic_about_logo.png"
          alt="个人中心图标"
        />
        <br />
        <p>{{ numberstring }}</p>
      </div>
    </div>
    <div class="centerDiv">
      <router-link to="/order/all">
        <div class="card">
          <img
            src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/ic_menu_order.png"
            alt=""
          />
          <p>订单</p>
          <img
            class="rightimg"
            src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/右箭头.png"
            alt=""
          />
        </div>
      </router-link>
      <hr hr class="line" />
      <div class="card" @click="wallet">
        <img
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/ic_menu_wallet.png"
          alt=""
        />
        <p>钱包</p>
        <img
          class="rightimg"
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/右箭头.png"
          alt=""
        />
      </div>
      <hr class="line" />
      <div class="card">
        <img
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/ic_menu_service.png"
          alt=""
        />
        <p>客服</p>
        <img
          class="rightimg"
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/右箭头.png"
          alt=""
        />
      </div>
      <hr hr class="line" />
      <div class="card" @click="set">
        <img
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/ic_menu_setting.png"
          alt=""
        />
        <p>设置</p>
        <img
          class="rightimg"
          src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/右箭头.png"
          alt=""
        />
      </div>
      <hr class="line" />
      <router-link to="/apply">
        <div class="card">
          <img
            src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/ic_loading_refresh_static.png"
            alt=""
          />
          <p>申请</p>
          <img
            class="rightimg"
            src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/右箭头.png"
            alt=""
          />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Personalcenter",
  data() {
    return {
      phoneNumber: this.$store.state.user.phoneNumber,
      numberstring: ""
    };
  },
  created() {
    this.numberSubstring();
  },
  components: {},
  methods: {
    numberSubstring() {
      const NumberString = JSON.stringify(this.phoneNumber);
      let center = "****";
      let beforefour = NumberString.substring(1, 4);
      let endfour = NumberString.substring(8, 12);
      this.numberstring = beforefour + center + endfour;
    },
    wallet() {
      this.$router.push("/wallet");
    },
    set() {
      this.$router.push("/set");
    }
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/errands/Personalcenter.scss";
</style>
