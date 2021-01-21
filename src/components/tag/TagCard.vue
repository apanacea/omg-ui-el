<template>
  <el-card style="margin-bottom: 24px;" :body-style="{ padding: '0px' }" shadow="hover" @click.native="jumpToTagDetail">
    <div style="padding: 8px;">
      <h3 class="series-card-title"> {{ showName }} </h3>
      <span class="series-card-body"><i class="el-icon-video-camera"/> {{ tag.filmCount }} </span>
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
      this.$router.push({path:'/tag', query: {tagId: this.tag.id}})
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
  padding: 0;
  margin: 0 0 8px 0;
}
.series-card-body {
  font-size: 16px;
}
</style>