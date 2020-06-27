<template>
  <div class="bg">
    <div class="title">
      <p>智慧校园</p>
    </div>
    <div class="login cc-col-center" v-if="isShow == 1">
      <div
        class="alsrtInfo"
        :style="{ display: displayStsates }"
        ref="alertMsg"
        v-if="phoneForm.tips == '手机号不能为空'"
      >
        <div class="profPrompt_test">
          <p>{{ aletMsg }}</p>
        </div>
      </div>
      <div
        class="alsrtInfo"
        :style="{ display: displayStsates }"
        ref="alertMsg"
        v-if="phoneForm.tips == '手机号格式不对'"
      >
        <div class="profPrompt_test">
          <p>{{ aletMsg }}</p>
        </div>
      </div>
      <div class="cc-df">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_shouji.png"
          alt="输入手机号图表"
          class="size"
        />
        <input
          type="number"
          maxlength="11"
          oninput="value=value.replace(/[^\d]/g,'')"
          placeholder="请输入手机号"
          v-model="phoneForm.phoneNumber"
        />
      </div>
      <hr class="line" />
      <div
        class="alsrtInfo"
        :style="{ display: displayStsates }"
        ref="alertMsg"
        v-if="phoneForm.tips == '验证码不能为空'"
      >
        <div class="profPrompt_test">
          <p>{{ aletMsg }}</p>
        </div>
      </div>
      <div class="cc-df" style="margin-left:8%">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_yanzhengma.png"
          alt="输入验证码图表"
          class="size"
        />
        <input type="text" maxlength="6" placeholder="请输入验证码" v-model="phoneForm.code" />
        <div class="btn-sms" @click="sendMessage()">
          <p>获取验证码</p>
        </div>
      </div>
      <hr class="line" />
      <div class="cc-df">
        <div>
          <p class="fontSize" @click="tabIsShow(2)">账号密码登录</p>
        </div>
        <div class="cc-mllleft">
          <p class="fontSize" @click="tabIsShow(3)">忘记密码</p>
        </div>
      </div>
      <div class="qq">
        <img
          src="https://images.weserv.nl/?url=http://ww1.sinaimg.cn/large/0064QvQTly1gfxcqt9219j30jg0jgjsa.jpg"
          alt
          @click="qq"
        />
      </div>
      <div class="weixin">
        <img
          src="https://images.weserv.nl/?url=http://ww1.sinaimg.cn/large/0064QvQTly1gfxelshmwwj30jg0jgt9a.jpg"
          alt
        />
      </div>
      <div class="weibo">
        <img
          src="https://images.weserv.nl/?url=http://ww1.sinaimg.cn/large/0064QvQTly1gfxfvtsiblj30jh0jggm6.jpg"
          alt
        />
      </div>
      <div class="login-btn" @click="messageSignIn()">
        <p>确认登录</p>
      </div>
    </div>
    <div class="login cc-col-center" v-if="isShow == 2">
      <div
        class="alsrtInfo"
        :style="{ display: displayStsates }"
        ref="alertMsg"
        v-if="phoneForm.tips == '学号不能为空'"
      >
        <div class="profPrompt_test">
          <p>{{ aletMsg }}</p>
        </div>
      </div>
      <div
        class="alsrtInfo"
        :style="{ display: displayStsates }"
        ref="alertMsg"
        v-if="phoneForm.tips == '账号错误'"
      >
        <div class="profPrompt_test">
          <p>{{ aletMsg }}</p>
        </div>
      </div>
      <div class="cc-df">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_shouji.png"
          alt="输入学号号图表"
          class="size"
        />
        <input type="number" placeholder="请输入学号" v-model="phoneForm.studentId" />
      </div>
      <hr class="line" />
      <div
        class="alsrtInfo"
        :style="{ display: displayStsates }"
        ref="alertMsg"
        v-if="phoneForm.tips == '密码不能为空'"
      >
        <div class="profPrompt_test">
          <p>{{ aletMsg }}</p>
        </div>
      </div>
      <div class="cc-df">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_yanzhengma.png"
          alt="输入mima 图表"
          class="size"
        />
        <input type="password" placeholder="请输入密码" v-model="phoneForm.passWord" />
      </div>

      <hr class="line" />
      <div class="cc-df">
        <div>
          <p class="fontSize" @click="tabIsShow(1)">手机快捷登录</p>
        </div>
        <div class="cc-mllleft">
          <p class="fontSize" @click="tabIsShow(3)">忘记密码</p>
        </div>
      </div>
      <div class="qq">
        <img src="http://ww1.sinaimg.cn/large/0064QvQTly1gfxcqt9219j30jg0jgjsa.jpg" alt @click="qq" />
      </div>
      <div class="weixin">
        <img src="http://ww1.sinaimg.cn/large/0064QvQTly1gfxelshmwwj30jg0jgt9a.jpg" alt />
      </div>
      <div class="weibo">
        <img src="http://ww1.sinaimg.cn/large/0064QvQTly1gfxfvtsiblj30jh0jggm6.jpg" alt />
      </div>
      <div class="login-btn" @click="passwordSignIn()">
        <p>确认登录</p>
      </div>
    </div>
    <div class="login cc-col-center" v-if="isShow == 3">
      <div
        class="alsrtInfo"
        :style="{ display: displayStsates }"
        ref="alertMsg"
        v-if="phoneForm.tips == '手机号不能为空'"
      >
        <div class="profPrompt_test">
          <p>{{ aletMsg }}</p>
        </div>
      </div>
      <div
        class="alsrtInfo"
        :style="{ display: displayStsates }"
        ref="alertMsg"
        v-if="phoneForm.tips == '手机号格式不对'"
      >
        <div class="profPrompt_test">
          <p>{{ aletMsg }}</p>
        </div>
      </div>
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
          v-model="phoneForm.phoneNumber"
        />
      </div>
      <hr class="line" />
      <div
        class="alsrtInfo"
        :style="{ display: displayStsates }"
        ref="alertMsg"
        v-if="phoneForm.tips == '验证码不能为空'"
      >
        <div class="profPrompt_test">
          <p>{{ aletMsg }}</p>
        </div>
      </div>
      <div class="cc-df" style="margin-left:8%">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_yanzhengma.png"
          alt="输入验证码图表"
          class="size"
        />
        <input type="text" maxlength="6" placeholder="请输入验证码" v-model="phoneForm.code" />
        <div class="btn-sms" @click="sendMessage()">
          <p>获取验证码</p>
        </div>
      </div>
      <hr class="line" />
      <div
        class="alsrtInfo"
        :style="{ display: displayStsates }"
        ref="alertMsg"
        v-if="phoneForm.tips == '密码不能为空'"
      >
        <div class="profPrompt_test">
          <p>{{ aletMsg }}</p>
        </div>
      </div>
      <div class="cc-df">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/icon_yanzhengma.png"
          alt="输入密码图表"
          class="size"
        />
        <input type="password" placeholder="请输入密码" v-model="phoneForm.passWord" />
      </div>
      <hr class="line" />
      <div class="cc-df">
        <div>
          <p class="fontSize" @click="tabIsShow(2)">账号密码登录</p>
        </div>
        <div class="cc-mllleft">
          <p class="fontSize" @click="tabIsShow(1)">手机验证登录</p>
        </div>
      </div>
      <div class="login-btn" @click="forgetSignIn()">
        <p>确认登录</p>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../request/api");
