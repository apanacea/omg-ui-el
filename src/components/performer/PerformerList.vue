<template>
  <div>
    <el-container style="padding: 50px 0">
      <span style="margin: auto 0; font-size: 28px">演员</span>
      <el-input
          size="small"
          style="width: 200px; margin: auto 0 auto auto"
          placeholder="根据名字查询"
          prefix-icon="el-icon-search"
          v-model="performerName"
          @change="onSearch">
      </el-input>
    </el-container>

    <el-row :gutter="32">
      <el-col :xs="8" :sm="6" :md="6" :lg="3" :xl="3" v-for="performer in performers" v-bind:key="performer">
        <PerformerCard :performer="performer"/>
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
import PerformerCard from './PerformerCard.vue';

export default {
  name: 'PerformerList',
  components: {
    PerformerCard
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
    onSearch() {
      this.pageNum = 1
      this.getPerformerList()
    },
    onPageChange(pageNum) {
      this.$router.push({path: '/performers', query: {pageNum: pageNum, performerName: this.performerName}})
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
