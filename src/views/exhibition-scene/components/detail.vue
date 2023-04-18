<template>
    <div class="flex-wrap">
        <div class="item-title">{{ options.title }}</div>
        <el-row :gutter="10">
            <el-col :span="8" v-for="(item, index) in options.images" :key="index">
                <el-card 
                    class="hover-box" 
                    shadow="always" 
                    :body-style="{ padding: '10px' }" 
                    style="margin-bottom: 10px; cursor: pointer;"
                >
                    <div @click="tapItem(item)">
                        <el-image 
                            :src="item.img" 
                            :preview-src-list="[item.img]">
                        </el-image>
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
    props: ['options']
}
</script>

<style lang="less" scoped>
.item-title{
    width: 100%;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding: 20px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
}
</style>