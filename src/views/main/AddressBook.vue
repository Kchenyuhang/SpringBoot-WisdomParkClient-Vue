<template>
  <div class="bg">
    <div class="header">
      <router-link to="/layout">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>通讯录</p>
    </div>
    <div class="top">软件{{ clazzId }}</div>
    <!-- 左边内容部分 -->
    <div class="mylist">
      <delete-slider
        v-for="(student, stIndex) in studentInfo"
        :key="stIndex"
        :id="student.pkAddressBookId"
        @deleteLine="deleteLine"
      >
        <div
          class="content"
          :class="{
            'spell-letter': true,
            selected: student.spell.toUpperCase().slice(0, 1) === selectLetter
          }"
          :id="student.spell.toUpperCase().slice(0, 1)"
          v-if="
            stIndex === 0 ||
              studentInfo[stIndex].spell.toUpperCase().slice(0, 1) !==
                studentInfo[stIndex - 1].spell.toUpperCase().slice(0, 1)
          "
        >
          {{ student.spell.toUpperCase().slice(0, 1) }}
        </div>
        <div class="li-img" slot="img">
          <img
            src="https://soft1851.oss-cn-beijing.aliyuncs.com/markdown/用户 (1).png"
            alt=""
          />
        </div>
        <h3 class="li-title" slot="title">{{ student.name }}</h3>
        <p class="li-price" slot="price">{{ student.number }}</p>
      </delete-slider>
    </div>
    <!-- 右边字母 -->
    <div class="left-letter">
      <span
        v-for="(letter, letterIndex) in letterList"
        :key="letterIndex"
        @click="toLetters(letter)"
        >{{ letter }}
      </span>
      <button class="btn" @click="insert">+</button>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
var pinyin = require("pinyin");
import deleteSlider from "../../components/deleteTemplate";
export default {
  name: "Login",
  data() {
    return {
      // 拿到用户的userId 用来查询通讯录好友
      userId: this.$store.state.user.pkUserAccountId,
      clazzId: this.$store.state.user.clazzId,
      // 后端请求到前端的数据
      result: [],
      // 拼音数组
      spells: [],
      studentInfo: [], //学生信息列表
      letterList: [], //字母列表
      selectLetter: "", //被选中的字母
      number: 0,
      msg: false
    };
  },
  components: { deleteSlider },
  created() {
    this.selectSchedule();
  },
  mounted() {},
  methods: {
    // 点击左侧字母，右侧学生列表滚动到指定位置
    toLetters(letter) {
      console.log(letter);
      this.selectLetter = letter;
      let e = document.getElementById(letter);
      if (e) {
        e.scrollIntoView(); //滚动到指定位置
      }
    },
    async selectSchedule() {
      this.data = {
        field: this.userId
      };
      this.url = this.GLOBAL.baseUrl + "/addressBook/list/userId";
      this.result = await API.init(this.url, this.data, "post");
      this.transition();
    },
    transition() {
      let z = 97;
      for (let i = 0; i < 26; i++) {
        // 输出26个字母
        // console.log(String.fromCharCode(z));
        for (let j = 0; j < this.result.length; j++) {
          this.spells = pinyin(this.result[j].remark)[0][0];
          if (String.fromCharCode(z) == this.spells.substring(0, 1)) {
            this.studentInfo.push({
              name: this.result[j].remark,
              spell: this.spells,
              number: this.result[j].phoneNumber,
              pkAddressBookId: this.result[j].pkAddressBookId
            });
          }
        }
        z++;
      }
      this.ziMu();
    },
    ziMu() {
      // 初始化字母列表
      this.studentInfo.forEach((e, index) => {
        //过滤字母，重复的不选
        if (index === 0) {
          this.letterList[0] = e.spell.toUpperCase().slice(0, 1);
          this.selectLetter = this.letterList[0];
        } else if (
          index != 0 &&
          this.studentInfo[index].spell.toUpperCase().slice(0, 1) !==
            this.studentInfo[index - 1].spell.toUpperCase().slice(0, 1)
        ) {
          this.letterList.push(e.spell.toUpperCase().slice(0, 1));
        }
      });
    },
    insert() {
      this.$router.push("/insertaddress");
    },
    deleteLine(list) {
      this.studentInfo = [];
      this.letterList = [];
      this.result = list;
      this.transition();
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/AdressBook.scss";
</style>
