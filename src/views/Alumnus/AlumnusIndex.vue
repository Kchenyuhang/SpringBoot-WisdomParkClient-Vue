<template>
  <div class="bg">
    <div class="header">
      <div class="header-title">
        <router-link to="/layout">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png" alt />
        </router-link>
        <p>校友圈</p>
      </div>
    </div>
    <div class="avatar-card cc-df-between">
      <div class="avatar-card-left">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/zyj.jpg" alt />
      </div>
      <div class="avatar-card-right"></div>
    </div>
    <div class="function-bar">
      <div class="function cc-coll-4 cc-df-center" @click="into(1)">
        <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/icon_fabu.png" alt />
        <div>
          <p>发帖</p>
        </div>
      </div>
      <div class="function cc-coll-4 cc-df-center" @click="into(2)">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/xiaoxi_black_icon.png"
          alt
        />
        <div>
          <p>消息</p>
        </div>
      </div>
      <div class="function cc-coll-4 cc-df-center" @click="into(3)">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/icon_shoucang1.png"
          alt
        />
        <div>
          <p>收藏</p>
        </div>
      </div>
    </div>
    <div v-for="(item,index) in Dongtais" :key="index">
      <div v-for="(item1,index1) in Dongtais[index]" :key="index1">
        <div class="dongtai-card">
          <div v-for="(item2,index2) in users[index]" :key="index2">
            <div class="dongtai-avatar" v-if="index2==index1" @click="chattting(index,index1)">
              <img :src="item2.avatar" alt />
            </div>
          </div>

          <div class="dongtai-content">
            <div class="row cc-df-between">
              <div class="row">
                <div v-for="(item2,index2) in users[index]" :key="index2">
                  <div class="name" v-if="index2==index1">
                    <p>{{item2.nickname}}</p>
                  </div>
                </div>
                <div class="fenge cc-df-center">
                  <p>·</p>
                </div>
                <div class="time">
                  <p>{{item1.gmtCreate}}</p>
                </div>
              </div>

              <div class="gengduo">
                <img
                  src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/gengduo_icon.png"
                  alt
                />
              </div>
            </div>
            <div class="article">
              <p>{{item1.content.substring(15,45)}}...</p>
            </div>
            <div class="image">
              <div
                v-for="(img,index3) in imgs[index][index1]"
                :key="index3"
                v-show="imgs[index][index1].length==1"
              >
                <div class="avatar-2">
                  <img :src="'https://images.weserv.nl/?url='+img.picture" />
                </div>
              </div>
            </div>
            <div class="image cc-df-warp">
              <div
                v-for="(img,index3) in imgs[index][index1]"
                :key="index3"
                class="cc-coll-6"
                v-show="imgs[index][index1].length==2"
              >
                <div class="avatar-2">
                  <img :src="'https://images.weserv.nl/?url='+img.picture" />
                </div>
              </div>
            </div>
            <div class="image cc-df-warp">
              <div
                v-for="(img,index3) in imgs[index][index1]"
                :key="index3"
                class="cc-coll-4"
                v-show="imgs[index][index1].length==3"
              >
                <div class="avatar-2">
                  <img :src="'https://images.weserv.nl/?url='+img.picture" />
                </div>
              </div>
            </div>
            <div class="row2 cc-df-between">
              <div class="comment cc-df-center">
                <img
                  src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/fill_icon.png"
                  alt
                />
                <div>
                  <p>评论</p>
                </div>
              </div>
              <div class="like cc-df-center">
                <img
                  src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/icon_dianzan.png"
                  alt
                />
                <div>
                  <p>点赞</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "AlumnusIndex",
  data() {
    return {
      Dongtais: [],
      imgs: [],
      users: [],
      people: {},
      data: {},
      page: 1
    };
  },
  components: {},
  async created() {
    await this.selectDongtai();
  },
  mounted() {},
  methods: {
    chattting(index, index1) {
      this.$router.push({
        name: "Chatting",
        params: { UserId: this.users[index][index1].pkUserAccountId }
      });
    },
    async selectImg(index) {
      this.data = {
        id: index
      };
      this.url = this.GLOBAL.baseUrl + "/dynamic/photo";
      this.result = await API.init(this.url, this.data, "post");
      this.imgs[this.page - 1].push(this.result.data);
    },
    async selectUser(index) {
      this.data = {
        field: index
      };
      this.url = this.GLOBAL.baseUrl + "/user/single/id";
      this.result = await API.init(this.url, this.data, "post");
      this.users[this.page - 1].push(this.result);
    },
    async selectDongtai() {
      this.data = {
        currentPage: this.page,
        pageSize: 5
      };
      this.url = this.GLOBAL.baseUrl + "/dynamic";
      this.result = await API.init(this.url, this.data, "post");
      this.Dongtais.push(this.result.data);
      console.log(this.Dongtais);
      this.users.push([]);
      this.imgs.push([]);
      this.data1 = this.Dongtais[this.page - 1];
      for (let i = 0; i < this.data1.length; i++) {
        await this.selectUser(this.data1[i].userId);
        await this.selectImg(this.data1[i].pkDynamicId);
      }
      console.log(this.imgs);
    },
    into(index) {
      if (index == 1) {
        this.$router.push("/publish");
      }
      if (index == 2) {
        this.$router.push("/alumnusmessage");
      }
      if (index == 3) {
        this.$router.push("/alumnuscollect");
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/AlumnusIndex.scss";
</style>
