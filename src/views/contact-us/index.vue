<template>
    <div class="page-center">
        <el-card class="hover-box" :body-style="{ padding: '10px 30px' }" shadow="always">
            <div class="title">东新盛（上海）展览有限公司</div>
            <el-row>
                <el-col :span="8"><p>电话：15801759961</p></el-col>
                <el-col :span="8"><p>传真：15801759961</p></el-col>
                <el-col :span="8"><p>邮箱：15801759961@qq.com</p></el-col>
                <el-col :span="24"><p>地址：上海市松江区莘砖公路3825号31栋818室</p></el-col>
            </el-row>
            <Amap />
        </el-card>
    </div>
</template>

<script>
import Amap from '@/components/Amap'
export default {
    components: { Amap }
}
</script>

<style lang="less" scoped>
.title{
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    padding: 20px 0;
}
p{
    font-size: 18px;
    margin: 20px 0;
}
</style>