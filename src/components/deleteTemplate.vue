<template>
  <div class="delete">
    <div class="slider student-container">
      <div
        class="content cc-df-between"
        @touchstart="touchStart"
        @touchmove="touchMove"
        @touchend="touchEnd"
        :style="deleteSlider"
      >
        <div class="size">
          <div class="leftDiv">
            <slot name="img"></slot>
          </div>
          <div class="rightDiv">
            <slot name="title"></slot>
            <slot name="price"></slot>
          </div>
          <!-- 默认插槽 -->
          <slot></slot>
          <!-- 插槽中放具体项目中需要内容 -->
        </div>
        <div class="remove" ref="remove" @click="deleteLine()">删除</div>
      </div>
    </div>
  </div>
</template>
<script>
const API = require("../request/api");
export default {
  props: ["index", "id"],
  data() {
    return {
      // 拿到用户的userId 用来查询通讯录好友
      userId: this.$store.state.user.pkUserAccountId,
      result: [],
      results: [],
      startX: 0, //触摸位置
      endX: 0, //结束位置
      moveX: 0, //滑动时的位置
      disX: 0, //移动距离
      deleteSlider: "transform:translateX(0px)", //滑动时的效果,使用v-bind:style="deleteSlider"
    };
  },
  created() {},
  methods: {
    touchStart(ev) {
      ev = ev || event;
      //tounches类数组，等于1时表示此时有只有一只手指在触摸屏幕
      if (ev.touches.length == 1) {
        // 记录开始位置
        this.startX = ev.touches[0].clientX;
      }
    },
    touchMove(ev) {
      ev = ev || event;
      //获取删除按钮的宽度，此宽度为滑块左滑的最大距离
      let wd = this.$refs.remove.offsetWidth;
      if (ev.touches.length == 1) {
        // 滑动时距离浏览器左侧实时距离
        this.moveX = ev.touches[0].clientX;
        //起始位置减去 实时的滑动的距离，得到手指实时偏移距离
        this.disX = this.startX - this.moveX;
        //console.log(this.disX)
        // 如果是向右滑动或者不滑动，不改变滑块的位置
        if (this.disX < 0 || this.disX == 0) {
          this.deleteSlider = "transform:translateX(0px)";
        } else if (this.disX > 0) {
          // 大于0，表示左滑了，此时滑块开始滑动
          //具体滑动距离我取的是 手指偏移距离*5。
          this.deleteSlider = "transform:translateX(-" + this.disX * 5 + "px)";
          // 最大也只能等于删除按钮宽度
          if (this.disX * 5 >= wd) {
            this.deleteSlider = "transform:translateX(-" + wd + "px)";
          }
        }
      }
    },
    touchEnd(ev) {
      ev = ev || event;
      let wd = this.$refs.remove.offsetWidth;
      if (ev.changedTouches.length == 1) {
        let endX = ev.changedTouches[0].clientX;
        this.disX = this.startX - endX;
        //console.log(this.disX)
        //如果距离小于删除按钮一半,强行回到起点
        if (this.disX * 5 < wd / 2) {
          this.deleteSlider = "transform:translateX(0px)";
        } else {
          //大于一半 滑动到最大值
          this.deleteSlider = "transform:translateX(-" + wd + "px)";
        }
      }
    },
    async deleteLine() {
      // this.deleteSlider = "transform:translateX(0px)";
      // 删除方法测试
      console.log(this.id);
      this.data = {
        field: this.id
      };
      this.url = this.GLOBAL.baseUrl + "/addressBook/deletion/id";
      this.rusult = await API.init(this.url, this.data, "post");
      this.data = {
        field: this.userId,
      };
      this.url = this.GLOBAL.baseUrl + "/addressBook/list/userId";
      this.result = await API.init(this.url, this.data, "post");
      this.$emit("deleteLine", this.result);
    }
  }
};
</script>
<style scoped lang="less">
.slider {
  width: 100%;
  height: 100px;
  display: flex;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  user-select: none;
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    // 设置过渡动画
    transition: 0.3s;
    .selected {
      color: #0d858e;
    }
    .size {
      display: flex;
    }
  }
  .remove {
    position: absolute;
    width: 60px;
    height: 70px;
    background: #ff0000;
    right: -60px;
    top: 0;
    color: #fff;
    font-size: 20px;
    text-align: center;
    padding-top: 20px;
  }
}
.leftDiv {
  margin: 5px 0 0 15px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  text-align: center;
  background-color: #eeeeee;
  img {
    width: 50px;
    height: 50px;
  }
}
.rightDiv {
  margin: 8px 0 0 20px;
}
</style>
