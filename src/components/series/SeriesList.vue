<template>
  <div>
    <PageTitle title="系列">
      <SearchBox @onSearch="onSearch($event, inputValue)"/>
    </PageTitle>

    <el-row :gutter="24">
      <el-col :xs="12" :sm="8" :md="8" :lg="8" :xl="4" v-for="series in seriesList" v-bind:key="series">
        <SeriesCard :series="series"/>
      </el-col>
    </el-row>
    <el-container>
      <el-pagination
          small
          background
          layout="prev, pager, next"
          hide-on-single-page="true"
          :current-page="pageNum"
          :total="totalElements"
          :page-size="pageSize"
          @current-change="onPageChange"
          style="margin: 0 auto; padding: 24px 0"/>
    </el-container>
  </div>
</template>
<script>
import SeriesCard from "@/components/series/SeriesCard";
import PageTitle from "@/components/common/PageTitle";
import SearchBox from "@/components/common/SearchBox";

export default {
  name: 'SeriesList',
  components: {
    SeriesCard,
    PageTitle,
    SearchBox
  },
  data() {
    return {
      pageNum: 1,
      pageSize: 24,
      totalElements: 0,
      seriesName: "",
      seriesList: []
    };
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      let pageNum = this.$route.query.pageNum
      this.pageNum = (typeof pageNum) === 'undefined' ? 1 : pageNum
      this.seriesName = this.$route.query.seriesName
      this.getSeriesList()
    },
    onSearch(inputValue) {
      this.seriesName = inputValue
      this.pageNum = 1
      this.getSeriesList()
    },
    onPageChange(pageNum) {
      this.$router.push({path: '/seriesList', query: {pageNum: pageNum, seriesName: this.seriesName}})
    },
    getSeriesList() {
      this.$apis.getSeriesList(this.pageNum, this.pageSize, this.seriesName)
          .then((resp) => {
            this.seriesList = resp.list
            this.totalElements = resp.totalElements
          })
          .catch((error) => {
            console.log(error)
          })
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
