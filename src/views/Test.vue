<template>
  <div class="overall">
    <div class="circle-box">
      <div
        class="circle"
        :style="`width:${circle_w}px;height:${circle_h}px`"
      >
        <div
          class="origin"
          :style="`width:${box_w}px;height:${box_h}px;transform: rotate(${stard}deg);`"
        >
          <div
            :style="`width:${box_w}px;height:${box_h}px;transform: rotate(${-stard}deg);`"
            class="img-box"
            v-for="(i,index) in boxNum"
            :key="index"
            @click="Turn(index)"
          >
            <div class="box">
              <div class="content">{{index+1}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circle_w: window.innerHeight, //圆盘的宽
      circle_h: window.innerHeight, //圆盘的高
      box_w: 350, //圆盘上覆盖的小圆点宽
      box_h: 350, //圆盘上覆盖的小圆点高
      PI: 360, //分布角度，默认为360deg
      stard: 90, //起始角度
      stard_s: null, //用来默认储存第一个初始值
      boxNum: 10, //圆盘上覆盖的小圆点个数
      activeIndex: 0 //默认下标
    };
  },
  created() {
    this.stard_s = this.stard;
  },
  mounted() {
    this.init();
    this.Turn(this.activeIndex);
  },
  methods: {
    //初始化小圆点，根据计算使其分布到对应位置
    init() {
      let box = document.querySelectorAll(".img-box");
      let avd = this.PI / box.length; //每一个 img-box 对应的角度
      let ahd = (avd * Math.PI) / 180; //每一个 img-box 对应的弧度
      let radius = this.circle_w / 2; //圆的半径
      for (let i = 0; i < box.length; i++) {
        box[i].style.left = Math.sin(ahd * i) * radius + "px";
        box[i].style.top = Math.cos(ahd * i) * radius + "px";
      }
    },
    //点击相对应小圆点，圆盘进行相对应角度的转动
    Turn(index) {
      let _this = this;
      let bx = document.querySelectorAll(".box");
      _this.stard = index * (_this.PI / _this.boxNum) + _this.stard_s;
      for (let i = 0; i < bx.length; i++) {
        if (i == index) {
          bx[i].classList.add("box-active");
        } else {
          bx[i].classList.remove("box-active");
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.overall {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}
.circle-box {
  position: fixed; //注释--------------------------此处显示全圆
  overflow: hidden; //注释----------------------此处显示全圆
  right: 0px; //注释---------------------此处显示全圆
  bottom: -200px;
  .circle {
    transform: scale(0.6);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    border: 1px solid #4d4c4c;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50%; //注释----------------此处显示全圆
    .origin {
      position: relative;
      transition: 0.5s; //控制圆盘的的旋转速率
      .img-box {
        user-select: none;
        position: absolute;
        top: 0;
        left: 0;
        transition: none !important;
        pointer-events: none;
        .box {
          pointer-events: all !important;
          width: 100%;
          height: 100%;
          transition: 0.3s;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 50%;
          transform: scale(0.3);
          cursor: pointer;
          color: white;
          font-size: 40px;
          background: black;
          overflow: hidden;
          &:hover {
            transform: scale(0.5);
          }
          &:hover .content {
            opacity: 1;
          }
          .content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
          }
        }
        .box-active {
          transition-delay: 0.5s;
          transform: scale(0.5) !important;
          .content {
            opacity: 0.5;
          }
        }
      }
    }
  }
}
</style>