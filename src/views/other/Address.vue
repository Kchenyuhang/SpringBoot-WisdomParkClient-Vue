<template>
  <div class="bg">
    <div class="header" @click="out()">
      <img
        src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
        alt=""
      />
      <p>设置地址</p>
    </div>
    <div class="cc-col card">
      <div v-for="(item, index) in citys" :key="index">
        <div class="cc-df-between subCard" @click="into(index)">
          <p>{{ item.name }}</p>
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
            alt="右箭头"
          />
        </div>
        <hr class="line" />
      </div>
    </div>
  </div>
</template>

<script>
import provinces from "../../assets/js/city";
export default {
  name: "update",
  data() {
    return {
      dis: true,
      user: this.$store.state.user,
      token: this.$store.state.token,
      type: this.$store.state.type,
      nicknameInput: this.$store.state.user.nickname,
      url: "",
      data: {},
      citys: []
    };
  },
  components: {},
  created() {
    this.citys = provinces;
  },
  mounted() {},
  methods: {
    out() {
      if (this.type == 1) {
        this.$router.push("/base");
      }
      if (this.type == 2) {
        this.$router.push("/originadress");
      }
      if (this.type == 3) {
        this.$router.push("/destinationadress");
      }
    },
    into(index) {
      this.$router.push({
        name: "City",
        params: { Id: index, Address: this.citys[index].name }
      });
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/other/address.scss";
</style>
