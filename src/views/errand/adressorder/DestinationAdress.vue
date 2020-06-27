<template>
  <div class="bg">
    <div class="header">
      <router-link to="/errandshomepage">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>收件信息</p>
    </div>
    <div class="destinationDiv">
      <div class="orginput">
        <a :href="href">
          <input
            @click="toSelectAddress"
            class="inputtext"
            type="text"
            placeholder="送到哪里"
            v-model="this.address1"
            ref="dd"
          />
        </a>
        <hr class="line" />
      </div>

      <!-- 测试数校验 -->
      <div
        class="alsrtInfo2"
        :style="{ display: displayStsates }"
        ref="alertMsg"
        v-if="phoneForm.tips == '街道不能为空'"
      >
        <div class="profPrompt_test">
          <p>{{ aletMsg }}</p>
        </div>
      </div>

      <div class="orginput">
        <input
          class="inputtext1"
          type="text"
          placeholder="填写楼号,单元,门牌号,送达更快"
          v-model="phoneForm.desinfo"
        />
        <hr class="line" />
      </div>
      <!-- 测试数校验 -->
      <div
        class="alsrtInfo1"
        :style="{ display: displayStsates }"
        ref="alertMsg"
        v-if="phoneForm.tips == '姓名不能为空'"
      >
        <div class="profPrompt_test">
          <p>{{ aletMsg }}</p>
        </div>
      </div>

      <div class="userinfoput">
        <input
          class="nameput"
          type="text"
          placeholder="收件人姓名"
          v-model="phoneForm.desname"
        />
        <p>|</p>
        <!-- 测试数校验 -->
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
        <input
          class="numput"
          type="number"
          placeholder="收件人手机号"
          v-model="phoneForm.desnumber"
          maxlength="11"
          oninput="if(value.length>5)value=value.slice(0,11)"
        />
      </div>
      <hr class="line" />
    </div>
    <button class="btn" @click="go">确定</button>
    <!-- 弹出框 -->
    <Dialog v-bind.sync="showBombTips" :tipsContent="tipsContent"></Dialog>
  </div>
</template>

<script>
import Dialog from "../../../components/dialog";
export default {
  name: "DestinationAdress",
  data() {
    return {
      // 弹出框消息提示数据
      showBombTips: {
        visible: false,
      },
      tipsContent: "请填写发件信息!",
      // 数据校验 判断是否为空的操作
      aletMsg: "", // 弹出框中的提示语
      displayStsates: "none",
      // 数据校验的测试
      phoneForm: {
        desname: "",
        desnumber: "",
        desinfo: "",
        tips: null,
        data: {},
        url: "",
        result: {},
      },
      schema: {
        desnumber: [
          { required: true, error: "手机号不能为空" },
          {
            regex: /^1[3|4|5|6|7|8][0-9]{9}$/,
            error: "手机号格式不对",
          },
        ],
        desinfo: [{ required: true, error: "街道不能为空" }],
        desname: [{ required: true, error: "姓名不能为空" }],
      },
      address: this.$store.state.address,
      address1: this.$store.state.address1,
      result: [],
      href:
        "http://apis.map.qq.com/tools/locpicker?search=1&type=0&key=2ODBZ-XXLCS-M6IOU-6WZBZ-LCTXQ-M5FCR&referer=myapp",
    };
  },
  created() {
    let su = JSON.stringify(this.$route.query.addr);
    let ad = su.substring(1, su.length - 1);
    this.address1 = ad;
    localStorage.setItem("address1", this.address1);
    this.$store.commit("setAddress1", this.address1);
  },
  components: { Dialog },
  methods: {
    // 提示框出现和消失
    alertDia(msg) {
      this.displayStsates = "block";
      this.aletMsg = msg;
      // 延迟2秒后消失 自己可以更改时间
      window.setTimeout(() => {
        this.displayStsates = "none";
      }, 2000);
    },
    // 数据校验， 判断是否为空
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
                return false;
              }
            } else if (key.regex) {
              if (!new RegExp(key.regex).test(values[field])) {
                valArr.tips = key.error;
                this.phoneForm.tips = valArr.tips;
                return false;
              }
            }
          }
        }
      }
      return true;
    },
    // 存值
    toSelectAddress() {
      let href = window.location.href;
      let urlArr = href.split("?");
      this.href = this.href + `&backurl=${urlArr[0]}`;
      this.parseAddress();
    },
    parseAddress(location) {
      let data = {
        key: "yourkey",
        get_poi: "1",
        location,
        output: "jsonp",
      };
      var url = `https://apis.map.qq.com/ws/geocoder/v1/`;
      let that = this;
      this.$jsonp({
        type: "get",
        dataType: "jsonp",
        jsonp: "callback",
        jsonpCallback: "parseAddressSucc",
        url: url,
        data: data,
        success: function(res) {
          console.log("成功");
          const { address_component } = res.result;
          //复制一份数据
          const copyAddress = JSON.parse(JSON.stringify(that.address));
          copyAddress.province = address_component.province;
          copyAddress.city = address_component.city;
          copyAddress.area = address_component.district;
          copyAddress.address_details =
            address_component.street + address_component.street_number;
          that.areas = [
            address_component.province,
            address_component.city,
            address_component.district,
          ];
          that.info = copyAddress;
          //业务处理
          console.log(res, "跨域数据");
        },
        error: function(err) {
          //业务处理
          console.log(err, "出错");
        }
      });
    },
    go() {
      if (
        localStorage.getItem("originnumber") === null ||
        localStorage.getItem("originname") === null ||
        localStorage.getItem("addressinfo") === null ||
        localStorage.getItem("address") === null
      ) {
        this.showBombTips.visible = true;
      } else {
        this.validate(this.schema, this.phoneForm);
        this.aletMsg = this.phoneForm.tips;
        this.alertDia(this.aletMsg);
        if (this.phoneForm.tips == null) {
          localStorage.setItem("desinfo", this.phoneForm.desinfo);
          this.$store.commit("setdestdesinfo", this.phoneForm.desinfo);
          localStorage.setItem("desname", this.phoneForm.desname);
          this.$store.commit("setdestdesname", this.phoneForm.desname);
          localStorage.setItem("desnumber", this.phoneForm.desnumber);
          this.$store.commit("setdestdesnumber", this.phoneForm.desnumber);
          this.$router.push("/orderconfirmation");
        } else {
          console.log(1);
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/errands/adressorder/DestinationAdress.scss";
</style>
