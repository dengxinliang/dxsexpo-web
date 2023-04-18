<template>
    <el-amap
        ref="amap"
        vid="amap"
        :center="mapCenter"
        :map-manager="amapManager"
        :zoom="16"
        :plugin="plugin"
        mapStyle="fresh"
        class="amap-demo"
        style="height: 500px; width: 100%;">
        <el-amap-marker :position="mapCenter"></el-amap-marker>
    </el-amap>
</template>

<script>
import { AMapManager } from 'vue-amap'
export default {
    data() {
        return {
            mapCenter: [121.278576, 31.092369],
            amapManager: new AMapManager(),
            plugin: ['ToolBar']
        }
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>

</style>