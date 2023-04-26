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
    padding: 10px 0 4px 68px;
    border-bottom: 4px solid #21268a;
    position: relative;
    margin: 10px 0;
    box-shadow: 0 10px 10px -10px rgba(33, 38, 138, 1);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
.page-title::after{
    content: "";
    width: 60px;
    height: 24px;
    background: #21268a;
    position: absolute;
    left: 0;
    bottom: -4px;
    border-radius: 4px 30px 0 0;
}
</style>