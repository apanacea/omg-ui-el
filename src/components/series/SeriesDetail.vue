<template>
  <div>
<!--    <el-container style="padding: 50px 0">-->
<!--      <span style="margin: auto 0; font-size: 28px"> {{ series.name }} </span>-->
<!--    </el-container>-->
    <PageTitle :title="series.name"></PageTitle>
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
          :current-page="pageNum"
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
  name: 'SeriesDetail',

  props: {
    // performerId: Number
  },
  components: {
    PageTitle,
    FilmCard
  },
  created() {
    let seriesId = this.$route.query.seriesId
    this.$axios.get(this.$urls.selectSeries + seriesId)
        .then((resp) => {
          this.series = resp.data
        })
        .catch((error) => {
          console.log(error)
        })
    this.$axios.get(this.$urls.selectSeries + seriesId +'/films?pageNum=' + this.pageNum + '&pageSize=12&sortBy=releaseDate&sortType=desc')
        .then((resp) => {
          this.totalElements=resp.data.totalElements
          this.films = resp.data.list
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      series: {},
      pageNum: 1,
      totalElements: 1,
      films: []
    };
  },
  methods: {
    onPageChange(pageNum) {
      console.log(pageNum)
      this.$axios.get(this.$urls.selectSeries + this.series.id +'/films?pageNum=' + pageNum + '&pageSize=12&sortBy=releaseDate&sortType=desc')
          .then((resp) => {
            this.totalElements=resp.data.totalElements
            this.films = resp.data.list
          })
          .catch((error) => {
            console.log(error)
          })
    },
  }
};
</script>