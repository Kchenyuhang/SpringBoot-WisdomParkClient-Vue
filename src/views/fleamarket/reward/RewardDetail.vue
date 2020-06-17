<template>
  <div>
    <div class="top">
      <router-link to="/reward">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
    </div>
    <div class="bg">
      <div class="container">
        <div class="row">
          <div class="header">
            <div class="left">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg"
                alt=""
              />
            </div>
            <div class="right">
              <p>用户名称</p>
              <span>发布时间</span>
            </div>
          </div>
          <hr class="line" />
          <div class="inform">
            <p>¥ 100</p>
            <span>#标签#</span>
            <h5>标题</h5>
            <h6>悬赏内容</h6>
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="content">
          <strong>全部评论</strong>
          <hr class="line" />
          <div class="com">
            <div class="c-left">
              <img
                src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/1.jpg"
                alt=""
              />
            </div>
            <div class="c-right">
              <h5>用户昵称</h5>
              <p>内容</p>
              <span>评论时间</span>
            </div>
          </div>
          <hr class="line" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.top {
  height: 40px;
  background-color: #ffffff;
}
.top img {
  height: 20px;
  width: 20px;
  margin-top: 10px;
  margin-left: 6px;
}
.bg {
  width: 100%;
  background-color: #f5f5f5;
}
.container {
  width: 90%;
  height: 1000px;
  margin-left: 5%;
  background-color: white;
  /* border: 1px solid#c4c4c4; */
}
.row {
  height: 400px;
  width: 100%;
  border: 1px solid#e6e6e6;
}
.header {
  height: 60px;
  margin-top: 10px;
  background-color: white;
  /* box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2); */
}
.left img {
  height: 50px;
  width: 50px;
  float: left;
  margin-top: 6px;
  margin-left: 14px;
}
.right p {
  margin-left: 80px;
  font-weight: bold;
  font-size: 15px;
}
.right span {
  margin-left: 18px;
  font-size: 12px;
}
.line {
  margin-top: 8px;
  color: #e6e6e6;
  width: 100%;
}
.inform {
  height: 300px;
  width: 94%;
  margin-left: 10px;
  margin-top: 10px;
  /* background-color: blue; */
}
.inform p {
  color: red;
  font-size: 15px;
  font-weight: bold;
}
.inform span {
  font-weight: bold;
}
.inform h5 {
  font-weight: bold;
}
.inform h6 {
  margin-top: 10px;
}
.inform img {
  margin-top: 10px;
  width: 98%;
  height: 200px;
}
.content {
  height: 620px;
  margin-top: 15px;
  border: 1px solid #e6e6e6;
  /* background-color: cornflowerblue; */
}
.com {
  height: 80px;
}
.c-left img {
  float: left;
  height: 40px;
  width: 40px;
  margin-left: 20px;
  margin-top: 6px;
}
.c-right {
  margin-left: 80px;
}
.c-right h5 {
  font-weight: bold;
}
.c-right p {
  font-size: 15px;
}
.c-right span {
  font-size: 10px;
}
</style>
