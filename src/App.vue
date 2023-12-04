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
    this.init()
    window.onresize = () => {
        return (() => {
          this.init()
        })()
    }
  },
  methods: {
    ...mapMutations(['getExhibitionInfo']),
    init() {
      let clientWidth = document.documentElement.clientWidth
      let isPx = clientWidth > 1000
      if(!isPx) {
        window.location.href = window.location.origin + '/dxsexpo-app/'
        return
      }
      this.devData()
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
