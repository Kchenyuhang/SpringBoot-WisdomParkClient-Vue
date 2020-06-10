<template>
  <div id="classSchedule">
    <div class="header">
      <router-link to="/layout">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png" alt />
      </router-link>
      <p>课程表</p>
    </div>
    <hr class="line" />
    <div class="container">
      <!-- <p>第一周</p> -->
      <select name="bbxb" id="selecte1" class="longselect">
        <option value>---请选择--</option>
        <option
          value="0"
          selected="selected"
          v-for="(item, index) in List"
          :key="index"
        >{{ item.name }}</option>
      </select>

      <select name="bb" id="selecte" class="shortselect">
        <option value>---请选择--</option>
        <option value="0" selected="selected">第一周</option>
        <option value="1">第二周</option>
        <option value="2">第三周</option>
        <option value="3">第四周</option>
        <option value="4">第五周</option>
        <option value="5">第六周</option>
        <option value="6">第七周</option>
      </select>
      <!-- <img
        src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/xiajiantou.png"
        alt=""
      />-->
      <div v-if="show==true">
        <div class="card cc-shadow cc-donghua">
          <div>
            <img :src="message.cover" />
            <div>
              <p class="title">{{message.subjectName}}</p>
              <div class="grey">
                <p>教室：{{message.towerName}}</p>
                <p>教师：{{message.teacherName}}</p>
                <p>周次：{{message.weekDuration}}</p>
              </div>
            </div>
          </div>
        </div>
        <img class="close" src="../../assets/close.png" alt="123" @click="show=false" />
      </div>
    </div>

    <!--课程表-->
    <table class="schedule">
      <tr class="week-list">
        <td colspan="2"></td>
        <td v-for="(item, index) in weekends" :key="index">{{ item }}</td>
      </tr>
      <tr class="am">
        <td rowspan="2">上午</td>
        <td>1-2</td>
        <td
          v-for="item in 7"
          :key="item.id"
          :rowspan="sum[0][item-1]"
          v-bind:style="{ backgroundColor: subjects[0][item-1].backgroundColor }"
          @click="getMessage(subjects[0][item-1])"
        >{{subjects[0][item-1].subjectName}}</td>
      </tr>
      <tr>
        <td>3-4</td>
        <td
          v-for="item in 7"
          :key="item.id"
          v-show="sum[0][item-1]==1"
          @click="getMessage(subjects[1][item-1])"
          v-bind:style="{ backgroundColor: subjects[1][item-1].backgroundColor }"
        >{{subjects[1][item-1].subjectName}}</td>
      </tr>
      <tr class="noon">
        <td colspan="9" class="blank"></td>
      </tr>
      <tr>
        <td rowspan="2">下午</td>
        <td>5-6</td>
        <td
          v-for="item in 7"
          :key="item.id"
          :rowspan="sum[1][item-1]"
          @click="getMessage(subjects[2][item-1])"
          v-bind:style="{ backgroundColor: subjects[2][item-1].backgroundColor }"
        >{{subjects[2][item-1].subjectName}}</td>
      </tr>
      <tr class="pm">
        <td>7-8</td>
        <td
          v-for="item in 7"
          :key="item.id"
          v-show="sum[1][item-1]==1"
          @click="getMessage(subjects[3][item-1])"
          v-bind:style="{ backgroundColor: subjects[3][item-1].backgroundColor }"
        >{{subjects[3][item-1].subjectName}}</td>
      </tr>
      <tr>
        <td colspan="9" class="blank"></td>
      </tr>
      <tr>
        <td>晚上</td>
        <td>9-10</td>
        <td
          v-for="item in 7"
          :key="item.id"
          @click="getMessage(subjects[4][item-1])"
          v-bind:style="{ backgroundColor: subjects[4][item-1].backgroundColor }"
        >{{subjects[4][item-1].subjectName}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
const API = require("../../request/api.js");
export default {
  name: "schedule",
  data() {
    return {
      show: false,
      schedul: [],
      week: [],
      weekends: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      result: [],
      List: [],
      data: {
        clazzId: 1,
        semesterId: 1,
        week: 1
      },
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
      message: []
    };
  },
  components: {},
  async created() {
    this.url = this.GLOBAL.baseUrl + "/course/schedule";
    this.result = (await API.init(this.url, this.data, "post")).data;
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
            this.subjects[j][k] = this.result[i];
          }
        }
      }
    }
    this.selectSum();
    this.getList();
  },
  mounted() {},
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
              this.subjects[j][k] = this.result[i];
              this.subject[j][k] = this.result[i].subjectName;
            }
          }
        }
      }
      console.log(this.subjects);
    },
    async getList() {
      this.url = this.GLOBAL.baseUrl + "/semester/all";
      this.List = (await API.init(this.url, this.data, "get")).data;
    },
    getMessage(data) {
      console.log(data);
      this.message = data;
      this.show = true;
    }
  },
  computed: {}
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/Schedule/Schedule.scss";
</style>
