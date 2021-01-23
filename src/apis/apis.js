import http from './requests'
import urls from './urls'
// import { formatUrl } from '../../common/utils'
// 这个东西是unsplash要求加在header里的验证，有兴趣的同学可以去看他的api，此处不再赘述

// const header = {
//     'Authorization': 'Client-ID xxxxxxx'
// }

const ID = '{}'

export default {

    getFilmDetail(filmId) {
        let url = urls.getFilmDetail.replace(ID, filmId)
        return http.get(url)
    },

    getTagDetail(tagId) {
        let url = urls.getTagDetail.replace(ID, tagId)
        return http.get(url)
    },

    getSeriesDetail(seriesId) {
        let url = urls.getSeriesDetail.replace(ID, seriesId)
        return http.get(url)
    },

    getPerformerDetail(performerId) {
        let url = urls.getPerformerDetail.replace(ID, performerId)
        return http.get(url)
    },

    getFilmList(pageNum, pageSize, serialNumber) {
        let params = {
            'pageNum': pageNum,
            'pageSize': pageSize,
            'sortBy': 'releaseDate',
            'sortType': 'desc',
            'serialNumber': serialNumber
        }
        let url = urls.selectFilms
        return http.get(url, params)
    },

    getFilmListByPerformerId(pageNum, pageSize, performerId) {
        let params = {
            'pageNum': pageNum,
            'pageSize': pageSize,
            'sortBy': 'releaseDate',
            'sortType': 'desc'
        }
        let url = urls.getFilmListByPerformerId.replace(ID, performerId)
        return http.get(url, params)
    },

    getFilmListBySeriesId(pageNum, pageSize, seriesId) {
        let params = {
            'pageNum': pageNum,
            'pageSize': pageSize,
            'sortBy': 'releaseDate',
            'sortType': 'desc'
        }
        let url = urls.getFilmListBySeriesId.replace(ID, seriesId)
        return http.get(url, params)
    },

    getFilmListByTagId(pageNum, pageSize, tagId) {
        let params = {
            'pageNum': pageNum,
            'pageSize': pageSize,
            'sortBy': 'releaseDate',
            'sortType': 'desc'
        }
        let url = urls.getFilmListByTagId.replace(ID, tagId)
        return http.get(url, params)
    },

    getPerformerList(pageNum, pageSize, performerName) {
        let params = {
            'pageNum': pageNum,
            'pageSize': pageSize,
            'sortBy': 'filmCount',
            'sortType': 'desc',
            'name': performerName
        }
        return http.get(urls.getPerformerList, params)
    },

    getSeriesList(pageNum, pageSize, sortBy, sortType, seriesName) {
        let params = {
            'pageNum': pageNum,
            'pageSize': pageSize,
            'sortBy': 'filmCount',
            'sortType': 'desc',
            'name': seriesName
        }
        return http.get(urls.getSeriesList, params)
    },

    getTagList(pageNum, pageSize, sortBy, sortType, tagName) {
        let params = {
            'pageNum': pageNum,
            'pageSize': pageSize,
            'sortBy': 'filmCount',
            'sortType': 'desc',
            'name': tagName
        }
        return http.get(urls.getTagList, params)
    }
}