<template>
  <div>
    <PageTitle title="演员">
      <SearchBox @onSearch="onSearch($event, inputValue)"/>
    </PageTitle>

    <el-row :gutter="32">
      <el-col :xs="8" :sm="8" :md="6" :lg="3" :xl="3" v-for="performer in performers" v-bind:key="performer">
        <PerformerCard :performer="performer"/>
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
import PerformerCard from './PerformerCard.vue';
import PageTitle from "@/components/common/PageTitle";
import SearchBox from "@/components/common/SearchBox";

export default {
  name: 'PerformerList',
  components: {
    PerformerCard,
    PageTitle,
    SearchBox
  },
  created() {
    this.init()
  },
  data() {
    return {
      pageNum: 1,
      pageSize: 24,
      totalElements: 0,
      performerName: "",
      performers: []
    };
  },
  methods: {
    init() {
      let pageNum = this.$route.query.pageNum
      this.pageNum = (typeof pageNum) === 'undefined' ? 1 : pageNum
      this.performerName = this.$route.query.performerName
      this.getPerformerList()
    },
    onSearch(inputValue) {
      this.performerName = inputValue
      this.pageNum = 1
      this.getPerformerList()
    },
    onPageChange(pageNum) {
      this.$router.push({path: '/performerList', query: {pageNum: pageNum, performerName: this.performerName}})
    },
    getPerformerList() {
      this.$apis.getPerformerList(this.pageNum, this.pageSize, this.performerName)
          .then(resp => {
            this.totalElements = resp.totalElements
            this.performers = resp.list
          })
          .catch(error => {
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
