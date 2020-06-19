<template>
  <div class="bg">
    <Loading v-if="show"></Loading>
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

          <div class="dongtai-content" @click="into(item1.pkDynamicId)">
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
            <div v-for="(item3,index3) in comments[index][index1]" :key="index3">
              <div class="comment-row cc-df-between">
                <div class="dis">
                  <img :src="item3.userId.avatar" alt />
                  <div class="comment-content">
                    <div class="row3">
                      <p class="nickname">{{item3.userId.nickname}}</p>
                      <p class="dian">·</p>
                      <p class="time">{{item3.gmtCreate}}</p>
                    </div>
                    <div class="row4">
                      <p>{{item3.content}}</p>
                    </div>
                  </div>
                </div>
                <div class="zan">
                  <img
                    src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/icon_dianzan.png"
                    alt
                  />
                </div>
              </div>
              <div v-for="(item4,index4) in item3.replyComments" :key="index4">
                <p
                  class="fontSize"
                >{{item4.userId.nickname}}回复了{{item3.userId.nickname}}：{{item4.content}}</p>
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
      page: 1,
      comments: [],
      msg: "",
      show: true
    };
  },
  components: {
    Loading: require("../../components/Loading").default
  },
  async created() {
    await this.selectDongtai();
  },
  mounted() {
    setTimeout(() => {
      this.show=false
      this.msg = "加载完辽！";
    }, 10000);
  },
  methods: {
    chattting(index, index1) {
      this.$router.push({
        name: "Chatting",
        params: { UserId: this.users[index][index1].pkUserAccountId }
      });
    },
    async selectComment(index) {
      this.data = {
        id: index
      };
      this.url = this.GLOBAL.baseUrl + "/dynamic/";
      this.result = await API.init(this.url, this.data, "post");
      this.comments[this.page - 1].push(this.result.data.commentVoList);
    },
    async selectImg(index) {
      this.data = {
        id: index
      };
      this.url = this.GLOBAL.baseUrl + "/dynamic/photo";
      this.result = await API.init(this.url, this.data, "post");
      this.imgs[this.page - 1].push(this.result.data);
    },
    async selectReplyUser() {
      for (let i = 0; i < this.comments[this.page - 1].length; i++) {
        for (let j = 0; j < this.comments[this.page - 1][i].length; j++) {
          for (
            let k = 0;
            k < this.comments[this.page - 1][i][j].replyComments.length;
            k++
          ) {
            this.data = {
              field: this.comments[this.page - 1][i][j].replyComments[k].userId
            };
            this.url = this.GLOBAL.baseUrl + "/user/single/id";
            this.result = await API.init(this.url, this.data, "post");
            this.comments[this.page - 1][i][j].replyComments[
              k
            ].userId = this.result;
          }
        }
      }
    },
    async selectCommentUser() {
      // console.log(index,commentUsers)
      for (let i = 0; i < this.comments[this.page - 1].length; i++) {
        for (let j = 0; j < this.comments[this.page - 1][i].length; j++) {
          this.data = {
            field: this.comments[this.page - 1][i][j].userId
          };
          this.url = this.GLOBAL.baseUrl + "/user/single/id";
          this.result = await API.init(this.url, this.data, "post");
          this.comments[this.page - 1][i][j].userId = this.result;
        }
      }
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
      this.comments.push([]);
      this.data1 = this.Dongtais[this.page - 1];
      for (let i = 0; i < this.data1.length; i++) {
        await this.selectUser(this.data1[i].userId);
        await this.selectImg(this.data1[i].pkDynamicId);
        await this.selectComment(this.data1[i].pkDynamicId);
      }
      await this.selectCommentUser();
      await this.selectReplyUser();
      console.log(this.comments);
    },
    into(index) {
      if (index == 1) {
        this.$router.push("/publish");
      } else if (index == 2) {
        this.$router.push("/alumnusmessage");
      } else if (index == 3) {
        this.$router.push("/alumnuscollect");
      } else {
        this.$router.push({
          name: "DongtaiDetails",
          params: { Id: index }
        });
      }
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/AlumnusIndex.scss";
</style>
