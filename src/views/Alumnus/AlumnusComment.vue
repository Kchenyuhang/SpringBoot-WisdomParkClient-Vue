<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/alumnusmessage">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png" alt />
        </router-link>
        <p>回复我的</p>
      </div>
    </div>
    <div v-for="item in 2" :key="item.id">
      <div class="comment-card">
        <div class="row">
          <div class="comment-avatar">
            <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/zyj.jpg" alt />
          </div>
          <div class="comment-content">
            <div class="comment-nickname">
              <p class="nickname">李四</p>
              <p class="time">1分钟前</p>
            </div>
            <div class="comment">
              <div>
                <p>有时间一起回去看看</p>
              </div>
            </div>
          </div>
          <div class="comment-image">
            <img
              src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/dongtai_image.jpg"
              alt
            />
          </div>
        </div>
      </div>
      <hr class="line" />
    </div>
  </div>
</template>

<script>
export default {
  name: "AlumnusComment",
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
@import "../../assets/scss/alumnus/AlumnusComment.scss";
</style>
