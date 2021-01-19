<template>
  <el-tooltip :content="series.name" placement="top" open-delay="1000">
    <el-card style="margin-bottom: 24px;" :body-style="{ padding: '0px' }" shadow="hover">
      <div style="padding: 8px;">
        <p class="series-card-title"> {{ series.name }} </p>
        <span class="series-card-body"><i class="el-icon-video-camera"/> {{ series.filmCount }} </span>
      </div>
    </el-card>
  </el-tooltip>
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