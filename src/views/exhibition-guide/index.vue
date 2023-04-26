<template>
    <div class="page-center">
        <el-tabs type="border-card">
            <el-tab-pane label="参展流程">
                <Pass />
            </el-tab-pane>
            <el-tab-pane label="展台搭建">
                <Booth />
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import Pass from './components/pass'
import Booth from './components/booth'
export default {
    components: { Pass, Booth }
}
</script>

<style lang="less" scoped>
/deep/ .el-tabs__item{
    font-size: 16px;
}
</style>