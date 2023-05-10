<template>
    <div class="page-center page-box">
        <Title title="展览计划" :isBtn="currentRole === 'Detail'" btnText="返回" @tapBtn="tapTitleBtn" style="padding: 16px 24px; margin: 0;" />
        <div class="flex">
            <el-tabs 
                v-model="active"
                tab-position="left" 
                @tab-click=tapTab
            >
                <el-tab-pane  
                    v-for="(item, index) in typeList" 
                    :key="index"
                    :name="item.dictionary" 
                    :label="item.name"
                ></el-tab-pane>
            </el-tabs>
            <div class="plan-list">
                <keep-alive>
                    <component :is="currentRole" :list="list" :options="itemData" @tapItem="tapItem"></component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
import List from './components/list'
import Detail from './components/detail'
import { industryCategory, exhibitionPlan } from '@/apis/exhibitionPlan'
export default {
    components: {
        Title: () => import('@/components/Title'),
        List,
        Detail
    },
    data() {
        return {
            currentRole: 'List',
            itemData: {},
            active: '',
            typeList: [],
            rows: []
        }
    },
    computed: {
        list() {
            const arr = this.rows.filter(item => item.industry_dictionary === this.active)
            return arr
        }
    },
    async created() {
        await this.devTypeData()
        await this.devData()
        const { id } = this.$route.query
        if(id) {
            const options = this.rows.find(item => item.id == id)
            this.active = options.industry_dictionary
            this.itemData = options
            this.currentRole = 'Detail'
        }
    },
    methods: {
        async devData() {
            const params = {}
            const { code, data } = await exhibitionPlan(params)
            if (code === 0) {
                this.rows = data || []
            }
        },
        async devTypeData() {
            const params = {}
            const { code, data } = await industryCategory(params)
            if (code === 0) {
                const rows = data || []
                this.typeList = rows
                this.active = rows[0].dictionary
            }
        },
        tapItem(item) {
            this.currentRole = 'Detail'
            this.itemData = item
        },
        tapTab() {
            this.currentRole = 'List'
        },
        tapTitleBtn() {
            this.currentRole = 'List'
        }
    }
}
</script>

<style lang="less" scoped>
.plan-list{
    max-width: calc(100vw - 40px - 220px);
    flex: 1;
    padding: 20px 10px 20px;
}
/deep/ .el-tabs__header{
    background: rgba(33, 38, 138, .1);
    box-shadow: 0 0 5px rgba(0, 0, 0, 1);
    .el-tabs__item{
        width: 200px;
        height: 60px;
        padding: 0 30px;
        font-size: 16px;
        line-height: 60px;
        position: relative;
        &::after{
            content: "";
            width: 100%;
            height: 1px;
            background: rgba(0, 0, 0, .2);
            position: absolute;
            left: 0;
            bottom: 1px;
        }
    }
    .el-tabs__active-bar{
        width: 4px;
    }
}
</style>