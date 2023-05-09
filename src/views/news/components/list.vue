<template>
    <div class="flex-wrap" style="padding: 0 20px 20px">
        <el-row :gutter="10">
            <el-col :span="24" v-for="(item, index) in list" :key="index">
                <el-card 
                    class="hover-box" 
                    shadow="always" 
                    :body-style="{ padding: '10px' }" 
                    style="margin-bottom: 10px; cursor: pointer;"
                >
                    <div class="news-dl" @click="tapItem(item)">
                        <div class="news-dt">
                            <img :src="item.img_list" alt="">
                        </div>
                        <div class="news-dd">
                            <div class="min-title">{{item.title}}</div>
                            <p class="clamp-3">{{initHtml(item.des)}}</p>
                            <p class="times">{{parseTime(new Date(item.create_date))}}</p>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-pagination
            background
            hide-on-single-page
            layout="prev, pager, next"
            :total="0"
            style="text-align: center; width: 100%; margin-top: 10px;">
        </el-pagination>
    </div>
</template>

<script>
import { parseTime } from '@/utils'
export default {
    props: {
        list: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    methods: {
        parseTime,
        tapItem(item) {
            this.$emit('tapOption', item)
        },
        initHtml(content) {
            if(!content) return '';
            const div = document.createElement('div')
            div.innerHTML = content
            return div.innerText
        }
    }
}
</script>

<style lang="less" scoped>
.news-dl{
    display: flex;
    .news-dt{
        width: 280px;
        margin-right: 20px;
    }
    .news-dd{
        flex: 1;
        .min-title{
            font-size: 16px;
            font-weight: bold;
            padding: 0 0 10px;
        }
        .times{
            color: rgba(51, 51, 51, .6);
            font-size: 14px;
            margin-top: 10px;
        }
    }
}
</style>