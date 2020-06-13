<template>
  <div>
    <div class="header">
      <router-link to="/homePage">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png"
          alt=""
        />
      </router-link>
      <input type="serch" id="serch" placeholder="请输入" />
      <button class="btn"><p>搜索</p></button>
    </div>
    <div class="history">
      <p>搜索发现</p>
      <div>
        <button>劳力士</button>
        <button>劳力士</button>
        <button>劳力士</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.header {
  height: 30px;
  background-color: #ffffff;
}
.header img {
  height: 20px;
  width: 20px;
  margin-top: 10px;
  margin-left: 6px;
}
#serch {
  height: 30px;
  width: 250px;
  margin-left: 30px;
  margin-top: -10px;
  border-radius: 15px;
  font-size: 15px;
  transition: 0.5s;
  background-color: #f3f3f3;
  border: none;
}
.btn {
  margin-left: 10px;
  height: 30px;
  width: 50px;
  border-radius: 10px;
  background-color: white;
  border: none;
}
.btn p {
  font-weight: bold;
  font-size: 15px;
  color: #828789;
}
.history {
  margin-top: 30px;
  margin-left: 50px;
}
.history p {
  font-weight: bold;
}
.history button {
  height: 20px;
  width: 70px;
  display: inline-block;
  margin-left: 10px;
  margin-top: 20px;
  border-radius: 20px;
  border: none;
}
</style>
