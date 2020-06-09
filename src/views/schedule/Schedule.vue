<template>
  <div id="classSchedule">
    <!--引入navBar-->
    <!--        <NavBar>{{ title }}</NavBar>-->
    <!--课程表-->
    <table class="schedule">
      <tr class="week blank">
        <td colspan="9">
          <label>
            <select class="week-select ">
              <option>第一周</option>
            </select>
          </label>
        </td>
      </tr>
      <tr>
        <td
          colspan="9"
          class="blank"
        ></td>
      </tr>
      <tr class="week-list">
        <td></td>
        <td></td>
        <td
          v-for="(item, index) in weeks"
          :key="index"
        >{{ item }}</td>
      </tr>
      <tr class="am">
        <td rowspan="2">上午</td>
        <td>1-2</td>
        <td
          v-for="(item, index) in classTableData"
          :key="index"
        >
          {{ item.monday }}
        </td>
      </tr>
      <tr>
        <td>3-4</td>
        <td
          v-for="(item, index) in classTableData"
          :key="index"
        >
          {{ item.tuesday }}
        </td>
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
          v-for="(item, index) in classTableData"
          :key="index"
        >
          {{ item.tuesday }}
        </td>
      </tr>
      <tr class="pm">
        <td>7-8</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td
          colspan="9"
          class="blank"
        ></td>
      </tr>
      <tr>
        <td>下午</td>
        <td>9-10</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
// import NavBar from '../../components/tabBar/NavBar'
export default {
  name: "Class",
  // components: { NavBar },
  data() {
    return {
      title: "课程表",
      weeks: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      classTableData: [
        {
          monday: "",
          tuesday: "工业软件后端架构技术",
          wednesday: "前端框架技术",
          thursday: "工业软件后端框架技术",
          friday: "工业软件产品设计",
          saturday: "",
          sunday: ""
        },
        {
          monday: "体育俱乐部-健美",
          tuesday: "工业软件后端架构技术",
          wednesday: "前端框架技术",
          thursday: "工业软件后端框架技术",
          friday: "工业软件产品设计",
          saturday: "",
          sunday: ""
        },
        {
          monday: "前端框架技术",
          tuesday: "",
          wednesday: "",
          thursday: "毛泽东思想和中国特色社会主义体系理论建设",
          friday: "",
          saturday: "",
          sunday: ""
        },
        {
          monday: "前端框架技术",
          tuesday: "",
          wednesday: "",
          thursday: "毛泽东思想和中国特色社会主义体系理论建设",
          friday: "",
          saturday: "",
          sunday: ""
        },
        {
          monday: "",
          tuesday: "",
          wednesday: "艺--红色经典电影欣赏",
          thursday: "",
          friday: "",
          saturday: "",
          sunday: ""
        },
        {
          monday: "",
          tuesday: "",
          wednesday: "",
          thursday: "",
          friday: "",
          saturday: "",
          sunday: ""
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.schedule {
  border: 1px solid #eeeeee;
  width: 100%;
  height: 95vh;
  border-collapse: collapse;
  tr {
    td {
      border: 1px solid #eeeeee;
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
</style>
