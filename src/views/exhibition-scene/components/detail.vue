<template>
    <div class="flex-wrap" style="padding: 0 20px 20px;">
        <div class="item-title">{{ options.des }}</div>
        <el-row :gutter="10">
            <el-col :span="8" v-for="(item, index) in imgList" :key="index">
                <el-card 
                    class="hover-box" 
                    shadow="always" 
                    :body-style="{ padding: '10px' }" 
                    style="margin-bottom: 10px; cursor: pointer;"
                >
                    <div>
                        <el-image 
                            :src="item.url" 
                            :preview-src-list="[item.url]">
                        </el-image>
                        <p style="margin-top: 10px;">{{ item.name }}</p>
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
export default {
    props: ['options'],
    computed: {
        imgList() {
            if(!this.options.site_photos) return [];
            return JSON.parse(this.options.site_photos)
        }
    }
}
</script>

<style lang="less" scoped>
.item-title{
    width: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(0, 0, 0, .2);
}
</style>