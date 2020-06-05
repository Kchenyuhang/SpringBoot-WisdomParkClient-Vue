<template>
  <transition :name="transitionName">
    <div class="bg">
      <h2>2</h2>
    </div>
  </transition>
</template>

<script>
const API = require("../../request/api");
export default {
  name: "Information",
  data() {
    return {
      transitionName: this.$store.state.transitionName,
      FristPin: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z"
      ],
      addressBooks: [],
      addressBook: {}
    };
  },
  components: {},
  created() {
    console.log(this.transitionName);
  },
  mounted() {},
  methods: {
    async selectAddressBooks() {
      this.url = this.GLOBAL.baseUrl + "/address_book/list/userId";
      this.data = {
        field: 2
      };
      this.result = await API.init(this.url, null, "get");
      console.log(this.result);
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.bg {
  position: absolute;
}
</style>
