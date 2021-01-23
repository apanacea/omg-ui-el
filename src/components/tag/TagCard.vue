<template>
  <el-card style="margin-bottom: 24px; height: 70px" :body-style="{ padding: '0px' }" shadow="hover" @click.native="jumpToTagDetail">
    <div style="padding: 8px;">
      <p class="series-card-title"> {{ showName }} </p>
      <div class="series-card-body" style="text-align: right; font-size: 24px; color: #F56C6C">
        <span> {{ tag.filmCount }} </span>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'TagCard',
  components: {},
  props: {
    tag: {}
  },
  data() {
    return {};
  },
  methods: {
    jumpToTagDetail() {
      this.$router.push({path:'/tagDetail', query: {tagId: this.tag.id}})
    },
  },
  computed: {
    showName() {
      return this.tag.nameZh === null ? this.tag.name : this.tag.nameZh
    }
  }
};
</script>

<style>
.series-card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  padding: 0;
  margin: 0 0 8px 0;
}
.series-card-body {
  font-size: 16px;
}
</style>