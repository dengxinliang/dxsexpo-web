<template>
    <div class="page-center">
        <Title title="展览计划" :isBtn="false" />
        <div class="flex">
            <el-tabs 
                v-model="active"
                tab-position="left" 
                style="height: 480px;" 
                @tab-click=tapTab
            >
                <el-tab-pane name="1" label="医疗类"></el-tab-pane>
                <el-tab-pane name="2" label="化妆品美容类"></el-tab-pane>
                <el-tab-pane name="3" label="管材铸造类"></el-tab-pane>
                <el-tab-pane name="4" label="电力类"></el-tab-pane>
            </el-tabs>
            <div class="plan-list">
                <keep-alive>
                    <component :is="currentRole" :options="itemData" @tapItem="tapItem"></component>
                </keep-alive>
            </div>
        </div>
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
            itemData: {},
            active: '1'
        }
    },
    methods: {
        tapItem(item) {
            this.currentRole = 'Detail'
            this.itemData = item
        },
        tapTab() {
            this.currentRole = 'List'
        }
    }
}
</script>

<style lang="less" scoped>
.plan-list{
    flex: 1;
}
/deep/ .el-tabs__header{
    background: rgba(33, 38, 138, .1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);
    .el-tabs__item{
        width: 200px;
        height: 60px;
        padding: 0 30px;
        font-size: 18px;
        line-height: 60px;
        position: relative;
        &::after{
            content: "";
            width: 100%;
            height: 1px;
            background: rgba(0, 0, 0, .2);
            position: absolute;
            left: 0;
            bottom: 1px;
        }
    }
    .el-tabs__active-bar{
        width: 4px;
    }
}
</style>