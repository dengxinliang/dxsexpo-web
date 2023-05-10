<template>
    <div class="page-title">{{title}}
        <el-button type="text" @click="tapBtn" v-if="isBtn">{{btnText}} 
            <i class="el-icon-d-arrow-right"></i>
            <i class="el-icon-d-arrow-right"></i>
            <i class="el-icon-d-arrow-right"></i>
        </el-button>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        isBtn: {
            type: Boolean,
            default: true
        },
        btnText: {
            type: String,
            default: '更多'
        }
    },
    methods: {
        tapBtn() {
            this.$emit('tapBtn')
        }
    }
}
</script>

<style lang="less" scoped>
.page-title{
    font-size: 20px;
    color: #21268a;
    font-weight: bold;
    padding: 10px 0 4px 0;
    border-bottom: 2px solid rgba(33, 38, 138, .2);
    position: relative;
    margin: 10px 0 16px;
    box-shadow: 0 2px 4px -4px rgba(33, 38, 138, .06);
    display: flex;
    justify-content: space-between;
    align-items: center;
    /deep/ .el-button{
        padding: 0;
    }
}
// .page-title::after{
//     content: "";
//     width: 60px;
//     height: 24px;
//     background: #21268a;
//     position: absolute;
//     left: 0;
//     bottom: -4px;
//     border-radius: 4px 30px 0 0;
// }
</style>