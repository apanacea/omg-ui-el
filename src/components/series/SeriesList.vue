<template>
  <div>
    <el-container style="padding: 50px 0">
      <span style="margin: auto 0; font-size: 28px">系列</span>
      <el-input
          size="small"
          style="width: 200px; margin: auto 0 auto auto"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="seriesName"
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
          :page-size="pageSize"
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
    onSearch() {
      this.pageNum = 1
      this.getSeriesList()
    },
    onPageChange(pageNum) {
      this.$router.push({path: '/series', query: {pageNum: pageNum, seriesName: this.seriesName}})
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
