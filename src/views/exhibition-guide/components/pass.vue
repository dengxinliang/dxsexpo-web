<template>
    <div class="pass">
        <el-row :gutter="80">
            <el-col :span="6" v-for="(item, index) in list" :key="index">
                <div :class="['pass-item', index === list.length - 1 ? 'no-after' : '']">
                    <i class="iconfont" :class="item.icon"></i>
                    <p class="title">{{ item.title }}</p>
                    <p class="tips">{{ item.tips }}</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
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
            ]
        }
    }
}
</script>

<style lang="less" scoped>
@font-face {
  font-family: "iconfont"; /* Project id 3983018 */
  /* Color fonts */
  src: 
       url('//at.alicdn.com/t/c/font_3983018_cp45e83k9wq.woff2?t=1681058024888') format('woff2'),
       url('//at.alicdn.com/t/c/font_3983018_cp45e83k9wq.woff?t=1681058024888') format('woff'),
       url('//at.alicdn.com/t/c/font_3983018_cp45e83k9wq.ttf?t=1681058024888') format('truetype');
}
.pass{
    padding: 10px 0 0;
    .pass-item{
        height: 260px;
        background: rgba(33, 38, 138, 0.1);
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 4px;
        padding: 30px 20px 0;
        position: relative;
        i{
            font-size: 64px;
        }
        .title{
            font-size: 20px;
            font-weight: bold;
            margin: 10px 0;
        }
        .tips{
            font-size: 18px;
        }
        &::after{
            font-family: iconfont;
            content: "\e606";
            position: absolute;
            top: 50%;
            right: -60px;
            transform: translate(0, -50%);
            font-size: 36px;
        }
        &.no-after::after{
            display: none;
        }
    }
}
</style>