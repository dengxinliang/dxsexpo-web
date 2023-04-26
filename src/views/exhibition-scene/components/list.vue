<template>
    <div class="flex-wrap" style="padding: 0 10px 20px">
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
                        <p style="margin-top: 10px;">{{ item.title }}</p>
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
                    title: '2023年日本东京国际化妆品技术展', 
                    img: require('@/assets/images/banner-1.png'),
                    images: [
                        { title: 1, img: require('@/assets/images/banner-1.png') },
                        { title: 2, img: require('@/assets/images/banner-1.png') },
                        { title: 3, img: require('@/assets/images/banner-1.png') }
                    ]
                },
                { 
                    title: '2023年日本东京国际化妆品技术展', 
                    img: require('@/assets/images/banner-1.png'),
                    images: [
                        { title: 1, img: require('@/assets/images/banner-1.png') },
                        { title: 2, img: require('@/assets/images/banner-1.png') },
                        { title: 3, img: require('@/assets/images/banner-1.png') }
                    ]
                },
                { 
                    title: '2023年日本东京国际化妆品技术展', 
                    img: require('@/assets/images/banner-1.png'),
                    images: [
                        { title: 1, img: require('@/assets/images/banner-1.png') },
                        { title: 2, img: require('@/assets/images/banner-1.png') },
                        { title: 3, img: require('@/assets/images/banner-1.png') }
                    ]
                },
                { 
                    title: '2023年日本东京国际化妆品技术展', 
                    img: require('@/assets/images/banner-1.png'),
                    images: [
                        { title: 1, img: require('@/assets/images/banner-1.png') },
                        { title: 2, img: require('@/assets/images/banner-1.png') },
                        { title: 3, img: require('@/assets/images/banner-1.png') }
                    ]
                },
                { 
                    title: '2023年日本东京国际化妆品技术展', 
                    img: require('@/assets/images/banner-1.png'),
                    images: [
                        { title: 1, img: require('@/assets/images/banner-1.png') },
                        { title: 2, img: require('@/assets/images/banner-1.png') },
                        { title: 3, img: require('@/assets/images/banner-1.png') }
                    ]
                },
                { 
                    title: '2023年日本东京国际化妆品技术展', 
                    img: require('@/assets/images/banner-1.png'),
                    images: [
                        { title: 1, img: require('@/assets/images/banner-1.png') },
                        { title: 2, img: require('@/assets/images/banner-1.png') },
                        { title: 3, img: require('@/assets/images/banner-1.png') }
                    ]
                }
            ]
        }
    },
    methods: {
        tapItem(item) {
            this.$emit('tapOption', item)
        }
    }
}
</script>

<style lang="less" scoped>

</style>