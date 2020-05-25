<template>
  <div class="bg">
    
    <div class="title">
      <p>智慧校园</p>
    </div>
    <div class="login cc-col-center" v-if="isShow">
      <div class="cc-df">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_shouji.png"
          alt="输入手机号图表"
          class="size"
        />
        <input
          type="text"
          maxlength="11"
          oninput="value=value.replace(/[^\d]/g,'')"
          placeholder="请输入手机号"
        />
      </div>
      <hr class="line">
      <div class="cc-df" style="margin-left:8%">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_yanzhengma.png"
          alt="输入验证码图表"
          class="size"
        />
        <input type="text" maxlength="6" placeholder="请输入验证码" />
        <div class="btn-sms"><p>获取验证码</p></div>
      </div>
      <hr class="line">
      <div class="cc-df">
        <div><p class="fontSize" @click="isShow=!isShow">账号密码登录</p></div>
        <div class="cc-mllleft"><p class="fontSize">忘记密码</p></div>
      </div>
      <div class="login-btn" @click="signIn()">
        <p>确认登录</p>
      </div>
    </div>
    <div class="login cc-col-center" v-if="!isShow">
      <div class="cc-df">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_shouji.png"
          alt="输入手机号图表"
          class="size"
        />
        <input
          type="text"
          maxlength="11"
          oninput="value=value.replace(/[^\d]/g,'')"
          placeholder="请输入手机号"
        />
      </div>
      <hr class="line">
      <div class="cc-df">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_yanzhengma.png"
          alt="输入mima 图表"
          class="size"
        />
        <input
          type="password"
          placeholder="请输入密码"
        />
      </div>
      <hr class="line">
      <div class="cc-df">
        <div><p class="fontSize" @click="isShow=!isShow">手机快捷登录</p></div>
        <div class="cc-mllleft"><p class="fontSize">忘记密码</p></div>
      </div>
      <div class="login-btn" @click="signIn()">
        <p>确认登录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isShow:true
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    signIn(){
      this.$router.push("/layout");
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.bg {
  text-align: center;
  width: 100%;
  background-image: url("https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bg_denglu.png");
  background-size: cover;
  padding-top: 130px;
}
.title {
  font-family: STLiti;
  font-size: 45px;
}
.title p {
  color: white;
}
.login {
  margin-top: 70%;
}
.login input {
  border: none;
  margin-bottom: 20px;
  width: 60%;
  border-bottom: 1px;
  border-bottom-color: #e5e5e5;
}
.login-btn{
  background-color: #44bbff;
  height: 40px;
  width: 230px;
  border-radius: 50px;
  padding-top: 7px;
}
.login-btn p{
    color: #d8f0ff;
    letter-spacing:3px;
}
.size {
  width: 15px;
  margin-right: 18px;
}
.line{
  width: 60%;
  margin-top: -10px;
  border: none;
  height: 1px;
  background: #ececec;
  margin-bottom: 20px;
}
.btn-sms{
  border: none;
  
}
.btn-sms p{
  color: #6cc9ff;
  font-size: 12px;
  margin-left: -30px;
}
.fontSize{
  font-size: 12px;
  margin-bottom: 15px;
}
input::-webkit-input-placeholder{
          color: #CCCCCC;
          font-size: 10px;
        }
</style>
