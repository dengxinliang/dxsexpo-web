<template>
    <div class="page-center">
        <el-tabs type="border-card">
            <el-tab-pane label="公司简介"><Blurb /></el-tab-pane>
            <el-tab-pane label="企业文化">企业文化</el-tab-pane>
            <el-tab-pane label="组织架构">组织架构</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    components: {
        Blurb: () => import('./components/blurb')
    }
}
</script>

<style lang="less" scoped>
/deep/ .el-tabs__item{
    font-size: 16px;
}
</style>