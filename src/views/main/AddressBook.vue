<template>
<transition :name="transitionName">
  <div class="bg">
    <h2>2</h2>
  </div>
</transition>
</template>

<script>
export default {
 name: 'Information',
  data() {
    return {
     transitionName: this.$store.state.transitionName
    }
  },
  components: {},
  created() {
      console.log(this.transitionName)
  },
  mounted() {},
  methods: {},
  computed: {}
}
</script>

<style scoped lang="scss">
.bg{
    position:absolute;
}

</style>
