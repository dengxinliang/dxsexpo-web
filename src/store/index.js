import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        exhibitionInfo: {}
    },
    mutations: {
        getExhibitionInfo(state, value) {
            state.exhibitionInfo = value
        }
    }
})