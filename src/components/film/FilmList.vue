<template>
  <div>
    <PageTitle title="影片">
      <SearchBox @onSearch="onSearch($event, inputValue)"  @onSelectorShow="onSelectorShow($event)">
      </SearchBox>
    </PageTitle>
    <FilmSelector :show="show"></FilmSelector>
    <el-row :gutter="24">
      <el-col :xs="12" :sm="6" :md="4" :lg="4" :xl="4" v-for="film in films" v-bind:key="film.id">
        <FilmCard :film="film"/>
      </el-col>
    </el-row>
<!--    <el-container>-->
<!--      <el-pagination-->
<!--          background-->
<!--          layout="prev, pager, next"-->
<!--          hide-on-single-page="true"-->
<!--          :current-page="pageNum"-->
<!--          :total="totalElements"-->
<!--          :page-size="pageSize"-->
<!--          @current-change="onPageChange"-->
<!--          style="margin: 0 auto; padding: 24px 0;"/>-->
<!--    </el-container>-->
    <Paging :page-size="pageSize" :page-num="pageNum" :total-elements="totalElements" @on-page-change="onPageChange"></Paging>

  </div>
</template>
<script>
import FilmCard from "@/components/film/FilmCard";
import PageTitle from "@/components/common/PageTitle";
import SearchBox from "@/components/common/SearchBox";
import FilmSelector from "@/components/film/FilmSelector";
import Paging from "@/components/common/Paging";

export default {
  name: 'FilmList',
  components: {
    Paging,
    FilmSelector,
    SearchBox,
    PageTitle,
    FilmCard
  },
  data() {
    return {
      films: [],
      pageNum: 1,
      pageSize: 24,
      totalElements: 0,
      serialNumber: '',
      show: false
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
    onSelectorShow() {
      console.log('onSelectorShow')
      this.show = !this.show
      console.log(this.show)
    },
    onSearch(inputValue) {
      this.serialNumber = inputValue
      this.pageNum = 1
      this.getFilmList()
    },
    onPageChange(pageNum) {
      this.$router.push({path: '/filmList', query: {pageNum: pageNum, serialNumber: this.serialNumber}})
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
  },
  watch: {
    $route() {
      this.init()
    }
  }
};
</script>
<style></style>
