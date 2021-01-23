// const baseUrl = 'http://localhost:8080'
const baseUrl = 'http://62.234.10.88/api'

export default {

    getFilmDetail: baseUrl + '/film/{}',
    getTagDetail: baseUrl + '/tag/{}',
    getSeriesDetail: baseUrl + '/series/{}',
    getPerformerDetail: baseUrl + '/performer/{}',

    getFilmList: baseUrl + '/films',
    getFilmListByPerformerId: baseUrl + '/performer/{}/films',
    getFilmListBySeriesId: baseUrl + '/series/{}/films',
    getFilmListByTagId: baseUrl + '/tag/{}/films',

    getPerformerList: baseUrl + '/performers',
    getSeriesList: baseUrl + '/seriesList',
    getTagList: baseUrl + '/tags',

    // 图片列表
    photos: baseUrl + '/photos',

    // 查询演员列表
    selectPerformers: baseUrl + '/performers',
    selectAllPerformers: baseUrl + '/allPerformers',
    selectPerformer: baseUrl + '/performer/',
    // 添加演员
    createPerformer: baseUrl + '/performer',
    updatePerformer: baseUrl + '/performer',
    // 删除演员
    deletePerformer: baseUrl + '/performer/',

    selectFilm: baseUrl + '/film/',
    selectFilmDetail: baseUrl + '/filmDetail/',
    selectFilms: baseUrl + '/films',

    // 查询演员列表
    selectTag: baseUrl + '/tag/',
    selectTags: baseUrl + '/tags',
    // 添加演员
    createTag: baseUrl + '/tag',
    // 删除演员
    deleteTag: baseUrl + '/tag/',

    selectSeries: baseUrl + '/series/',
    fuzzySearchSeries: baseUrl + '/seriesList',
    selectAllSeries: baseUrl + '/allSeries',

    uploadPerformerAvatar: baseUrl + '/upload/performerAvatar',
}