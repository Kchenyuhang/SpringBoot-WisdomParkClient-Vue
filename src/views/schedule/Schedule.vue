<template>
  <div id="classSchedule">
    <div class="header">
      <router-link to="/layout">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>课程表</p>
    </div>
    <hr class="line" />
    <div class="container">
      <!-- <p>第一周</p> -->
      <select
        name="bbxb"
        id="selecte1"
        class="longselect"
      >
        <option value="">---请选择--</option>
        <option
          value="0"
          selected="selected"
          v-for="(item, index) in List"
          :key="index"
        >{{ item.name }}</option>
      </select>

      <select
        name="bb"
        id="selecte"
        class="shortselect"
      >
        <option value="">---请选择--</option>
        <option
          value="0"
          selected="selected"
        >第一周</option>
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
      /> -->
    </div>

    <!--课程表-->
    <table class="schedule">
      <tr class="week-list">
        <td colspan="2"></td>
        <td
          v-for="(item, index) in weekends"
          :key="index"
        >
          {{ item }}
        </td>
      </tr>
      <tr class="am">
        <td rowspan="2">上午</td>
        <td>1-2</td>
        <td
          v-for="(item,index) in subjects[0]"
          :key="index"
        >
          {{ item.subjectName }}
        </td>
      </tr>
      <tr>
        <td>3-4</td>
        <td
          v-for="item in 7"
          :key="item.id"
        ></td>
      </tr>
      <tr class="noon">
        <td
          colspan="9"
          class="blank"
        ></td>
      </tr>
      <tr>
        <td rowspan="2">下午</td>
        <td>5-6</td>
        <td
          v-for="item in 7"
          :key="item.id"
        ></td>
      </tr>
      <tr class="pm">
        <td>7-8</td>
        <td
          v-for="item in 7"
          :key="item.id"
        ></td>
      </tr>
      <tr>
        <td
          colspan="9"
          class="blank"
        ></td>
      </tr>
      <tr>
        <td>晚上</td>
        <td>9-10</td>
        <td
          v-for="item in 7"
          :key="item.id"
        ></td>
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
      subject: [
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]
      ]
    };
  },
  components: {},
  created() {
    this.getAll();
    this.getList();
  },
  mounted() {},
  methods: {
    async getAll() {
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
      console.log(this.List);
    }
  },
  computed: {}
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/Schedule/Schedule.scss";
.schedule {
  border: 1px solid #b1cff4;
  width: 100%;
  height: 95vh;
  border-collapse: collapse;
  tr {
    td {
      border: 1px solid #b1cff4;
      box-sizing: border-box;
      font-size: 0.7rem;
      text-align: center;
      padding: 5px 5px;
    }
    td:first-child {
      padding: 10px 10px;
    }
  }
  .blank {
    height: 30px;
  }
}
.week-list {
  height: 50px;
}
.week-select {
  border: none;
  outline: none;
  width: 20%;
  height: 20px;
  margin-top: 50px;

  -webkit-appearance: none; /* google */
  -moz-appearance: none; /* firefox */
  appearance: none; /* IE */
  /*background: #ffffff url(../../assets/images/drawable-xhdpi/icon_xiala2.png) no-repeat scroll right center;*/
}
.shortselect {
  background: #fafdfe;
  height: 28px;
  width: 90px;
  line-height: 28px;
  border: 1px solid #9bc0dd;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  margin-left: 40px;
}
.longselect {
  background: #fafdfe;
  height: 28px;
  width: 160px;
  line-height: 28px;
  border: 1px solid #9bc0dd;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  margin-left: 30px;
}
</style>
