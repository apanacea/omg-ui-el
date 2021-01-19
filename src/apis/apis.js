import http from './requests'
import urls from './urls'
// import { formatUrl } from '../../common/utils'
// 这个东西是unsplash要求加在header里的验证，有兴趣的同学可以去看他的api，此处不再赘述

const header = {
    'Authorization': 'Client-ID xxxxxxx'
}

export default {
    viewPhotos (params) {
        // return出去了一个promise
        return http.get(urls.photos, params, header)
    },
    selectPerformers() {
        return http.get(urls.selectPerformers, null, header)
    }
}