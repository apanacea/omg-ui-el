<template>
  <div>
    <PageTitle title="标签">
      <div class="omg-search-box" slot="default">
        <i class="el-icon-search" style="color: #666666; margin: 0 2px"></i>
        <label>
          <input class="omg-search-box-input" type="text" v-model="tagName" @change="onSearch">
        </label>
      </div>
    </PageTitle>

    <el-row :gutter="24">
      <el-col :xs="8" :sm="8" :md="6" :lg="4" :xl="4" v-for="tag in tags" v-bind:key="tag">
        <TagCard :tag="tag"/>
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
import TagCard from "@/components/tag/TagCard";
import PageTitle from "@/components/common/PageTitle";

export default {
  name: 'TagList',
  components: {
    TagCard,
    PageTitle
  },
  data() {
    return {
      tags: [],
      pageNum: 1,
      pageSize: 48,
      totalElements: 0,
      tagName: ""
    };
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      let pageNum = this.$route.query.pageNum
      this.pageNum = (typeof pageNum) === 'undefined' ? 1 : pageNum
      this.tagName = this.$route.query.tagName
      this.getTagList()
    },
    onSearch() {
      this.pageNum = 1
      this.getTagList()
    },
    onPageChange(pageNum) {
      this.pageNum = pageNum
      this.getTagList()
    },
    onWatchRoute() {
      let pageNum = this.$route.query.pageNum
      if (typeof pageNum === 'undefined') {
        this.$router.push({path: '/tagList', query: {pageNum: '1'}})
      }
    },
    getTagList() {
      this.$apis.getTagList(this.pageNum, this.pageSize, this.tagName)
          .then((resp) => {
            this.tags = resp.list
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
