<template>
  <div>
    <PageTitle :title="performer.name"></PageTitle>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="6" v-for="film in films" v-bind:key="film.id">
        <FilmCard :film="film"/>
      </el-col>
    </el-row>
    <el-container>
      <el-pagination
          background
          layout="prev, pager, next"
          hide-on-single-page="true"
          :current-page="this.$store.state.filmsPageNum"
          :total="totalElements"
          page-size="12"
          @current-change="onPageChange"
          style="margin: 0 auto; padding: 24px 0"/>
    </el-container>
  </div>
</template>

<script>

import FilmCard from "@/components/film/FilmCard";
import PageTitle from "@/components/common/PageTitle";

export default {
  name: 'PerformerDetail',
  components: {
    PageTitle,
    FilmCard
  },
  created() {
    let performerId = this.$route.query.performerId
    // 获取演员的信息
    this.$axios.get(this.$urls.selectPerformer + performerId)
        .then((resp) => {
          console.log(resp.data);
          this.performer = resp.data
        })
        .catch((error) => {
          console.log(error)
        })
    // 获取演员关联的电影列表
    this.$axios.get(this.$urls.selectPerformer + performerId + '/films?pageNum=' + this.pageNum + '&pageSize=12&sortBy=releaseDate&sortType=desc')
        .then((resp) => {
          console.log(resp.data);
          this.totalElements = resp.data.totalElements
          this.films = resp.data.list
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      pageNum: 1,
      totalElements: 1,
      performer: {},
      films: []
    };
  },
  methods: {
    onPageChange(pageNum) {
      this.$axios.get(this.$urls.selectPerformer + this.performer.id + '/films?pageNum=' + pageNum + '&pageSize=12&sortBy=releaseDate&sortType=desc')
          .then((resp) => {
            this.totalElements = resp.data.totalElements
            this.films = resp.data.list
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
};
</script>