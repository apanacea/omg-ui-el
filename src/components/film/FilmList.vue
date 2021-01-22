<template>
  <div>
    <el-container style="padding: 50px 0">
      <span style="margin: auto auto auto 0; font-size: 28px">影片</span>
      <el-input
          size="small"
          style="width: 120px; margin: auto 0;"
          placeholder="查询番号"
          prefix-icon="el-icon-search"
          v-model="serialNumber"
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
          small
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

export default {
  name: 'FilmList',
  components: {
    FilmCard
  },
  data() {
    return {
      films: [],
      pageNum: 1,
      pageSize: 12,
      totalElements: 0,
      serialNumber: ''
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      let pageNum = this.$route.query.pageNum
      this.pageNum = (typeof pageNum) === 'undefined' ? 1 : pageNum
      this.serialNumber = this.$route.query.serialNumber
      this.getFilmList()
    },
    onSearch() {
      this.pageNum = 1
      this.getFilmList()
    },
    onPageChange(pageNum) {
      this.$router.push({path: '/films', query: {pageNum: pageNum, serialNumber: this.serialNumber}})
    },
    getFilmList() {
      this.$apis.getFilmList(this.pageNum, this.pageSize, this.serialNumber)
          .then((resp) => {
            this.totalElements = resp.totalElements
            this.films = resp.list
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
  },
  watch: {
    $route() {
      this.init()
    }
  }
};
</script>
<style></style>
