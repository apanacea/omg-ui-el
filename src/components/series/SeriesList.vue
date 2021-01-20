<template>
  <div>
    <el-container style="padding: 50px 0">
      <span style="margin: auto 0; font-size: 28px">系列</span>
      <el-input
          size="small"
          style="width: 200px; margin: auto 0 auto auto"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="fuzzyName"
          @change="onSearch">
      </el-input>
    </el-container>

    <el-row :gutter="24">
      <el-col :xs="8" :sm="6" :md="6" :lg="8" :xl="4" v-for="series in seriesList" v-bind:key="series">
        <SeriesCard :series="series"/>
      </el-col>
    </el-row>
    <el-container>
      <el-pagination
          background
          layout="prev, pager, next"
          hide-on-single-page="true"
          :current-page="pageNum"
          :total="totalElements"
          page-size="24"
          @current-change="onPageChange"
          style="margin: 0 auto; padding: 24px 0"/>
    </el-container>
  </div>
</template>
<script>
import SeriesCard from "@/components/series/SeriesCard";

export default {
  name: 'SeriesList',
  components: {
    SeriesCard
  },
  created() {
    this.$axios.get(this.$urls.fuzzySearchSeries + '?pageNum=1&pageSize=24')
        .then((resp) => {
          this.seriesList = resp.data.list
          this.totalElements = resp.data.totalElements
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      seriesList: [],
      pageNum: 1,
      totalElements: 0,
      fuzzyName: ""
    };
  },
  methods: {
    onPageChange(pageNum) {
      this.$axios.get(this.$urls.fuzzySearchSeries + '?pageNum=' + pageNum + '&pageSize=24&name=' + this.fuzzyName)
          .then((resp) => {
            this.seriesList = resp.data.list
            this.totalElements = resp.data.totalElements
          })
          .catch((error) => {
            console.log(error)
          })
    },
    onSearch() {
      this.$axios.get(this.$urls.fuzzySearchSeries + '?pageNum=1&pageSize=24&name=' + this.fuzzyName)
          .then((resp) => {
            this.seriesList = resp.data.list
            this.totalElements = resp.data.totalElements
          })
          .catch((error) => {
            console.log(error)
          })
    },
    jumpToSeriesDetail(seriesId) {
      this.$router.push({path:'/seriesDetail', query: {seriesId: seriesId}})
    }
  }
};
</script>
<style></style>
