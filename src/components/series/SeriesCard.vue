<template>
  <el-card style="margin-bottom: 24px;" :body-style="{ padding: '0px' }" shadow="hover" @click.native="jumpToSeriesDetail">
    <div style="padding: 8px;">
      <p class="series-card-title"> {{ series.name }} </p>
      <span class="series-card-body"><i class="el-icon-video-camera"/> {{ series.filmCount }} </span>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'SeriesCard',
  components: {},
  props: {
    series: {}
  },
  data() {
    return {};
  },
  methods: {
    jumpToSeriesDetail() {
      this.$router.push({path:'/series', query: {seriesId: this.series.id}})
    },
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