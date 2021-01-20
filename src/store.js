import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state: {
        //存放的键值对就是所要管理的状态
        name: 'helloVueX',
        tagsPageNum: 1,
        filmsPageNum: 1,
        seriesPageNum: 1,
        performersPageNum: 1
    },
    mutations: {
        setTagsPageNum(state, tagsPageNum) {
            state.tagsPageNum = tagsPageNum
        },
        setFilmsPageNum(state, filmsPageNum) {
            state.filmsPageNum = filmsPageNum
        },
        setSeriesPageNum(state, seriesPageNum) {
            state.seriesPageNum = seriesPageNum
        },
        setPerformersPageNum(state, performersPageNum) {
            state.performersPageNum = performersPageNum
        }
    }
})

export default store