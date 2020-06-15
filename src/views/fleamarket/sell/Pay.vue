<template>
  <div>
    <div class="header">
      <router-link to="/sell">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <p>购买宝贝</p>
    </div>
    <div class="container">
      <div class="r-inform">
        <div class="r-left">
          <img
            src="https://student-m.oss-cn-hangzhou.aliyuncs.com/img/3.jpg"
            alt=""
          />
        </div>
        <div class="r-right">
          <h5>我是你</h5>
          <p>描述</p>
          <span>¥ 价格</span>
        </div>
      </div>
    </div>
    <div class="address">
      <hr class="line" />
      <router-link to="/address">
        <div class="cc-df-between row1" @click="into(1)">
          <div class="address">
            <p class="nick">地址</p>
          </div>
          <div class="cc-df-right">
            <p class="nickname cc-mright"></p>
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
              alt="右箭头"
              class="nickimg"
            />
          </div>
        </div>
      </router-link>
      <hr class="line" />
    </div>
    <div class="footer">
      <p>实付款：125.1</p>
      <p>优惠：0000</p>
    </div>
    <button>确定</button>
  </div>
</template>
<style scoped lang="scss">
@import "../../../assets/scss/fleamarket/pay/pay.scss";
@import "../../../assets/scss/person/Base.scss";
.container {
  display: flex;
  height: 140px;
  width: 100%;
  margin-top: 10px;
}
.r-inform {
  width: 98%;
  height: 140px;
  margin-left: 4px;
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
}
.r-left {
  width: 40%;
  height: 140px;
  float: left;
  // background-color: black;
}
// .r-left img {
//   border-radius: 10px;
// }
.r-right {
  float: right;
  width: 58%;
  margin-left: 5px;
}
.r-right h5 {
  font-weight: bold;
}
.r-right p {
  font-size: 10px;
  color: #b9b7c9;
  margin-top: 3px;
}
.r-right span {
  display: flex;
  font-size: 13px;
  color: red;
  margin-top: 30px;
}
.r-right h6 {
  display: flex;
  margin-left: 160px;
}
.line {
  width: 100%;
  border: none;
  height: 1px;
  background: gray;
  margin-top: 15px;
  margin-bottom: 15px;
}
.address {
  width: 100%;
}
.footer {
  width: 75%;
  height: 60px;
  margin-top: 350px;
  //   background-color: gray;
}
button {
  height: 60px;
  width: 25%;
  float: right;
  border: none;
  margin-top: -60px;
  background-color: red;
}
</style>
