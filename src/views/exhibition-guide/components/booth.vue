<template>
    <div class="booth">
        <div class="title">{{ info.title }}</div>
        <p>{{ info.tips }}</p>
        <div>
            <el-row :gutter="10">
                <el-col :span="6" v-for="(item, index) in info.list" :key="index">
                    <el-card 
                        class="hover-box" 
                        shadow="always" 
                        :body-style="{ padding: '10px' }" 
                        style="margin-bottom: 10px; cursor: pointer;"
                    >
                        <el-image 
                            :src="item" 
                            :preview-src-list="[item]">
                        </el-image>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            info: {
                title: '一站式服务 全球搭建 品质为先 靓丽宣传',
                tips: '致力于全球展览展示设计规划及搭建服务，在美国、欧洲和迪拜等地拥有良好的合作伙伴，有多年的热门展会服务经验，满足国内客户的海外特装需求、品牌形象宣传。提供 展台策划+设计+运营+工程，为您提供全球一站式展台设计搭建服务。',
                list: [
                    require('@/assets/images/banner-1.png'),
                    require('@/assets/images/banner-1.png'),
                    require('@/assets/images/banner-1.png'),
                    require('@/assets/images/banner-1.png')
                ]
            }
        }
    }
}
</script>

<style lang="less" scoped>
.booth{
    .title{
        font-size: 20px;
        font-weight: bold;
    }
    p{
        font-size: 18px;
        margin: 10px 0;
        line-height: 1.6;
    }
}
</style>