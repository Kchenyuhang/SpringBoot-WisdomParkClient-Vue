<template>
  <div class="bg">
    <Loading v-if="show"></Loading>
    <div class="header">
      <div class="header-title">
        <router-link to="/layout">
          <img src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/position/zuojiantou.png" alt />
        </router-link>
        <p>校友圈</p>
        <router-link to="/tuijian">
          <img
            src="https://zhxy-vue.oss-cn-hangzhou.aliyuncs.com/icon/alumnus/tuijian.png"
            alt
            class="tuijian"
          />
        </router-link>
      </div>
    </div>
    <div class="del-card cc-col-center" v-if="isTrue!=0">
      <div>
        <p>是否删除</p>
      </div>
      <div class="cc-df">
        <div @click="dele()">
          <p>删除</p>
        </div>
        <div @click="isTrue=0">
          <p>关闭</p>
        </div>
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
    <div v-for="(item, index) in Dongtais" :key="index">
      <div v-for="(item1, index1) in Dongtais[index]" :key="index1">
        <div class="dongtai-card">
          <div class="dongtai-avatar" @click="chattting(item1.userId)">
            <img :src="'https://images.weserv.nl/?url=' + item1.userAccount.avatar" alt />
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
                <div class="shoucang cc-df-center" @click="college(item1.pkDynamicId)">
                  <p>收藏</p>
                </div>
                <hr class="line" v-if="user.pkUserAccountId == item1.userId" />
                <div class="jubao cc-df-center" v-if="user.pkUserAccountId == item1.userId">
                  <p>删除</p>
                </div>
                <hr class="line" />
                <div class="jubao cc-df-center" @click="isShow = 0">
                  <p>关闭</p>
                </div>
              </div>
            </div>
            <div class="article" @click="into(item1.pkDynamicId)" v-if="item1.content.length<=35">
              <p>{{ item1.content}}</p>
            </div>
            <div class="article" @click="into(item1.pkDynamicId)" v-if="item1.content.length>35">
              <p>{{ item1.content.substring(0, 35) }}...</p>
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
              <input type="text" class="pinglun-input" v-model="content" />
              <div
                class="input-btn cc-df-center"
                @click="addContent(item1.pkDynamicId,index,index1)"
              >
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
              <div
                class="comment-row cc-df-between"
                @touchstart="gtouchstart(item3.pkCommentId,index,index1,index3)"
                @touchmove="gtouchmove()"
                @touchend="gtouchend(item3.pkCommentId,index1,index3)"
              >
                <div class="dis">
                  <img :src="'https://images.weserv.nl/?url=' + item3.avatar" alt />
                  <div class="comment-content">
                    <div class="row3">
                      <p class="nickname">{{ item3.nickname }}</p>
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
      isTrue: 0,
      user: this.$store.state.user,
      token: this.$store.state.token,
      content: "",
      text: {},
      timeOutEvent: 0,
      x: 0,
      y: 0,
      z: 0
    };
  },
  components: {
    Loading: require("../../components/Loading").default
  },
  async created() {
    await this.selectDongtai();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    setTimeout(() => {
      this.show = false;
      this.msg = "加载完了！";
    }, 3000);
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    async dele() {
      this.data = {
        id: this.isTrue
      };
      this.url = this.GLOBAL.baseUrl + "/dynamic/comment/deletion";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
      console.log(this.x, this.y, this.z);
      this.Dongtais[this.x][this.y].commentVoList.splice(this.z, 1);
      console.log(this.Dongtais[this.x][this.y].commentVoList[this.z]);
      this.isTrue = 0;
    },
    handleScroll() {
      let scrollTop = document.documentElement.scrollTop;
      let documentTop = document.body.scrollHeight; //全部内容的高
      let screenHeight = window.screen.availHeight; //当前屏幕的高
      // console.log(scrollTop);
      if (scrollTop + screenHeight >= documentTop - 1) {
        this.page++;
        this.selectDongtai();
        //干你想干的事儿
        /* console.log(screenTop)
				console.log(documentTop)
				console.log(screenHeight) */
      }
    },
    async addContent(index, i, j) {
      console.log(i, j);
      this.data = {
        content: this.content,
        dynamicId: index,
        userId: this.user.pkUserAccountId
      };
      this.url = this.GLOBAL.baseUrl + "/dynamic/comment/insert";
      this.result = await API.init(this.url, this.data, "post");
      this.text = {
        avatar: this.user.avatar,
        content: this.content,
        dynamicId: index,
        gmtCreate: this.formatDateTime(new Date()),
        isDeleted: false,
        nickname: this.user.nickname,
        pkCommentId: "59075843049525248",
        replyCommentVos: Array(0),
        replyComments: Array(0),
        userId: this.user.pkUserAccountId
      };
      console.log(this.Dongtais[i][j].commentVoList);
      if (this.Dongtais[i][j].commentVoList != null) {
        this.Dongtais[i][j].commentVoList.splice(0, 0, this.text);
      } else {
        this.Dongtais[i][j].commentVoList = [];
        this.Dongtais[i][j].commentVoList.push(this.text);
      }
      console.log(this.Dongtais[i][j]);
      this.content = "";
    },
    formatDateTime(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    },
    async college(index) {
      this.data = {
        dynamicId: index,
        userId: this.user.pkUserAccountId
      };
      this.url = this.GLOBAL.baseUrl + "/dynamic/Collection/insert";
      this.result = await API.init(this.url, this.data, "post");
      console.log(this.result);
      this.isShow = 0;
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
      // for (let i = 0; i < this.Dongtais[this.page - 1].length; i++) {
      //   console.log(this.Dongtais[this.page - 1][i].commentVoList);
      // }
      for (let i = 0; i < this.Dongtais[this.page - 1].length; i++) {
        if (this.Dongtais[this.page - 1][i].commentVoList != null) {
          this.Dongtais[this.page - 1][i].commentVoList.sort(function(a, b) {
            return (
              Date.parse(b.gmtCreate.replace(/-/g, "/")) -
              Date.parse(a.gmtCreate.replace(/-/g, "/"))
            );
          });
          for (
            let j = 0;
            j < this.Dongtais[this.page - 1][i].commentVoList.length;
            j++
          ) {
            if (this.Dongtais[this.page - 1][i].commentVoList[j].isDeleted) {
              console.log(this.Dongtais[this.page - 1][i].commentVoList[j]);
              this.Dongtais[this.page - 1][i].commentVoList.splice(j, 1);
            }
          }
        }
      }
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
    },
    //开始按
    gtouchstart(item, index, index1, index2) {
      var self = this;
      this.timeOutEvent = setTimeout(function() {
        self.longPress(item, index, index1, index2);
      }, 500); //这里设置定时器，定义长按500毫秒触发长按事件，时间可以自己改，个人感觉500毫秒非常合适
      return false;
    },
    //手释放，如果在500毫秒内就释放，则取消长按事件，此时可以执行onclick应该执行的事件
    gtouchend(item, index, index1) {
      clearTimeout(this.timeOutEvent); //清除定时器
      if (this.timeOutEvent != 0) {
        //这里写要执行的内容（尤如onclick事件）
        this.goChat(item, index, index1);
      }
      return false;
    },
    //如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
    gtouchmove() {
      clearTimeout(this.timeOutEvent); //清除定时器
      this.timeOutEvent = 0;
    },
    //真正长按后应该执行的内容
    longPress(id, index, index1, index2) {
      console.log(id);
      this.x = index;
      this.y = index1;
      this.z = index2;
      this.isTrue = id;
      this.timeOutEvent = 0;
      //执行长按要执行的内容，如弹出菜单
      console.log("执行的内容");
    },
    goChat(id) {
      console.log(id);
      console.log("点击");
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/alumnus/AlumnusIndex.scss";
</style>
