<template>
  <div class="container">
    <div class="loading"></div>
  </div>
</template>

<script>
export default {
  name: "Loading",
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
.container {
  position: absolute;
  right: 100px;
  top: 100px;
  transform: translate(-50%, -50%);
}

.loading {
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: 5px #ffffff solid;
  border-right-color: #87ceeb;
  animation: loading 1s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
