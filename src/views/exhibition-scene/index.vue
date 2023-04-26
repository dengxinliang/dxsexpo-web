<template>
    <div class="page-center page-box">
        <Title title="展会现场" :isBtn="currentRole === 'Detail'" btnText="返回" @tapBtn="tapTitleBtn" />
        <keep-alive>
            <component :is="currentRole" :options="options" @tapOption="tapOption"></component>
        </keep-alive>
    </div>
</template>

<script>
import List from './components/list'
import Detail from './components/detail'
export default {
    components: { 
        Title: () => import('@/components/Title'),
        List,
        Detail
    },
    data() {
        return {
            currentRole: 'List',
            options: {}
        }
    },
    methods: {
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