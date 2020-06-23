<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/alumnusindex">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt=""
          />
        </router-link>
        <p>发帖</p>
      </div>
    </div>
    <div class="article">
      <input type="text" class="theme" placeholder="在此输入标题" />
      <textarea
        cols="5"
        placeholder="在此输入正文"
        class="content"
        v-model="content"
      ></textarea>
      <div class="image cc-col-center">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/picture_icon.png"
          alt=""
        />
        <div>
          <p>添加照片</p>
        </div>
      </div>
    </div>
    <hr class="line" />
    <div class="place cc-df-between">
      <div class="left cc-df-center">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/dingwei_icon.png"
          alt=""
        />
        <div>
          <p v-if="show">位置信息</p>
          <p v-if="!show">{{ homeCity }}</p>
        </div>
      </div>
      <div class="right">
        <img
        @click="handCity"
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/youjiantou.png"
          alt=""
        />
      </div>
    </div>
    <hr class="line" />
    <div class="tips">
      <p>*请按照发帖要求，合理发帖，如有违规将会被删除，乃至封禁</p>
    </div>
    <div class="publish-btn cc-df-center">
      <p>发布</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Publish",
  data() {
    return {
      show: true,
      homeCity: "",
      content: ""
    };
  },
  components: {},
  created() {
    // 定位南京市 高德地图
    this.$axios({
      method: "Get",
      url:
        "https://restapi.amap.com/v3/ip?key=" +
        "3612ea7f539f61f33e49e15f6c3cb748"
    }).then((res) => {
      this.homeCity = res.data.city;
    });
  },
  mounted() {},
  methods: {
    handCity() {
      this.show = !this.show;
    }
  },
  computed: {},
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/Publish.scss";
</style>
