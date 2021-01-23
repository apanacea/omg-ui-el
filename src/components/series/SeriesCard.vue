<template>
  <el-card class="omg-card" :body-style="{ padding: '0px' }" shadow="hover" @click.native="jumpToSeriesDetail">
    <div style="padding: 8px;">
      <p class="series-card-title"> {{ showName }} </p>
      <div class="series-card-body" style="text-align: right; font-size: 24px; color: #F56C6C">
        <span> {{ series.filmCount }} </span>
      </div>

    </div>
  </el-card>
</template>

<script>
export default {
  name: 'SeriesCard',
  components: {},
  props: {
    series: {
      name: null,
      nameZh: null,
      filmCount: 0
    }
  },
  data() {
    return {};
  },
  methods: {
    jumpToSeriesDetail() {
      this.$router.push({path:'/seriesDetail', query: {seriesId: this.series.id}})
    },
  },
  computed: {
    showName() {
      return this.series.nameZh === null ? this.series.name : this.series.nameZh
    }
  }
};
</script>

<style>
.series-card-title {
  color: white;
  opacity: 0.65;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  padding: 0;
  margin: 0 0 8px 0;
}
</style>