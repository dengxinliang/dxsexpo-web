<template>
    <div class="page-center">
        <div>
            <Title title="关于我们" />
            <el-card class="hover-box" :body-style="{ padding: '10px' }" shadow="always">
                <div class="flex-wrap">
                    <p class="max-w488 max-w390">
                        <el-image 
                            style="width: 100%;"
                            :src="exhibitionImg" 
                            :preview-src-list="[exhibitionImg]">
                        </el-image>
                    </p>
                    <div style="flex: 1;" class="m-l20-min" v-html="exhibitionInfo.des"></div>
                </div>
            </el-card>
        </div>
        <div>
            <el-row :gutter="20">
                <el-col :xs="24" :sm="24" :md="12">
                    <Title title="行业资讯" @tapBtn="$router.push({path: '/news'})" />
                    <el-card 
                        class="hover-box" 
                        shadow="always" 
                        :body-style="{ padding: '10px' }" 
                        v-for="(item, index) in informationList" 
                        :key="index" 
                        style="margin-bottom: 10px;"
                    >
                        <div @click="tapItem(item, '/news')">
                            <el-row :gutter="10">
                                <el-col :xs="24" :sm="24" :md="9">
                                    <img :src="item.img_list">
                                </el-col>
                                <el-col :xs="24" :sm="24" :md="15">
                                    <div class="min-title">{{item.title}}</div>
                                    <p class="clamp-3">{{initHtml(item.des)}}</p>
                                    <p class="times">{{parseTime(new Date(item.create_date))}}</p>
                                </el-col>
                            </el-row>
                        </div>
                    </el-card>
                </el-col>
                <el-col :xs="24" :sm="24" :md="12">
                    <Title title="展会现场" @tapBtn="$router.push({path: '/exhibition-scene'})" />
                    <el-row :gutter="10">
                        <el-col :xs="24" :sm="24" :md="12" v-for="(item, index) in exhibitionSceneList" :key="index">
                            <el-card class="hover-box" shadow="always" :body-style="{ padding: '0px' }" style="margin-bottom: 10px;">
                                <div @click="tapItem(item, '/exhibition-scene')">
                                    <img :src="item.img_list">
                                    <div class="pad-10 ellipsis">{{item.des}}</div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div>
            <Title title="参展流程" @tapBtn="$router.push({path: '/exhibition-guide'})" />
            <el-card class="hover-box" shadow="always" :body-style="{ padding: '20px 20px 0' }">
                <el-row :gutter="80">
                    <el-col class="wb20" :span="4" v-for="(item, index) in dxsIcons" :key="index">
                        <div :class="['pass-item', (index + 1) % 5 === 0 ? 'no-after' : '']">
                            <i class="iconfont" :class="item.icon"></i>
                            <p class="title">{{ item.title }}</p>
                            <p class="tips">{{ item.tips }}</p>
                        </div>
                    </el-col>
                </el-row>
            </el-card>
        </div>
        <div>
            <Title title="合作媒体" :isBtn="false" />
            <!-- <el-card shadow="always" :body-style="{ padding: '10px' }"> -->
                <div class="hezuo">
                    <a href="javascript:;" class="hover-box">
                        <img src="//nwzimg.wezhan.cn/contents/sitefiles2051/10257901/images/26046858.jpg" alt="">
                    </a>
                    <a href="javascript:;" class="hover-box">
                        <img src="//nwzimg.wezhan.cn/contents/sitefiles2051/10257901/images/26046854.jpg" alt="">
                    </a>
                </div>
            <!-- </el-card> -->
        </div>
    </div>
</template>

<script>
import { parseTime } from '@/utils'
import { information } from '@/apis/news'
import { exhibitionScene } from '@/apis/exhibitionScene'
import { mapState } from 'vuex'
export default {
    components: {
        Title: () => import('@/components/Title')
    },
    data() {
        return {
            activeName: 'first',
            dxsIcons: [
                { title: '报名', icon: 'dxs-baoming', tips: '（企业填写报名表双方签订参展合约）' },
                { title: '支付展位定金', icon: 'dxs-zhifu', tips: '（参展企业支付合约对应展位定金）' },
                { title: '确认展位', icon: 'dxs-weizhi', tips: '（根据报名先后顺序下达并分配展位）' },
                { title: '支付展位尾款及人员定金', icon: 'dxs-zhifu', tips: '' },
                { title: '提交会刊信息', icon: 'dxs-iconset0184', tips: '' },
                { title: '展品运输', icon: 'dxs-sharpicons_truck-', tips: '（发运输指南并确认运输样品）' },
                { title: '办理签证', icon: 'dxs-qianzheng', tips: '（我司协助展商办理签证）' },
                { title: '支付尾款', icon: 'dxs-zhifu', tips: '支付尾款（支付人员及运输等尾款）' },
                { title: '出团参展', icon: 'dxs-zhanlan', tips: '' },
                { title: '展后服务', icon: 'dxs-fuwu', tips: '（开具发票及协助企业申请补贴）' }
            ],
            informationList: [],
            exhibitionSceneList: []
        }
    },
    computed: {
        ...mapState(['exhibitionInfo']),
        dxsIconsTop() {
            const list = [...this.dxsIcons]
            const middleIndex = Math.ceil(list.length / 2)
            const newList = list.splice(0, middleIndex)
            return newList
        },
        dxsIconsBottom() {
            const list = [...this.dxsIcons]
            const middleIndex = Math.ceil(list.length / 2)
            const newList = list.splice(-middleIndex)
            return newList
        },
        exhibitionImg() {
            const { img_list } = this.exhibitionInfo
            const imgs = img_list ? JSON.parse(img_list) : img_list
            return imgs ? imgs[0].url : imgs
        }
    },
    created() {
        this.information()
        this.exhibitionScene()
    },
    methods: {
        parseTime,
        async information() {
            const params = {}
            const { code, data } = await information(params)
            if(code === 0) {
                this.informationList = data || []
            }
        },
        async exhibitionScene() {
            const params = {}
            const { code, data } = await exhibitionScene(params)
            if(code === 0) {
                this.exhibitionSceneList = data || []
            }
        },
        initHtml(content) {
            if(!content) return '';
            const div = document.createElement('div')
            div.innerHTML = content
            return div.innerText
        },
        tapItem(item, url) {
            this.$router.push({
                path: url,
                query: { id: item.id }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.min-title{
    font-size: 16px;
    font-weight: bold;
    padding: 0 0 10px;
}
.hezuo{
    display: flex;
    flex-flow: wrap;
    a{
        width: 160px;
        margin-right: 10px;
        padding: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
        background: #fff;
    }
}
.times{
    color: rgba(51, 51, 51, .6);
    font-size: 14px;
    margin-top: 10px;
}
.flex-wrap{
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
}

.pass-item{
    height: 220px;
    background: rgba(33, 38, 138, 0.1);
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    padding: 10px 20px 0;
    position: relative;
    i{
        font-size: 58px;
    }
    .title{
        font-size: 16px;
        font-weight: bold;
        margin: 10px 0;
    }
    .tips{
        font-size: 14px;
    }
    &::after{
        font-family: iconfont;
        content: "\e606";
        position: absolute;
        top: 50%;
        right: -60px;
        transform: translate(0, -50%);
        font-size: 28px;
    }
    &.no-after::after{
        display: none;
    }
}

.wb20{
    width: 20%;
}

</style>