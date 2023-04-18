<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  mounted() {
    this.init()
    window.onresize = () => {
        return (() => {
          this.init()
        })()
    }
  },
  methods: {
    ...mapMutations(['getWindowPc']),
    init() {
      let clientWidth = document.documentElement.clientWidth
      let isPx = clientWidth > 1000
      this.getWindowPc(isPx)
    }
  }
}
</script>

<style>
</style>
