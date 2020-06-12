<template>
  <div class="bg">
    <div class="header">
      <router-link to="/errandshomepage">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>发件信息</p>
    </div>
    <div class="originDiv">
      <div class="orginput">
        <router-link to="/address">
          <input
            class="inputtext"
            type="text"
            placeholder="从哪发出"
            @click="into(2)"
            v-model="this.address"
          />
        </router-link>
        <hr class="line" />
      </div>
      <div class="orginput">
        <input
          class="inputtext1"
          type="text"
          placeholder="填写楼号,单元,门牌号,送达更快"
          v-model="addressinfo"
        />
        <hr class="line" />
      </div>
      <div class="userinfoput">
        <input
          class="nameput"
          type="text"
          placeholder="发件人姓名"
          v-model="originname"
        />
        <p>|</p>
        <input
          class="numput"
          type="text"
          placeholder="发件人手机号"
          v-model="originnumber"
        />
      </div>
      <hr class="line" />
    </div>
    <button class="btn" @click="originBtn">确定</button>
  </div>
</template>

<script>
export default {
  name: "OriginAdress",
  data() {
    return {
      originname: this.$store.state.originname,
      originnumber: this.$store.state.originnumber,
      addressinfo: this.$store.state.addressinfo,
      address: this.$store.state.address,
    };
  },
  created() {},
  components: {},
  methods: {
    into(index) {
      localStorage.setItem("type", index);
      this.$store.commit("setType", index);
    },
    originBtn() {
      localStorage.setItem("addressinfo", this.addressinfo);
      this.$store.commit("setaddressinfo", this.addressinfo);
      localStorage.setItem("originnumber", this.originnumber);
      this.$store.commit("setoriginnumber", this.originnumber);
      localStorage.setItem("originname", this.originname);
      this.$store.commit("setoriginname", this.originname);
      this.$router.push('/errandshomepage')
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/errands/adressorder/OriginAdress.scss";
</style>
