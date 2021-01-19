<template>
  <div>
    <h1>{{ series.name }}</h1>
    <a-list :grid="{ gutter: 24, xs: 1, sm: 2, md: 4, lg: 4, xl: 4, xxl: 4}" :data-source="films">
      <a-list-item slot="renderItem" slot-scope="item" style="padding-bottom: 10px" @click="jumpToFilmDetail(item.id)">
        <FilmCard :id="item.id" :title="item.title" :serialNumber="item.serialNumber" :coverUrl="item.coverUrl"/>
      </a-list-item>
    </a-list>
    <a-pagination simple pageSize="8" :default-current="pageNum" :total="totalElements" @change="onChange"/>
  </div>
</template>

<script>

import FilmCard from "@/components/film/FilmCard";

export default {
  name: 'SeriesDetail',

  props: {
    // performerId: Number
  },
  components: {
    FilmCard
  },
  created() {
    this.$axios.get(this.$urls.selectSeries + this.$route.query.seriesId)
        .then((resp) => {
          console.log(resp.data)
          this.series = resp.data
        })
        .catch((error) => {
          console.log(error)
        })
    this.$axios.get(this.$urls.selectSeries + this.$route.query.seriesId +'/films?pageNum=' + this.pageNum + '&pageSize=8')
        .then((resp) => {
          console.log(resp.data);
          this.totalElements=resp.data.totalElements
          this.films = resp.data.list
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      series: {},
      pageNum: 1,
      totalElements: 1,
      films: []
    };
  },
  methods: {
    onChange(pageNum) {
      console.log(pageNum)
      this.$axios.get(this.$urls.selectSeries + this.series.id +'/films?pageNum=' + pageNum + '&pageSize=8')
          .then((resp) => {
            console.log(resp.data);
            this.totalElements=resp.data.totalElements
            this.films = resp.data.list
          })
          .catch((error) => {
            console.log(error)
          })
    },
    jumpToFilmDetail(filmId) {
      this.$router.push({path:'/film', query: {filmId: filmId}})
    }
  }
};
</script>