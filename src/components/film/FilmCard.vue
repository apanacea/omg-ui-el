<template>
  <el-card style="margin-bottom: 24px; border-style: none; background-color: black" :body-style="{ padding: '0px' }" shadow="never" @click.native="jumpToFilmDetail">

<!--    <img :src="film.coverUrl">-->
    <el-image
        style="width: 100%; border-radius: 5px"
        :src="film.coverUrl"
        fit="fit">
    </el-image>
    <div style="padding: 8px 0;">
      <p class="omg-film-card-title">
        {{ film.serialNumber }} {{ film.title }}
      </p>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'FilmCard',
  components: {},
  props: {
    film: {}
  },
  data() {
    return {};
  },
  methods: {
    jumpToFilmDetail() {
      this.$router.push({path:'/filmDetail', query: {filmId: this.film.id}})
    }
  }
};
</script>

<style>

.omg-film-card-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  font-size: 14px;
  color: white;
  opacity: 0.65;
}

</style>