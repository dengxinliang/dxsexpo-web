<template>
    <div class="plan-detail">
        <dl>
            <dt>
                <img :src="options.logo" alt="">
            </dt>
            <dd>
                <div class="title">{{ options.name }}</div>
                <p>展会时间：{{ options.exhibition_date }}</p>
                <p>展会地点：{{ options.address }}</p>
                <p>展会周期：{{ options.exhibition_cycle }}</p>
                <p>主办方：{{ options.organizer }}</p>
            </dd>
        </dl>
        <div class="rich-text">
            <div class="title">展会介绍</div>
            <div v-html="options.des"></div>
        </div>
        <div class="rich-text">
            <div class="title">展品范围</div>
            <div v-html="options.exhibition_scope"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['options']
}
</script>

<style lang="less" scoped>
.plan-detail{
    dl{
        display: flex;
        dt{
            width: 240px;
            margin-right: 20px;
        }
        dd{
            .title{
                font-size: 18px;
                font-weight: bold;
                margin-top: 10px;
            }
            p{
                font-size: 16px;
                margin-top: 10px;
            }
        }
    }
    .rich-text{
        .title{
            font-size: 18px;
            font-weight: bold;
            border-bottom: 1px solid;
            margin: 10px 0;
        }
    }
}
</style>