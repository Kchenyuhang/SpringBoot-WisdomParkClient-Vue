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
            <p class="mid">{{item.subject_name}}</p>
          </div>
          <div>
            <p class="small1">{{item.score}}</p>
          </div>
        </div>
        <div>
          <p class="small">考试地点：{{item.area}}</p>
        </div>
        <div>
          <p class="small">考试时间：{{item.start_time}}~</p>
        </div>
      </div>
    </div>
    <div class="btn">
      <p>
        成绩报告单
      </p>
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
        field: "1802333118"
      },
      semesters: [],
      result: [],
      semester: "",
      exam: []
    };
  },
  components: {},
  created() {
    // this.getList();
    this.selectExam();
  },
  mounted() {},
  methods: {
    handleClose() {
      this.show = false;
    },
    async getList() {
      console.log(1);
      this.url = this.GLOBAL.baseUrl + "/semester/all";
      this.result = await API.init(this.url, null, "get");
      // console.log(this.result);
      this.semesters = this.result.data;
      this.semester = this.semesters[this.semesters.length - 1].name;
    },
    async selectExam() {
      this.url = "http://27e1537o04.zicp.vip:20304/examination/list/semester";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
      this.semester = this.result[0].semester;
    },
    getSeme(index) {
      this.exam = this.result[index];
      this.semester = this.exam.semester;
      this.show = false;
      console.log(this.exam);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/exam.scss";
</style>
