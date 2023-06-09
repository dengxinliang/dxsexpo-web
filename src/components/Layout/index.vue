<template>
    <el-container>
        <el-header>
            <div class="layout-head">
                <div class="flex-align">
                    <div class="logo">
                        <el-image
                            fit="cover"
                            :src="exhibitionInfo.logo"
                        ></el-image>
                    </div>
                    <div class="info">
                        <p><img :src="require('@/assets/logo-title.png')" alt=""></p>
                    </div>
                </div>
                <Nav />
            </div>
        </el-header>
        <Banner v-if="$route.name === 'home'" />
        <img :src="require('@/assets/images/page-banner.png')" alt="" style="width: 100%; margin-bottom: -60px;" v-else>
        <el-main>
            <transition
                appear
                name="custom-classes-transition"
                enter-active-class="animated zoomIn"
                appear-active-class="animated zoomIn">
                <router-view />
            </transition>
        </el-main>
        <el-footer>
            <div class="layout-foot">
                <div class="flex-align">
                    <div class="logo">
                        <el-image
                            fit="cover"
                            :src="exhibitionInfo.logo"
                        ></el-image>
                    </div>
                    <div>
                        <p style="margin-top: 8px;">版权所有：{{exhibitionInfo.name}}</p>
                        <p>地址：{{exhibitionInfo.address}}</p>
                        <p>
                            <span>
                                <a href="https://beian.miit.gov.cn" target="_blank">备案号：沪ICP备2023011572号-1</a>
                                <!-- <a href="http://wap.scjgj.sh.gov.cn/businessCheck/verifKey.do?showType=extShow&serial=9031000020170712120505000001918026-SAIC_SHOW_310000-20120223150829742947&signData=MEQCIFXkrz5Y3hRpAzdbLg4iTugGGrW4UvjusAWxjV+lsNkbAiBAyZyxHMMdILhJCU8wfpZ0dvE+3NNesNJcSOt+rNrG8Q==" target="_blank">
                                    <img :src="require('@/assets/images/01.png')" alt="" height="30">
                                </a> -->
                            </span>  
                        </p>
                        <p>COPYRIGHT@2017 EXPOES.COM.CN ALLRIGHTS RESERVED </p>
                        <!-- <p v-else>服务热线: 158 0175 9961</p> -->
                    </div>
                </div>
                <div>
                    <div class="flex-align">
                        <el-dropdown style="margin-right: 10px;">
                            <span class="el-dropdown-link">
                                <i class="iconfont dxs-weixin"
                                    style="font-size: 36px;"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item>
                                    <el-image
                                        fit="cover"
                                        :src="require('@/assets/images/wx.jpg')"
                                        style="width: 144px; height: 164px; margin-right: 10px;"
                                    ></el-image>
                                    <el-image
                                        fit="cover"
                                        :src="require('@/assets/images/wx-2.jpg')"
                                        style="width: 144px; height: 164px;"
                                    ></el-image>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                        <a href="tencent://message/?uin=417538558&Site=&Menu=yes">
                            <i class="iconfont dxs-QQ"
                            style="font-size: 36px; margin-right: 10px;"></i>
                        </a>
                    </div>
                    <div class="flex-align" style="background: #9a9a9a; padding: 0 10px; border-radius: 50px;">
                        <i class="iconfont dxs-jiaju-09"
                            style="font-size: 26px;"></i>
                        <span style="margin-left: 10px; color: #fff; font-weight: bold;">{{exhibitionInfo.mobile}}</span>
                    </div>
                    <div class="flex-align" style="background: #9a9a9a; padding: 0 10px; border-radius: 50px; margin-top: 10px;">
                        <i class="iconfont dxs-dianhua"
                            style="font-size: 26px;"></i>
                        <span style="margin-left: 10px; color: #fff; font-weight: bold;">13916723040  13671987051</span>
                    </div>
                </div>
            </div>
        </el-footer>
    </el-container>
</template>

<script>
import { mapState } from 'vuex'
import Nav from './nav'
import Banner from './banner'
export default {
    components: { Nav, Banner },
    data() {
        return {
            logoUrl: require('@/assets/logo.png'),
            screenWidth: 0
        }
    },
    computed: {
        ...mapState(['exhibitionInfo'])
    }
}
</script>

<style lang="less" scoped>
.logo{
    width: 68px;
    height: 68px;
    margin-right: 20px;
}
.layout-head{
    padding: 0 2%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .info{
        display: flex;
        flex-direction: column;
        align-items: center;
        p{
            width: 420px;
        }
    }
    .tips{
        background: #ff0000;
        padding: 10px 20px;
        p{
            font-size: 16px;
            color: #fff;
            /deep/ .el-icon-phone{
                border: 1px solid #fff;
                padding: 6px;
                border-radius: 100%;
                margin-right: 10px;
            }
        }
    }
}
.layout-foot{
    padding: 10px 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    p{
        display: flex;
        align-items: center;
        padding: 2px 0;
        color: #2b2b2b;
        font-size: 14px;
        span{
            display: flex;
            align-items: center;
        }
        a{
            // margin-left: 6px;
            color: #2b2b2b;
        }
    }
}
</style>