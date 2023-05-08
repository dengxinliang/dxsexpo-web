<template>
    <div class="page-center">
        <el-tabs type="border-card">
            <el-tab-pane label="公司简介">
                <div class="about-title">
                    <span>东新盛（上海）展览有限公司</span>
                    <p>East Shinsen（Shanghai）Exhibition Co.,Itd</p>
                </div>
                <div v-html="exhibitionInfo.des" style="line-height: 2;"></div>
                <div style="height: 16px;"></div>
                <el-row :gutter="10">
                    <el-col :span="12" v-for="(item, index) in imgList" :key="index">
                        <el-card 
                            class="hover-box" 
                            shadow="always" 
                            :body-style="{ padding: '10px' }" 
                            style="margin-bottom: 10px; cursor: pointer;"
                        >
                            <el-image 
                                :src="item.url" 
                                :preview-src-list="[item.url]"
                                style="width: 100%;">
                            </el-image>
                        </el-card>
                    </el-col>
                </el-row>
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
.about-title{
    text-align: center;
    padding: 30px 0;
    position: relative;
    font-size: 20px;
    span{
        font-size: 36px;
        font-weight: bold;
        position: relative;
        background: #fff;
        padding: 0 30px;
        z-index: 1;
    }
    &::after{
        content: "";
        width: 100%;
        height: 1px;
        background: rgba(43, 43, 43, .2);
        position: absolute;
        left: 0;
        top: 50%;
        margin-top: -10px;
    }
}
</style>