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
      <select name="bbxb" id="selecte1" class="longselect">  
      <option value="">---请选择--</option>  
      <option value="0" selected="selected" v-for="(item,index) in List" :key=index>{{item.name}}</option>  
      </select> 

      <select name="bb" id="selecte" class="shortselect">  
      <option value="">---请选择--</option>  
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
      /> -->
    </div>
   
    <!--课程表-->
    <table class="schedule">
      <tr class="week-list">
        <td></td>
        <td></td>
        <td>周一</td>
        <td>周二</td>
        <td>周三</td>
        <td>周四</td>
        <td>周五</td>
        <td>周六</td>
        <td>周日</td>
      </tr>
      <tr class="am">
        <td rowspan="2">上午</td>
        <td>1-2</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>3-4</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr class="noon">
        <td colspan="9" class="blank"></td>
      </tr>
      <tr>
        <td rowspan="2">下午</td>
        <td>5-6</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
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
        <td colspan="9" class="blank"></td>
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
const API = require("../../request/api.js");
export default {
  name: "schedule",
  data() {
    return {
      schedul: [],
      week: [],
      result: [],
      List:[],
      data: {
        clazzId: 1,
        semesterId: 1,
        week: 1
      }
    };
  },
  components: {},
  created() {
    // this.getAll();
    this.getList();
  },
  mounted() {},
  methods: {
    // async getAll() {
    //   this.url = this.GLOBAL.baseUrl + "/course/schedule";
    //   this.result = (await API.init(this.url, this.data, "post")).data;
    //   console.log(this.result);
    //   this.handelSchedule();
    // },
    async getList(){
      this.url = this.GLOBAL.baseUrl + "/semester/all";
      this.List = (await API.init(this.url, this.data, "get")).data;
      console.log(this.List);
    }, 
  },
  computed: {}
};
</script>
<style scoped lang="scss">
@import "../../assets/scss/Schedule/Schedule.scss";
.schedule {
  border: 1px solid #b1cff4
;
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
.week-list{
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
.shortselect{  
    background:#fafdfe;  
    height:28px;  
    width:90px;  
    line-height:28px;  
    border:1px solid #9bc0dd;  
    -moz-border-radius:2px;  
    -webkit-border-radius:2px;  
    border-radius:2px;
   margin-left: 40px;
} 
.longselect{  
    background:#fafdfe;  
    height:28px;  
    width:160px;  
    line-height:28px;  
    border:1px solid #9bc0dd;  
    -moz-border-radius:2px;  
    -webkit-border-radius:2px;  
    border-radius:2px;
    margin-left: 30px;
} 
</style>
