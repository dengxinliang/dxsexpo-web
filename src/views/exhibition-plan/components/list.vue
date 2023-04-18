<template>
    <div class="flex-wrap">
        <el-row :gutter="10">
            <el-col :span="8" v-for="(item, index) in list" :key="index">
                <el-card 
                    class="hover-box" 
                    shadow="always" 
                    :body-style="{ padding: '10px' }" 
                    style="margin-bottom: 10px; cursor: pointer;"
                >
                    <div @click="tapItem(item)">
                        <img :src="item.img" alt="">
                        <p class="plan-title">{{ item.title }}</p>
                        <p>日期：{{ item.times }}</p>
                        <p>地址：{{ item.address }}</p>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-pagination
            background
            hide-on-single-page
            layout="prev, pager, next"
            :total="1000"
            style="text-align: center; width: 100%; margin-top: 10px;">
        </el-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    img: require('@/assets/images/banner-1.png'),
                    title: '2023年日本东京国际化妆品技术展',
                    times: '2023年1月11日[星期三]-13日[星期五]',
                    address: '日本东京有明国际展览中心',
                    period: '一年一届',
                    organizer: '中国'
                },
                {
                    img: require('@/assets/images/banner-1.png'),
                    title: '2023年日本东京国际化妆品技术展',
                    times: '2023年1月11日[星期三]-13日[星期五]',
                    address: '日本东京有明国际展览中心',
                    period: '一年一届',
                    organizer: '中国'
                },
                {
                    img: require('@/assets/images/banner-1.png'),
                    title: '2023年日本东京国际化妆品技术展',
                    times: '2023年1月11日[星期三]-13日[星期五]',
                    address: '日本东京有明国际展览中心',
                    period: '一年一届',
                    organizer: '中国'
                },
                {
                    img: require('@/assets/images/banner-1.png'),
                    title: '2023年日本东京国际化妆品技术展',
                    times: '2023年1月11日[星期三]-13日[星期五]',
                    address: '日本东京有明国际展览中心',
                    period: '一年一届',
                    organizer: '中国'
                },
                {
                    img: require('@/assets/images/banner-1.png'),
                    title: '2023年日本东京国际化妆品技术展',
                    times: '2023年1月11日[星期三]-13日[星期五]',
                    address: '日本东京有明国际展览中心',
                    period: '一年一届',
                    organizer: '中国'
                },
                {
                    img: require('@/assets/images/banner-1.png'),
                    title: '2023年日本东京国际化妆品技术展',
                    times: '2023年1月11日[星期三]-13日[星期五]',
                    address: '日本东京有明国际展览中心',
                    period: '一年一届',
                    organizer: '中国'
                }
            ]
        }
    },
    methods: {
        tapItem(item) {
            this.$emit('tapItem', item)
        }
    }
}
</script>

<style lang="less" scoped>
.plan-title{
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 4px;
}
</style>