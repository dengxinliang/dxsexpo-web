<template>
    <div class="page-center" style="border-radius: 8px 8px 0 0; overflow: hidden;">
        <el-card class="hover-box" :body-style="{ padding: '30px' }" shadow="always">
            <div v-html="options.des"></div>
        </el-card>
    </div>
</template>

<script>
import { recruit } from '@/apis/common'
export default {
    data() {
        return {
            options: {}
        }
    },
    created() {
        this.devData()
    },
    methods: {
        async devData() {
            const params = {}
            const { code, data } = await recruit(params)
            if (code === 0) {
                this.options = data || {}
            }
        }
    }
}
</script>

<style lang="less" scoped>

</style>