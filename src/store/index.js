import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isPx: true,
        exhibitionInfo: {}
    },
    mutations: {
        getWindowPc(state, value) {
            state.isPx = value
        },
        getExhibitionInfo(state, value) {
            state.exhibitionInfo = value
        }
    }
})