export default {
  name: "Login",
  data() {
    return {
      isShow: 1,
      aletMsg: "", // 弹出框中的提示语
      displayStsates: "none",
      phoneForm: {
        phoneNumber: "",
        code: "",
        studentId: "",
        passWord: "",
        tips: null,
        data: {},
        url: "",
        result: {}
      },
      schema: {
        phoneNumber: [
          { required: true, error: "手机号不能为空" },
          {
            regex: /^1[3|4|5|6|7|8][0-9]{9}$/,
            error: "手机号格式不对"
          },
          {
            regex: /^[0-9]+$/,
            error: "其输入纯数字"
          }
        ],
        code: [{ required: true, error: "验证码不能为空" }],
        studentId: [{ required: true, error: "学号不能为空" }],
        passWord: [{ required: true, error: "密码不能为空" }]
      }
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    validate(schema, values) {
      this.phoneForm.tips = null;
      const valArr = schema;
      for (const field in schema) {
        if (Object.prototype.hasOwnProperty.call(schema, field)) {
          for (const key of schema[field]) {
            if (key.required) {
              if (!values[field]) {
                valArr.tips = key.error;
                this.phoneForm.tips = valArr.tips;
                console.log(valArr.tips);
                return false;
              }
            } else if (key.regex) {
              if (!new RegExp(key.regex).test(values[field])) {
                valArr.tips = key.error;
                this.phoneForm.tips = valArr.tips;
                console.log(valArr.tips);
                return false;
              }
            }
          }
        }
      }
      return true;
    },
    clean() {
      this.phoneForm.phoneNumber = "";
      this.phoneForm.passWord = "";
      this.phoneForm.code = "";
      this.phoneForm.studentId = "";
    },
    // 提示弹框
    alertDia(msg) {
      this.displayStsates = "block";
      this.aletMsg = msg;
      // 延迟2秒后消失 自己可以更改时间
      window.setTimeout(() => {
        this.displayStsates = "none";
      }, 2000);
    },
    async messageSignIn() {
      this.phoneForm.passWord = 1;
      this.phoneForm.studentId = 1;
      this.validate(this.schema, this.phoneForm);
      this.aletMsg = this.phoneForm.tips;
      this.alertDia(this.aletMsg);
      if (this.phoneForm.tips == null) {
        this.data = {
          phoneNumber: this.phoneForm.phoneNumber,

          verifyCode: this.phoneForm.code
        };
        this.url = this.GLOBAL.baseUrl + "/user/code/login";
        this.result = await API.init(this.url, this.data, "post");
        console.log(this.result);
        if (this.result.msg == "成功") {
          localStorage.setItem("token", this.result.data.token);
          this.$store.commit("setToken", this.result.data.token);
          console.log(this.result.data.token);

          localStorage.setItem(
            "user",
            JSON.stringify(this.result.data.UserAccount)
          );
          this.$store.commit("setUser", this.result.data.UserAccount);
          console.log(this.result.data.UserAccount);
          this.$router.push("/layout");
        }
      }
    },
    async passwordSignIn() {
      this.phoneForm.phoneNumber = 15152231582;
      this.phoneForm.code = 1;
      this.validate(this.schema, this.phoneForm);
      this.aletMsg = this.phoneForm.tips;
      this.alertDia(this.aletMsg);
      if (this.phoneForm.tips == null) {
        this.data = {
          userAccount: this.phoneForm.studentId,
          password: this.phoneForm.passWord
        };
        this.url = this.GLOBAL.baseUrl + "/user/login";
        // this.$axios.defaults.headers.post["token"] = null;
        this.result = await API.init(this.url, this.data, "post");
        console.log(this.result);
        if (this.result.msg == "成功") {
          localStorage.setItem("token", this.result.data.token);
          this.$store.commit("setToken", this.result.data.token);
          console.log(this.result.data.token);

          localStorage.setItem(
            "user",
            JSON.stringify(this.result.data.UserAccount)
          );
          this.$store.commit("setUser", this.result.data.UserAccount);
          console.log(this.result.data.UserAccount);
          this.$router.push("/layout");
        }
      }
    },
    async forgetSignIn() {
      this.phoneForm.studentId = 1;
      this.validate(this.schema, this.phoneForm);
      this.aletMsg = this.phoneForm.tips;
      this.alertDia(this.aletMsg);
      if (this.phoneForm.tips == null) {
        this.checkCode();
      }
    },
    tabIsShow(index) {
      this.clean();
      this.isShow = index;
    },
    async sendMessage() {
      this.data = {
        phoneNumber: this.phoneForm.phoneNumber
      };
      this.url = this.GLOBAL.baseUrl + "/sendCode";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
    },
    async checkCode() {
      this.data = {
        phoneNumber: this.phoneForm.phoneNumber,

        verifyCode: this.phoneForm.code
      };
      this.url = this.GLOBAL.baseUrl + "/verifyCode";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
      this.data = {
        userAccount: this.phoneForm.phoneNumber,

        password: this.phoneForm.passWord
      };
      this.url = this.GLOBAL.baseUrl + "/user/password";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
      this.isShow = 2;
      this.clean();
    },
    updatePassword() {
      // this.$axios({
      //   method: "put",
      //   url:
      //     this.GLOBAL.baseUrl +
      //     "/user/user/password?userAccount=" +
      //     this.phoneForm.phoneNumber
      // })
      //   .then(res => {
      //     console.log(this.phoneForm);
      //     console.log(res);
      //   })
      //   .catch(function(error) {
      //     console.log(error);
      //   });
    },
    qq() {
      // window.location.href = 'http://www.ntt1914866205.xyz';
      window.location.href =
        "https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101883898&redirect_uri=http%3A%2F%2Fwww.ntt1914866205.xyz%2Fconnect&state=e9e3f9ee0f10480b927b25eae8f32776";
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../assets/scss/login.scss";
.qq {
  margin: 0 150px 20px 0;
  height: 20px;
  width: 20px;
}
.weixin {
  float: right;
  height: 20px;
  width: 20px;
  margin-top: -40px;
}
.weibo {
  float: right;
  height: 20px;
  width: 20px;
  margin-left: 140px;
  margin-top: -18px;
}
</style>
