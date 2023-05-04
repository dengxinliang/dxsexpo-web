<template>
  <div id="app">
    <router-view v-if="isReady" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { company } from '@/apis/common'
export default {
  name: 'App',
  data() {
    return {
      isReady: false
    }
  },
  mounted() {
    this.devData()
    this.init()
    window.onresize = () => {
        return (() => {
          this.init()
        })()
    }
  },
  methods: {
    ...mapMutations(['getWindowPc', 'getExhibitionInfo']),
    init() {
      let clientWidth = document.documentElement.clientWidth
      let isPx = clientWidth > 1000
      this.getWindowPc(isPx)
    },
    async devData() {
      const params = {}
      const { code, data } = await company(params)
      if(code === 0) {
        this.getExhibitionInfo(data)
        this.isReady = true
      }
    }
  }
}
</script>

<style>
</style>
