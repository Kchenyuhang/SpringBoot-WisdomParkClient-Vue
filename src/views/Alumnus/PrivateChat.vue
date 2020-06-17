<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/alumnusmessage">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            class="back"
          />
        </router-link>
        <p>私聊</p>
        <div class="setting" @click="into(1)">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/shezhi_icon.png" alt />
        </div>
      </div>
    </div>
    <div v-for="item in 3" :key="item.id">
      <div class="chat-card" @click="into(2)">
        <div class="chat-avatar">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/zyj.jpg" alt />
        </div>
        <div class="chat-content">
          <div class="row1 cc-df-between">
            <div class="nickname">
              <p>十七岁的他</p>
            </div>
            <div class="time">
              <p>10：43</p>
            </div>
          </div>
          <div class="row2">
            <p>Hello</p>
          </div>
        </div>
      </div>
      <hr class="line" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivateChat",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    into(index) {
      if (index == 1) {
        this.$router.push("/alumnussetting");
      }
      if (index == 2) {
        this.$router.push({
          name: "Chatting",
          params: { UserId: 2}
        });
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/PrivateChat.scss";
</style>
