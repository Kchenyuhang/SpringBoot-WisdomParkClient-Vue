<template>
  <div class="carousel-wrap">
    <transition-group
      tag="ul"
      class="slide-ul"
      name="slide"
    >
      <li
        v-for="(item, index) in slideList"
        :key="index"
        @click="into(index)"
        v-show="index === currentIndex"
        @mouseenter="stop"
        @mouseleave="go"
      >
        <a :href="item.url">
          <img
            :src="item.image"
            :alt="item.description"
          />
        </a>
      </li>
    </transition-group>
    <div class="carousel-items cc-df-center">
      <div
        v-for="(item, index) in slideList"
        :key="index"
      >
        <span
          :class="{ active: index == currentIndex }"
          @mouseover="change(index)"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: ["slideList"],
  data() {
    return {
      currentIndex: 0,
      timer: null
    };
  },
  components: {},
  created() {
    this.$nextTick(() => {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 3000);
    });
  },
  mounted() {},
  methods: {
    go() {
      this.timer = setInterval(() => {
        this.autoPlay();
      }, 3000);
    },
    stop() {
      clearInterval(this.timer);
      this.timer = null;
    },
    change(index) {
      this.currentIndex = index;
    },
    autoPlay() {
      this.currentIndex++;
      if (this.currentIndex > this.slideList.length - 1) {
        this.currentIndex = 0;
      }
    },
    into(index) {
      this.$emit("into", index);
      this.go();
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.carousel-wrap {
  position: relative;
  top: 15px;
  width: 100%;
  height: 175px;
  overflow: hidden;
}

.slide-ul {
  width: 100%;
  height: 100%;
}

.slide-ul li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slide-ul li img {
  width: 100%;
  height: 100%;
}

.carousel-items {
  z-index: 100;
  position: relative;
  top: -15px;

  text-align: center;
  font-size: 0;
}

.carousel-items span {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 5px;
  border-radius: 10px;
  background-color: #eee;
  cursor: pointer;
}

.carousel-items .active {
  background-color: #ffa500;
}

/* 动画 */
.slide-enter-to {
  transition: all 1s ease;
  transform: translateX(0);
}

.slide-leave-active {
  transition: all 1s ease;
  transform: translateX(-100%);
}

.slide-enter {
  transform: translateX(100%);
}

.slide-leave {
  transform: translateX(0);
}
</style>
