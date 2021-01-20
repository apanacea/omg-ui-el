import Vue from 'vue'
import App from './App.vue'
import urls from './apis/urls'
import axios from 'axios'
import router from '@/router'
import store from "@/store";

import {
  Container,
  Header,
  Main,
  Menu,
  MenuItem,
  MenuItemGroup,
  Submenu,
  Row,
  Col,
  Card,
  Image,
  Pagination,
  Avatar,
  Divider,
  Tag,
  Button,
  Tooltip,
  Input

} from 'element-ui'
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Image)
Vue.use(Pagination)
Vue.use(Avatar)
Vue.use(Divider)
Vue.use(Tag)
Vue.use(Button)
Vue.use(Tooltip)
Vue.use(Input)


Vue.prototype.$urls = urls
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
  urls,
  axios,
  store,
  router,
  render: h => h(App),
}).$mount('#app')
