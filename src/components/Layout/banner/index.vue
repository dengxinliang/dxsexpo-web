<template>
    <swiper :options="swiperOption" v-if="isReady">
        <swiperSlide v-for="(item, index) in banners" :key="index">
            <div class="banner-item" :style="{ backgroundImage: 'url(' + item.img_list + ')' }" @click="tapRoute(item)"></div>
        </swiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { banner } from '@/apis/common'
export default {
    components: { swiper, swiperSlide },
    data() {
        return {
            banners: [],
            swiperOption: {
                effect: "cube",
                grabCursor: true,
                cubeEffect: {
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                loop: true,
                direction: 'horizontal',
                pagination: {
                    el: ".swiper-pagination"
                }
            },
            isReady: false
        }
    },
    created() {
        this.devData()
    },
    methods: {
        async devData() {
            const params = {}
            const { code, data } = await banner(params)
            if(code === 0) {
                this.banners = data || []
                this.isReady = true
            }
        },
        tapRoute(item) {
            this.$router.push({
                path: '/exhibition-plan',
                query: {
                    id: item.href
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.banner-item{
    width: 97%;
    height: 446px;
    --shadow-clip-rect: -3px -5px -7px -5px;
    clip-path: inset(var(--shadow-clip-rect));
    background-size: 100% 100%;
}
.swiper-container {
    width: 100%;
    height: 100%;
    
}
.swiper-slide {
    text-align: center;
    
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
}
</style>
<style lang="less">
.swiper-container-3d .swiper-slide-shadow-right{
    background-image: none !important;
}
</style>