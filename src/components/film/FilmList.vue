<template>
  <div>
    <el-container style="padding: 50px 0">
      <span style="margin: auto 0; font-size: 28px">影片</span>
      <el-input
          size="small"
          style="width: 200px; margin: auto 0 auto auto"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="input2">
      </el-input>
    </el-container>
    <el-row :gutter="24">
      <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="6" v-for="film in films" v-bind:key="film.id">
        <FilmCard :film="film"/>
      </el-col>
    </el-row>
    <el-container>
      <el-pagination
          background
          layout="prev, pager, next"
          :current-page="pageNum"
          :total="totalElements"
          page-size="16"
          @current-change="onPageChange"
          style="margin: 0 auto; padding: 24px 0"/>
    </el-container>

  </div>
</template>
<script>
import FilmCard from "@/components/film/FilmCard";

export default {
  name: 'FilmList',
  components: {
    FilmCard
  },
  data() {
    return {
      films: [],
      pageNum: 1,
      totalElements: 1,
      optionalTags: [],
      selectedTag: null,
      optionalSeries: [],
      selectedSeriesId: null
    }
  },
  created() {
    this.$axios.get(this.$urls.selectFilms + '?pageNum=' + this.pageNum + '&pageSize=16&sortBy=releaseDate&sortType=desc')
        .then((resp) => {
          this.totalElements = resp.data.totalElements
          this.films = resp.data.list
        })
        .catch((error) => {
          console.log(error)
        })
  },
  methods: {
    onPageChange(pageNum) {
      this.pageNum = pageNum
      this.$axios.get(this.$urls.selectFilms + '?pageNum=' + this.pageNum + '&pageSize=16&sortBy=releaseDate&sortType=desc')
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
<style></style>
