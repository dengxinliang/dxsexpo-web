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
                        <img :src="item.img_list" alt="">
                        <p style="margin-top: 10px;">{{ item.des }}</p>
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
            this.$emit('tapOption', item)
        }
    }
}
</script>

<style lang="less" scoped>

</style>