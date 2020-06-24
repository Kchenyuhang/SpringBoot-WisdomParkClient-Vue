<template>
  <div class="bg">
    <Loading v-if="show"></Loading>
    <div class="header">
      <div class="header-title">
        <router-link to="/layout">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png"
            alt
          />
        </router-link>
        <p>校友圈</p>
      </div>
    </div>
    <div class="avatar-card cc-df-between">
      <div class="avatar-card-left">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/zyj.jpg"
          alt
        />
      </div>
      <div class="avatar-card-right"></div>
    </div>
    <div class="function-bar">
      <div class="function cc-coll-4 cc-df-center" @click="into(1)">
        <img
          src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/icon_fabu.png"
          alt
        />
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
    <div v-for="(item, index) in Dongtais" :key="index">
      <div v-for="(item1, index1) in Dongtais[index]" :key="index1">
        <div class="dongtai-card">
          <div class="dongtai-avatar" @click="chattting(item1.userId)">
            <img
              :src="'https://images.weserv.nl/?url=' + item1.userAccount.avatar"
              alt
            />
          </div>
          <div class="dongtai-content">
            <div class="row cc-df-between">
              <div class="row" @click="into(item1.pkDynamicId)">
                <div class="name">
                  <p>{{ item1.userAccount.nickname }}</p>
                </div>
                <div class="fenge cc-df-center">
                  <p>·</p>
                </div>
                <div class="time">
                  <p>{{ item1.gmtCreate }}</p>
                </div>
              </div>

              <div class="gengduo" @click="changeIsShow(item1.pkDynamicId)">
                <img
                  src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/gengduo_icon.png"
                  alt
                />
              </div>
              <div class="gengduo_box" v-if="isShow == item1.pkDynamicId">
                <div
                  class="shoucang cc-df-center"
                  @click="college(item1.pkDynamicId)"
                >
                  <p>收藏</p>
                </div>
                <hr class="line" v-if="user.pkUserAccountId == item1.userid" />
                <div
                  class="jubao cc-df-center"
                  v-if="user.pkUserAccountId == item1.userid"
                >
                  <p>删除</p>
                </div>
                <hr class="line" />
                <div class="jubao cc-df-center" @click="isShow = 0">
                  <p>关闭</p>
                </div>
              </div>
            </div>
            <div class="article" @click="into(item1.pkDynamicId)">
              <p>{{ item1.content.substring(15, 45) }}...</p>
            </div>
            <div class="image">
              <div
                v-for="(img, index3) in item1.dynamicPhotoList"
                :key="index3"
                v-show="item1.dynamicPhotoList.length == 1"
              >
                <div class="avatar-2">
                  <img :src="'https://images.weserv.nl/?url=' + img.picture" />
                </div>
              </div>
            </div>
            <div class="image cc-df-warp">
              <div
                v-for="(img, index3) in item1.dynamicPhotoList"
                :key="index3"
                class="cc-coll-6"
                v-show="item1.dynamicPhotoList.length == 2"
              >
                <div class="avatar-2">
                  <img :src="'https://images.weserv.nl/?url=' + img.picture" />
                </div>
              </div>
            </div>
            <div class="image cc-df-warp">
              <div
                v-for="(img, index3) in item1.dynamicPhotoList"
                :key="index3"
                class="cc-coll-4"
                v-show="item1.dynamicPhotoList.length == 3"
              >
                <div class="avatar-2">
                  <img :src="'https://images.weserv.nl/?url=' + img.picture" />
                </div>
              </div>
            </div>
            <div class="inp cc-df-between cc-df">
              <input type="text" class="pinglun-input" />
              <div class="input-btn cc-df-center">
                <p>发送</p>
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
            <div v-for="(item3, index3) in item1.commentVoList" :key="index3">
              <div class="comment-row cc-df-between">
                <div class="dis">
                  <img
                    :src="'https://images.weserv.nl/?url=' + item3.avatar"
                    alt
                  />
                  <div class="comment-content">
                    <div class="row3">
                      <p class="nickname">{{ item3.userId }}</p>
                      <p class="dian">·</p>
                      <p class="time">{{ item3.gmtCreate }}</p>
                    </div>
                    <div class="row4">
                      <p>{{ item3.content }}</p>
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
              <!-- <div v-for="(item4,index4) in item3.replyComments" :key="index4">
                <p
                  class="fontSize"
                >{{item4.userId.nickname}}回复了{{item3.userId.nickname}}：{{item4.content}}</p>
              </div>-->
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
      data: {},
      page: 1,
      msg: "",
      show: true,
      isShow: 0,
      user: this.$store.state.user,
      token: this.$store.state.token
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
      this.show = false;
      this.msg = "加载完了！";
    }, 3000);
  },
  methods: {
    async college(index) {
      this.data = {
        dynamicId: index,
        userId: this.user.pkUserAccountId
      };
      this.url = this.GLOBAL.baseUrl + "/dynamic/Collection/insert";
      this.result = await API.init(this.url, this.data, "post");
      this.show = 0;
    },
    changeIsShow(index) {
      this.isShow = index;
    },
    chattting(index) {
      this.$router.push({
        name: "Chatting",
        params: { UserId: index }
      });
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
