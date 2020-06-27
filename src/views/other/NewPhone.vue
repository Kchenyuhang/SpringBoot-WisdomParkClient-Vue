<template>
  <div class="bg cc-donghua-top">
    <div class="header">
      <router-link to="/olderphone">
        <div class="cancel">
          <p>取消</p>
        </div>
      </router-link>
      <p>更换手机号</p>
      <div
        class="save"
        @click="into()"
      >
        <button
          class="color"
          :class="{ changeColor: isTrue() }"
        >
          <p>下一步</p>
        </button>
      </div>
    </div>
    <hr class="line" />
    <div class="card">
      <div class="phone">
        <p>
          更换手机后，下次登陆可使用新手机号登陆。当前手机号：{{
            user.phoneNumber
          }}
        </p>
      </div>
      <hr class="line1" />
      <div class="newphone">
        <p>新手机号:</p>
        <input
          type="number"
          class="phonenumber"
          placeholder="请填写手机号码"
          v-model="phoneInput"
          oninput="if(value.length>11)value=value.slice(0,11)"
        />
      </div>
      <hr class="line1" />
    </div>
  </div>
</template>

<script>
export default {
  name: "update",
  data() {
    return {
      dis: true,
      user: this.$store.state.user,
      token: this.$store.state.token,
      phoneInput: "",
      url: "",
      data: {}
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    into() {
      if (this.isTrue()) {
        this.$router.push({
          name: "NewPhoneCode",
          params: { Phone: this.phoneInput }
        });
      }
    },
    isTrue() {
      if (this.phoneInput == this.user.phoneNumber) {
        return false;
      }
      if (new RegExp(/^1[3|4|5|6|7|8][0-9]{9}$/).test(this.phoneInput)) {
        return true;
      }
      return false;
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/other/newphone.scss";
</style>
