<template>
    <div class="page-center">
        <el-card class="hover-box" :body-style="{ padding: '10px 30px' }" shadow="always">
            <div class="title">{{exhibitionInfo.name}}</div>
            <el-row style="margin-bottom: 20px;">
                <el-col :span="24"><p>{{exhibitionInfo.address}}</p></el-col>
                <el-col :span="24"><p>电话：021-{{exhibitionInfo.mobile}}</p></el-col>
                <el-col :span="24"><p>邮编：201619</p></el-col>
                <!-- <el-col :span="8"><p>传真：{{exhibitionInfo.fax}}</p></el-col> -->
                <el-col :span="24"><p>邮箱：{{exhibitionInfo.email}}</p></el-col>
            </el-row>
            <Amap />
        </el-card>
    </div>
</template>

<script>
import Amap from '@/components/Amap'
import { mapState } from 'vuex'
export default {
    components: { Amap },
    computed: {
        ...mapState(['exhibitionInfo'])
    }
}
</script>

<style lang="less" scoped>
.title{
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px;
}
p{
    font-size: 16px;
    margin: 6px 0;
}
</style>