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
      <div v-if="show==true">
        <div class="card cc-shadow cc-donghua">
          <div>
            <img src="https://static-cdn-oss.mosoteach.cn/mssvc/icons/icon_cc_cover1_6@2x.png">
            <div>
              <p class="title">课程</p>
              <div class="grey">
                <p>教室：{{}}</p>
                <p>教师：{{}}</p>
                <p>周次：{{}}</p>
              </div>
            </div>
          </div>
        </div>
        <img
          class="close"
          src="../../assets/close.png"
          alt="123"
          @click="show=false"
        >
      </div>

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
        <td
          rowspan="2"
          @click="show=true"
        >上午</td>

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
// const API = require("../../request/api.js");
export default {
  name: "schedule",
  data() {
    return {
      schedul: [],
      show: false,
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
      ],
      message: {}
    };
  },
  components: {},
  created() {
    this.getAll();
    this.getList();
  },
  mounted() {},
  methods: {},
  computed: {}
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/Schedule/Schedule.scss";
</style>
