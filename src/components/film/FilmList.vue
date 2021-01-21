<template>
  <div>
    <el-container style="padding: 50px 0">
      <span style="margin: auto auto auto 0; font-size: 28px">影片</span>
      <el-input
          size="small"
          style="width: 200px; margin: auto 0"
          placeholder="根据番号查询"
          prefix-icon="el-icon-search"
          v-model="fuzzySerialNumber"
          @change="onSearch">
      </el-input>
    </el-container>
    <el-row :gutter="24">
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

export default {
  name: 'FilmList',
  components: {
    FilmCard
  },
  data() {
    return {
      films: [],
      totalElements: 1,
      fuzzySerialNumber: ''
    }
  },
  created() {
    let pageNum = this.$store.state.filmsPageNum
    this.$axios.get(this.$urls.selectFilms + '?pageNum=' + pageNum + '&pageSize=12&sortBy=releaseDate&sortType=desc')
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

      this.$axios.get(this.$urls.selectFilms + '?pageNum=' + pageNum + '&pageSize=12&sortBy=releaseDate&sortType=desc')
          .then((resp) => {
            this.$store.commit('setFilmsPageNum', pageNum)
            this.totalElements = resp.data.totalElements
            this.films = resp.data.list
          })
          .catch((error) => {
            console.log(error)
          })
    },
    onSearch(value) {
      this.$axios.get(this.$urls.selectFilms + '?pageNum=1&pageSize=12&serialNumber=' + value)
          .then((resp) => {
            this.$store.commit('setFilmsPageNum', 1)
            this.films = resp.data.list
            this.totalElements = resp.data.totalElements
          })
          .catch((error) => {
            console.log(error)
          })
    }
  },
  computed: {
    filmsPageNum() {
      return this.$store.state.filmsPageNum
    }
  }
};
</script>
<style></style>
