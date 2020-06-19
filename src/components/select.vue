<template>
  <!-- 下拉框组件html结构（子组件） -->
  <div
    class="select-box"
    @click="changeStatus"
  >
    <!-- changeStatus事件: 点击实现下拉框的显示和隐藏  -->
    <p
      class="select-title"
      :name="selectData.selectOptions[indexType].name"
      :class="{'select-title-active': selectData.selectStatus}"
    >
      <!--属性name class的动态绑定-->
      {{ selectData.selectOptions[indexType].context }}
      <!--这里主要绑定选择的数据-->
    </p>
    <transition name="slide-down">
      <!--transition 实现下拉列表显示隐藏时的动画-->
      <ul
        class="select-options"
        v-show="selectData.selectStatus"
      >
        <li
          class="select-option-item"
          v-for="(item, index) in selectData.selectOptions"
          :key="index"
          @click="EmitchangeOption(index)"
          :class="{'select-option-active':indexType===index}"
        >
          <!--
    	    v-for：循环数据渲染下拉列表
    	    EmitchangeOption：点击下拉列表事件
    	    class：动态绑定被选中的数据
    	-->
          {{ selectData.selectOptions[index].context }}

        </li>
        <div class="arrow-top"></div>
      </ul>
    </transition>
  </div>
</template>
<script>
export default {
  name: "oSelect", //建议大家都写上这个，有利于我们知道这个组件叫什么名字
  //通过props来接收父组件传过来的数据
  props: {
    selectData: {
      type: Object //规定传过来的数据为对象，否则就会报错（其实这样写就是规避错误和良好的习惯）
    }
  },
  data() {
    return {
      indexType: 0
    };
  },
  methods: {
    EmitchangeOption(index) {
      this.indexType = index;
      this.$emit("changeOption", index);
      // 通过点击事件触发EmitchangeOption函数，传入当前点击下拉列表中的索引值index
      // 下拉框通过emit方法触发父组件中changeOption函数，动态传给父组件需要的数据，这里为索引值
    },
    changeStatus() {
      // 通过changeStatus事件动态改变selectStatus的值，从而控制下拉框的显示隐藏
      this.selectData.selectStatus = !this.selectData.selectStatus;
    }
  }
};
</script>
<style scoped lang="scss">
.select-box {
  position: relative;
  max-width: 250px;
  line-height: 25px;
  margin: 50px auto;
}
.select-title {
  font-size: 14px;
  position: relative;
  padding: 0 30px 0 10px;
  border: 1px solid #d8dce5;
  border-radius: 5px;
  transition-duration: 300ms;
  cursor: pointer;
}
.select-title:after {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  border-top: 6px solid #d8dce5;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  right: 9px;
  top: 0;
  bottom: 0;
  margin: auto;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
}
.select-title-active {
  border-color: #409eff;
}
.select-title-active:after {
  transform: rotate(-180deg);
  border-top-color: #409eff;
}
.select-options {
  position: absolute;
  padding: 10px 0;
  top: 45px;
  background: white;
  border: 1px solid #d8dce5;
  width: 100%;
  border-radius: 5px;
}
.select-option-item {
  padding: 0 10px;
  cursor: pointer;
  transition-duration: 300ms;
}
.select-option-item:hover,
.select-option-active {
  background: #f1f1f1;
  color: #409eff;
}

.arrow-top {
  position: absolute;
  height: 0;
  width: 0;
  top: -7px;
  border-bottom: 7px solid #d8dce5;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 99;
}
.arrow-top:after {
  content: "";
  position: absolute;
  display: block;
  height: 0;
  width: 0;
  border-bottom: 6px solid #fff;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  left: -6px;
  top: 1px;
  z-index: 99;
}

.slide-down-enter-active,
.slide-down-leave {
  transition: all 0.3s ease-in-out;
  transform-origin: 0 top;
  transform: scaleY(1);
}
.slide-down-enter {
  transform: scaleY(0);
}
.slide-down-leave-active {
  transition: all 0.3s ease-in-out;
  transform-origin: 0 top;
  transform: scaleY(0);
}
</style>
