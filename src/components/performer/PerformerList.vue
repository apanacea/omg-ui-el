<template>
  <div>
    <el-container style="padding: 50px 0">
      <span style="margin: auto 0; font-size: 28px">演员</span>
      <el-input
          size="small"
          style="width: 200px; margin: auto 0 auto auto"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="fuzzyName"
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
          :current-page="pageNum"
          :total="totalElements"
          page-size="24"
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
    this.$axios.get(this.$urls.selectPerformers + '?pageNum=1&pageSize=24')
        .then((resp) => {
          this.performers = resp.data.list
          this.totalElements = resp.data.totalElements
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      performers: [],
      pageNum: 1,
      totalElements: 0,
      fuzzyName: ""
    };
  },
  methods: {
    onPageChange(pageNum) {
      this.$axios.get(this.$urls.selectPerformers + '?pageNum=' + pageNum + '&pageSize=24&name=' + this.fuzzyName)
          .then((resp) => {
            console.log(resp.data);
            this.performers = resp.data.list
            this.totalElements = resp.data.totalElements
          })
          .catch((error) => {
            console.log(error)
          })
    },
    jumpToPerformerDetail(performerId) {
      this.$router.push({path:'/performer', query: {performerId: performerId}})
    },
    onSearch(value) {
      this.$axios.get(this.$urls.selectPerformers + '?pageNum=1&pageSize=32&name=' + value)
          .then((resp) => {
            console.log(resp.data);
            this.performers = resp.data.list
            this.pageNum = 1
            this.totalElements = resp.data.totalElements
          })
          .catch((error) => {
            console.log(error)
          })
    }
  }
};
</script>
<style></style>
