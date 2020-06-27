<template>
  <div class="bg">
    <div class="header">
      <router-link to="/layout">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>考务查询</p>
    </div>
    <hr class="line" />
    <div
      class="container"
      @click="show = !show"
    >
      <p>{{ semester }}</p>
      <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/xiajiantou.png" />
    </div>
    <div
      class="zhezhaoceng"
      v-if="show"
    >
      <div
        v-for="(item, index) in result"
        :key="index"
      >
        <p @click="getSeme(index)">{{ item.semester }}</p>
      </div>
    </div>

    <div
      v-for="(item, index) in exam.examinations"
      :key="index"
    >
      <div class="card">
        <div class="cc-df-between">
          <div>
            <p class="mid">{{ item.subject_name }}</p>
          </div>
          <div>
            <p
              class="small1"
              v-if="item.endTime === -1"
              :class="item.score < 60 ? 'font-red' : 'font-blue'"
            >
              {{ item.score }}分
            </p>
            <p
              class="small1"
              v-if="item.endTime === 0"
            >考试中</p>
            <p
              class="small1"
              v-if="item.endTime > 0"
            >
              距离还有{{ item.endTime }}天
            </p>
          </div>
        </div>
        <div>
          <p class="small">考试地点：{{ item.area }}</p>
        </div>
        <div>
          <p class="small">
            考试时间：{{ item.start_time }}~{{ item.finish_time }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="btn"
      v-show="flag"
    >
      <p>
        成绩报告单
      </p>
    </div>
    <div
      v-show="!flag"
      class="none"
    >
      <p>此页无成绩</p>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api.js");
export default {
  name: "exam",
  data() {
    return {
      show: false,
      flag: true,
      url: "",
      data: {
        field: ""
      },
      semesters: [],
      result: [],
      semester: "",
      exam: [],
      user: JSON.parse(localStorage.getItem("user"))
    };
  },
  components: {},
  created() {
    this.selectExam();
  },
  mounted() {},
  methods: {
    handleClose() {
      this.show = false;
    },
    async selectExam() {
      this.url = this.GLOBAL.baseUrl + "/examination/list/semester";
      this.data = {
        field: this.user.jobNumber
      };
      this.result = (await API.init(this.url, this.data, "post")).data;
      console.log(this.result);
      this.semester = this.result[0].semester;
      console.log(this.semester);
      this.getSeme(0);
    },
    getSeme(index) {
      this.exam = this.result[index];
      this.semester = this.exam.semester;
      this.show = false;

      if (this.exam.examinations.length == 0) {
        this.flag = false;
      } else this.flag = true;

      console.log(this.exam);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/exam.scss";
</style>
