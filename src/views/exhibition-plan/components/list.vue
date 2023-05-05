<template>
    <div class="flex-wrap">
        <el-row :gutter="20" style="width: 100%;">
            <el-col :span="8" v-for="(item, index) in list" :key="index">
                <el-card 
                    class="hover-box" 
                    shadow="always" 
                    :body-style="{ padding: '20px' }" 
                    style="margin-bottom: 20px; cursor: pointer; height: 480px;"
                >
                    <div @click="tapItem(item)">
                        <el-image
                            style="width: 100%; height: 240px;"
                            :src="item.logo"
                            fit="fill">
                        </el-image>
                        <p class="plan-title">{{ item.name }}</p>
                        <p>日期：{{ item.exhibition_date }}</p>
                        <p>地址：{{ item.address }}</p>
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
    props: {
        list: {
            type: Array,
            default: () => {
                return []
            }
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