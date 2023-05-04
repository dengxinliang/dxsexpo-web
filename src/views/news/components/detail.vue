<template>
    <div class="news-detail">
        <div class="title">{{options.title}}</div>
        <div class="tips">
            <span><i class="el-icon-view"></i>{{options.views || 0}}</span>
            <span>来源：{{ options.origin }}</span>
            <span>{{parseTime(new Date(options.create_date), '{y}-{m}-{d}')}}</span>
        </div>
        <el-divider></el-divider>
        <div v-html="options.des"></div>
    </div>
</template>

<script>
import { parseTime } from '@/utils'
export default {
    props: ['options'],
    methods: {
        parseTime
    }
}
</script>

<style lang="less" scoped>
.news-detail{
    padding: 20px;
    .title{
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }
    .tips{
        text-align: center;
        font-size: 14px;
        color: rgba(43, 43, 43, .6);
        margin: 16px 0;
        span{
            margin: 0 16px;
            i{
                margin-right: 8px;
            }
        }
    }
}
</style>