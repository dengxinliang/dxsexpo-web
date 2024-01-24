<template>
    <div class="flex-wrap" style="padding: 0 20px 20px">
        <el-row :gutter="10">
            <el-col :span="8" v-for="v in 3" :key="'index' + v">
                <el-card 
                    class="hover-box" 
                    shadow="always" 
                    :body-style="{ padding: '16px' }" 
                    style="margin-bottom: 10px; cursor: pointer;"
                    v-for="(item, index) in getList(v)" :key="index"
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
        },
        getList(len) {
            return this.list.filter((item, index) => (index % 3) + 1 === len)
        }
    }
}
</script>

<style lang="less" scoped>

</style>