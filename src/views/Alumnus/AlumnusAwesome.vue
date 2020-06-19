<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/alumnusmessage">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png" alt />
        </router-link>
        <p>点赞</p>
      </div>
    </div>
    <div v-for="item in 2" :key="item.id">
      <div class="awesome-card">
        <div class="row">
          <div class="awesome-avatar">
            <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/zyj.jpg" alt />
          </div>
          <div class="awesome-content">
            <div class="awesome-nickname">
              <p class="nickname">十七岁的他</p>
              <p class="time">7分钟前</p>
            </div>
            <div class="awesome">
              <div>
                <p>点赞了你的贴子</p>
              </div>
            </div>
          </div>
          <div class="awesome-image">
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
 name: 'AlumnusAwesome',
  data() {
    return {

    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/AlumnusAwesome.scss";
</style>
