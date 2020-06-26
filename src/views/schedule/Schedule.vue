<template>
  <div
    id="classSchedule"
    class="bg"
  >
    <div class="header">
      <router-link to="/layout">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png" alt />
      </router-link>
      <p>课程表</p>
    </div>
    <hr class="line" />
    <div class="container">
      <p
        class="shortselect cc-df-center"
        @click="change(1)"
      >{{ day }}</p>
      <p
        class="longselect cc-df-center"
        @click="change(2)"
      >{{ semester }}</p>
      <div
        class="zhezhaoceng"
        v-if="show1"
      >
        <div
          v-for="(item, index) in List"
          :key="index"
        >
          <p @click="getSeme(index)">{{ item.name }}</p>
        </div>
      </div>
      <div
        class="zhezhaoceng2"
        v-if="show2"
      >
        <div
          v-for="(item, index) in weeks"
          :key="index"
        >
          <p @click="getDay(index)">{{ item }}</p>
        </div>
      </div>
      <div v-if="show == true">
        <div class="card cc-shadow cc-donghua">
          <div>
            <img :src="message.cover" />
            <div>
              <p class="title">{{ message.subjectName }}</p>
              <div class="grey">
                <p>教室：{{ message.towerName }}</p>
                <p>教师：{{ message.teacherName }}</p>
                <p>周次：{{ message.weekDuration }}</p>
              </div>
            </div>
          </div>
        </div>
        <img class="close" src="../../assets/close.png" alt="123" @click="show = false" />
      </div>
    </div>
    <!--课程表-->
    <table class="schedule">
      <tr
        class="week-list"
        style="height:30px"
      >
        <td colspan="2"></td>
        <td v-for="(item, index) in weekends" :key="index" style="width:40px">{{ item }}</td>
      </tr>
      <tr
        class="am"
        style="height:70px"
      >
        <td
          rowspan="2"
          @click="show = true"
        >上午</td>

        <td>1-2</td>
        <td
          v-for="(item, index) in subjects[0]"
          :key="index"
          :rowspan="sum[0][index]"
          v-bind:style="{ backgroundColor: item.backgroundColor }"
          @click="getMessage(item)"
        >{{ item.subjectName }}</td>
      </tr>
      <tr style="height:70px">
        <td>3-4</td>
        <td
          v-for="(item, index) in subjects[1]"
          :key="index"
          :rowspan="sum[0][index]"
          v-show="sum[0][index] == 1"
          v-bind:style="{ backgroundColor: item.backgroundColor }"
          @click="getMessage(item)"
        >{{ item.subjectName }}</td>
      </tr>
      <tr
        class="noon"
        style="height:20px"
      >
        <td
          colspan="9"
          class="blank"
        ></td>
      </tr>
      <tr style="height:70px">
        <td rowspan="2">下午</td>
        <td>5-6</td>
        <td
          v-for="item in 7"
          :key="item.id"
          :rowspan="sum[1][item - 1]"
          @click="getMessage(subjects[2][item - 1])"
          v-bind:style="{
            backgroundColor: subjects[2][item - 1].backgroundColor
          }"
        >{{ subjects[2][item - 1].subjectName }}</td>
      </tr>
      <tr
        class="pm"
        style="height:70px"
      >
        <td>7-8</td>
        <td
          v-for="item in 7"
          :key="item.id"
          v-show="sum[1][item - 1] == 1"
          @click="getMessage(subjects[3][item - 1])"
          v-bind:style="{
            backgroundColor: subjects[3][item - 1].backgroundColor
          }"
        >{{ subjects[3][item - 1].subjectName }}</td>
      </tr>
      <tr style="height:20px">
        <td
          colspan="9"
          class="blank"
        ></td>
      </tr>
      <tr style="height:70px">
        <td>晚上</td>
        <td>9-10</td>
        <td
          v-for="item in 7"
          :key="item.id"
          @click="getMessage(subjects[4][item - 1])"
          v-bind:style="{
            backgroundColor: subjects[4][item - 1].backgroundColor
          }"
        >{{ subjects[4][item - 1].subjectName }}</td>
      </tr>
    </table>

    <div
      class="text"
      v-if="show3"
    ></div>
    <div
      class="text"
      v-if="!show3"
    ></div>
  </div>
</template>

