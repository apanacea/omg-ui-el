//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用page1页面
import FilmDetail from "@/components/film/FilmDetail";
import FilmList from './components/film/FilmList.vue';
import PerformerList from './components/performer/PerformerList.vue';
import PerformerDetail from "@/components/performer/PerformerDetail";
import PerformerManagePage from './components/manage/performer/PerformerManagePage'
import TagManagePage from "@/components/manage/tag/TagManagePage";

import SeriesList from "@/components/series/SeriesList";
import SeriesDetail from "@/components/series/SeriesDetail";
import TagList from "@/components/tag/TagList";
//定义routes路由的集合，数组类型
const routes=[
    //单个路由均为对象类型，path代表的是路径，component代表组件
    {path:'/',redirect:'films'},

    // {path:'/tag',component:},
    // {path:'/film/:filmId',component:FilmDetailPage},
    {path: '/tags', component: TagList},

    {path:'/film',component:FilmDetail},
    // {path:'/film/:filmId',component:FilmDetailPage},
    {path:'/films',component:FilmList},

    {path:'/performer',component:PerformerDetail},
    {path:'/performers',component:PerformerList},

    {path:'/series',component:SeriesList},
    {path:'/seriesDetail',component:SeriesDetail},

    {path:'/performerManage',component:PerformerManagePage},
    {path:'/tagManage',component:TagManagePage},

]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
    routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router