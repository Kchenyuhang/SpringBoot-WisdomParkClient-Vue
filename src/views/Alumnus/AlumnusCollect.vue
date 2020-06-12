<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/alumnusIndex">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt=""
          >
        </router-link>
        <p>我的收藏</p>
      </div>
    </div>
    <div
      v-for="item in 2"
      :key="item.id"
    >
      <div class="collect-card">
        <div class="row cc-df-between">
          <div class="left">
            <div class="left-top">
              <p>南工院这几年变化好大！怀念南工院的生活。</p>
            </div>
            <div class="left-bottom">
                <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/zyj.jpg" alt="">
                <div>
                    <p>十七岁的他</p>
                </div>
            </div>
          </div>
          <div class="right">
              <div class="right-top">
                  <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/dongtai_image.jpg" alt="">
              </div>
              <div class="right-bottom cc-df-right">
                  <div>
                      <p>22小时之前</p>
                  </div>
              </div>
          </div>

        </div>
      </div>
      <hr class="line" />
    </div>

  </div>
</template>

<script>
export default {
  name: "AlumnusCollect",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/AlumnusCollect.scss";
</style>
