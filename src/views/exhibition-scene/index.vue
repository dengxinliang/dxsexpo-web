<template>
    <div class="page-center page-box">
        <Title title="展会现场" :isBtn="currentRole === 'Detail'" btnText="返回" @tapBtn="tapTitleBtn" style="padding: 16px 24px; margin: 0 0 20px;" />
        <keep-alive>
            <component :is="currentRole" :list="list" :options="options" @tapOption="tapOption"></component>
        </keep-alive>
    </div>
</template>

<script>
import List from './components/list'
import Detail from './components/detail'
import { exhibitionScene } from '@/apis/exhibitionScene'
export default {
    components: { 
        Title: () => import('@/components/Title'),
        List,
        Detail
    },
    data() {
        return {
            currentRole: 'List',
            options: {},
            list: []
        }
    },
    async created() {
        await this.devData()
        const { id } = this.$route.query
        if(id) {
            this.options = this.list.find(item => item.id == id)
            this.currentRole = 'Detail'
        }
    },
    methods: {
        async devData() {
            const params = {}
            const { code, data } = await exhibitionScene(params)
            if(code === 0) {
                this.list = data || []
            }
        },
        tapOption(item) {
            this.options = item
            this.currentRole = 'Detail'
        },
        tapTitleBtn() {
            this.currentRole = 'List'
        }
    }
}
</script>

<style lang="less" scoped>

</style>