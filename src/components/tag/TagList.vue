<template>
  <div>
    <el-container style="padding: 50px 0">
      <span style="margin: auto 0; font-size: 28px">标签</span>
      <el-input
          size="small"
          style="width: 200px; margin: auto 0 auto auto"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          v-model="fuzzyName"
          @change="onChange">
      </el-input>
    </el-container>

    <el-row :gutter="24">
      <el-col :xs="8" :sm="6" :md="6" :lg="4" :xl="4" v-for="tag in tags" v-bind:key="tag">
        <TagCard :tag="tag"/>
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
import TagCard from "@/components/tag/TagCard";

export default {
  name: 'TagList',
  components: {
    TagCard
  },
  created() {
    this.$axios.get(this.$urls.selectTags + '?pageNum=1&pageSize=24')
        .then((resp) => {
          this.tags = resp.data.list
          this.totalElements = resp.data.totalElements
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      tags: [],
      pageNum: 1,
      totalElements: 0,
      fuzzyName: ""
    };
  },
  methods: {
    onPageChange(pageNum) {
      this.$axios.get(this.$urls.selectTags + '?pageNum=' + pageNum + '&pageSize=24&name=' + this.fuzzyName)
          .then((resp) => {
            this.tags = resp.data.list
            this.totalElements = resp.data.totalElements
          })
          .catch((error) => {
            console.log(error)
          })
    },
    onChange() {
      this.$axios.get(this.$urls.selectTags + '?pageNum=1&pageSize=24&name=' + this.fuzzyName)
          .then((resp) => {
            this.tags = resp.data.list
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