<script>
const API = require("../../request/api.js");
export default {
  name: "schedule",
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      show3: false,
      schedul: [],
      week: [],
      weeks: [
        "第一周",
        "第二周",
        "第三周",
        "第四周",
        "第五周",
        "第六周",
        "第七周",
        "第八周",
        "第九周",
        "第十周",
        "第十一周",
        "第十二周",
        "第十三周",
        "第十四周",
        "第十五周",
        "第十六周",
        "第十七周",
        "第十八周",
        "第十九周"
      ],
      weekends: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      result: [],
      List: [],
      data: {},
      subjects: [
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}]
      ],
      sum: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1]
      ],
      message: [],
      longInput: "",
      emesters: [],
      semester: "",
      semesterId: 1,
      exam: [],
      day: "",
      user: this.$store.state.user,
      dayId: 2
    };
  },
  components: {},
  async created() {
    this.selectSum();
    // this.getAll();
    this.getList();
    // console.log(this.List);
    this.data = {
      clazzId: this.user.clazzId,
      semesterId: 19,
      week: this.dayId
    };
    this.url = this.GLOBAL.baseUrl + "/course/schedule";
    this.result = (await API.init(this.url, this.data, "post")).data;
    console.log(this.result);
    for (let j = 0; j < this.subjects.length; j++) {
      for (let k = 0; k < this.subjects[j].length; k++) {
        this.subjects[j][k] = {
          subjectName: null,
          backgroundColor: null,
          cover: null,
          teacherName: null,
          roomName: null,
          towerName: null,
          weekDay: null,
          time: null,
          weekDuration: null
        };
      }
    }
    for (let i = 0; i < this.result.length; i++) {
      for (let j = 0; j < this.subjects.length; j++) {
        for (let k = 0; k < this.subjects[j].length; k++) {
          if (this.result[i].time == j + 1 && this.result[i].weekDay == k) {
            this.subjects[j][k - 1] = this.result[i];
          }
        }
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    selectSum() {
      console.log(this.subjects);
      let z = 0;
      for (let j = 0; j < this.subjects.length - 1; j = j + 2) {
        for (let k = 0; k < 7; k++) {
          if (
            this.subjects[j][k].subjectName ==
              this.subjects[j + 1][k].subjectName &&
            this.subjects[j][k].subjectName != null
          ) {
            this.sum[z][k] = 2;
          }
        }
        z++;
      }
      console.log(this.sum);
    },
    async getAll() {
      this.subjects = [
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}]
      ];
      this.sum = [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1]
      ];
      this.data = {
        clazzId: this.user.clazzId,
        semesterId: this.semesterId,
        week: this.dayId
      };
      this.url = this.GLOBAL.baseUrl + "/course/schedule";
      this.result = (await API.init(this.url, this.data, "post")).data;
      console.log(this.result);
      for (let j = 0; j < this.subjects.length; j++) {
        for (let k = 0; k < this.subjects[j].length; k++) {
          this.subjects[j][k] = {
            subjectName: null,
            backgroundColor: null,
            cover: null,
            teacherName: null,
            roomName: null,
            towerName: null,
            weekDay: null,
            time: null,
            weekDuration: null
          };
        }
      }
      for (let i = 0; i < this.result.length; i++) {
        for (let j = 0; j < this.subjects.length; j++) {
          for (let k = 0; k < this.subjects[j].length; k++) {
            if (
              this.result[i].time == j + 1 &&
              this.result[i].weekDay == k + 1
            ) {
              this.subjects[j][k] = this.result[i];
            }
          }
        }
      }
      this.selectSum();
    },
    async getList() {
      this.url = this.GLOBAL.baseUrl + "/semester/all";
      this.List = (await API.init(this.url, this.data, "post")).data;
      this.semester = this.List[0].name;
      this.day = this.weeks[0];
    },
    getMessage(data) {
      console.log(data);
      if (!this.show && data.subjectName != null) {
        this.message = data;
        this.show = true;
      }
    },
    getSeme(index) {
      this.exam = this.List[index];
      this.semesterId = this.exam.pkSemesterId;
      this.semester = this.exam.name;
      this.show1 = false;
      this.show2 = false;
      this.getAll();
    },
    getDay(index) {
      this.dayId = index + 1;
      this.day = this.weeks[index];
      this.show1 = false;
      this.show2 = false;
      this.getAll();
    },
    change(index) {
      if (index == 1) {
        this.show2 = !this.show2;
        this.show1 = false;
      }
      if (index == 2) {
        this.show1 = !this.show1;
        this.show2 = false;
      }
    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop; //滚动条的高
      if (scrollTop != null) {
        this.show3 = !this.show3;
      }
    }
  },
  computed: {}
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/Schedule/Schedule.scss";
</style>
