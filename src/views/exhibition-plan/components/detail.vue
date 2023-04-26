<template>
    <div class="plan-detail">
        <dl>
            <dt>
                <img :src="options.img" alt="">
            </dt>
            <dd>
                <div class="title">{{ options.title }}</div>
                <p>展会时间：{{ options.times }}</p>
                <p>展会地点：{{ options.address }}</p>
                <p>展会周期：{{ options.period }}</p>
                <p>承办方：{{ options.organizer }}</p>
            </dd>
        </dl>
        <div class="rich-text">
            <div class="title">展会介绍</div>
            <div v-html="text"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['options'],
    data() {
        return {
            text: '<p>1234</p><p>23455</p>'
        }
    }
}
</script>

<style lang="less" scoped>
.plan-detail{
    dl{
        display: flex;
        dt{
            width: 480px;
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