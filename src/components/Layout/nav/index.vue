<template>
    <div class="layout-nav">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            text-color="#2b2b2b"
            active-text-color="#21268a"
            router>
            <div v-for="(item, index) in navs" :key="index">
                <template v-if="!item.children">
                    <el-menu-item :index="item.url">{{item.title}}</el-menu-item>
                </template>
                <template v-else>
                    <el-submenu :index="item.url">
                        <template slot="title">{{item.title}}</template>
                        <el-menu-item :index="v.url" v-for="(v, i) in item.children" :key="index + '-' + i">{{v.title}}</el-menu-item>
                    </el-submenu>
                </template>
            </div>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navs: [
                {
                    title: '首页',
                    url: '/home'
                },
                {
                    title: '关于我们',
                    url: '/about'
                },
                {
                    title: '展览计划',
                    url: '/exhibition-plan'
                },
                {
                    title: '展会现场',
                    url: '/exhibition-scene'
                },
                {
                    title: '参展指南',
                    url: '/exhibition-guide'
                },
                {
                    title: '联系我们',
                    url: '/contact-us'
                },
                {
                    title: '加入我们',
                    url: '/join-us'
                }
            ]
        }
    },
    computed: {
        activeIndex() {
            return this.$route.path || '/'
        }
    }
}
</script>

<style lang="less" scoped>
.layout-nav{
    flex: 1;
    /deep/ .el-menu{
        overflow-x: auto;
        margin: 0 auto;
        display: flex;
        justify-content: flex-end;
        background: transparent;
        // border-bottom: none;
        .el-menu-item:focus, .el-menu-item:hover{
            background: transparent;
        }
        .el-menu-item.is-active{
            border-bottom: 3px solid #ffd04b;
        }
        .el-submenu.is-active .el-submenu__title{
            border-bottom: 3px solid #ffd04b;
        }
        .el-menu-item, .el-submenu__title{
            font-size: 14px;
        }
    }
}
</style>