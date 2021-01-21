import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state: {
        //存放的键值对就是所要管理的状态
        name: 'helloVueX',
        tagListPageNum: 1,
        filmListPageNum: 1,
        seriesListPageNum: 1,
        performerListPageNum: 1,
        filmDetailPageNum: 1,
        seriesDetailPageNum: 1,
        performerDetailPageNum: 1
    },
    mutations: {
        setTagListPageNum(state, tagsListPageNum) {
            state.tagListPageNum = tagsListPageNum
        },
        setSeriesListPageNum(state, seriesPageNum) {
            state.seriesPageNum = seriesPageNum
        },
        setPerformerListPageNum(state, performersPageNum) {
            state.performersPageNum = performersPageNum
        },
        setTagDetailPageNum(state, filmsPageNum) {
            state.filmsPageNum = filmsPageNum
        },
        setSeriesDetailPageNum(state, seriesPageNum) {
            state.seriesPageNum = seriesPageNum
        },
        setPerformerDetailPageNum(state, performersPageNum) {
            state.performersPageNum = performersPageNum
        }
    }
})

export default store