<template>
  <div>
    这是进行中页面 测试二级路由
    <input type="text" v-model="content" />
    <button @click="handmap">搜索</button>

    <div id="l-map"></div>
    <div id="r-result"></div>
  </div>
</template>
<script
  type="text/javascript"
  src="//api.map.baidu.com/api?v=2.0&ak=v9jqVd7gVS8oV6Fp2AuQ3mduDG8owXES
    "
></script>
<script>
export default {
  name: "Underway",
  data() {
    return {
      content: "",
    };
  },
  created() {},
  components: {},
  methods: {
    handmap() {
      var map = new BMap.Map("l-map"); // 创建Map实例
      map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
      var myKeys = this.content;
      var local = new BMap.LocalSearch(map, {
        renderOptions: { map: map, panel: "r-result" },
        pageCapacity: 5,
      });
      local.searchInBounds(myKeys, map.getBounds());
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/scss/errands/orders/Underway.scss";
</style>
