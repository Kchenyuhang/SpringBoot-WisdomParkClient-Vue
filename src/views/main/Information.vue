<template>
<transition :name="transitionName">
  <div class="bg address1">
    <div class="header">
      <router-link to="/index">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/zuojiantou.png" alt />
      </router-link>
      <p>资讯</p>
    </div>
    <Carousel :slideList="slideList"></Carousel>
    <div class="Top">
        <p class="title">置顶帖</p>
        <div>
          <div v-for="item in 2" :key="item.id">
            <div class="cc-df">
                <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bj1.png" alt="">
                <div class="cc-col-between cc-mleft">
                    <p class="file">默认不打断不换行。需要通过CSS进行强制打断</p>
                    <p class="time">2020-06-01</p>
                </div>
            </div>
          </div>
        </div>
    </div>
    <div class="container ">
        <div class="cc-df container-header">
          <div class="cc-coll-4 cc-df-center" @click="isShow=1"><p :class="{'blueLine':isShow==1}">全部</p></div>
          <div class="cc-coll-4 cc-df-center" @click="isShow=2"><p :class="{'blueLine':isShow==2}">教务处</p></div>
          <div class="cc-coll-4 cc-df-center" @click="isShow=3"><p :class="{'blueLine':isShow==3}">学生会</p></div>
        </div>
        <div>
          <div v-for="item in 2" :key="item.id">
            <div class="cc-df cc-mtop cc-mleft">
                <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/bj1.png" alt="">
                <div class="cc-col-between cc-mleft">
                    <p class="file"><b>默认不打断不换行。需要通过CSS进行强制打断</b></p>
                    <p class="time">2020-06-01</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
 name: 'Information',
  data() {
    return {
     transitionName: this.$store.state.transitionName,
     slideList: [
        {
          url: "#",
          description: "one",
          image:"https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/lunbo1.jpeg"
        },
        {
          url: "#",
          description: "two",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/lunbo2.jpg"
        },
        {
          url: "#",
          description: "three",
          image: "https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/lunbo3.jpg"
        }
      ],
      isShow:1
    }
  },
  components: {
    Carousel: require("../../components/Carousel").default
  },
  created() {
      console.log(this.transitionName)
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
@import "../../assets/scss/main/Information.scss"
</style>
