<template>
    <div class="page-center">
        <el-tabs type="border-card">
            <el-tab-pane label="公司简介">
                <div v-html="exhibitionInfo.des"></div>
                <div style="height: 16px;"></div>
                <div v-for="(item, index) in imgList" :key="index">
                    <el-image 
                        style="width: 100%;"
                        :src="item.url" 
                        :preview-src-list="[item.url]">
                    </el-image>
                </div>
            </el-tab-pane>
            <el-tab-pane label="企业文化">
                <div v-html="companyInfoObj.des"></div>
            </el-tab-pane>
            <el-tab-pane label="组织架构">
                <div v-html="departObj.des"></div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { companyInfo, depart } from '@/apis/common'
export default {
    data() {
        return {
            companyInfoObj: {},
            departObj: {}
        }
    },
    computed: {
        ...mapState(['exhibitionInfo']),
        imgList() {
            const { img_list } = this.exhibitionInfo
            const imgs = img_list ? JSON.parse(img_list) : []
            return imgs
        }
    },
    created() {
        this.companyInfo()
        this.depart()
    },
    methods: {
        async companyInfo() {
            const params = {}
            const { code, data } = await companyInfo(params)
            if(code === 0) {
                this.companyInfoObj = data || {}
            }
        },
        async depart() {
            const params = {}
            const { code, data } = await depart(params)
            if(code === 0) {
                this.departObj = data || {}
            }
        }
    }
}
</script>

<style lang="less" scoped>
/deep/ .el-tabs__item{
    font-size: 16px;
}
</style>