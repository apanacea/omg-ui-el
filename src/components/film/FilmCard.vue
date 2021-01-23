<template>
  <div>
    <el-card style="margin-bottom: 24px; border-style: none; background-color: black" :body-style="{ padding: '0px' }"
             shadow="never" @click.native="jumpToFilmDetail">

      <!--    <img :src="film.coverUrl">-->
      <el-image
          style="width: 100%; border-radius: 5px"
          :src="film.halfCoverUrl"
          fit="fit">
      </el-image>
      <div style="padding: 5px 0;">
        <p class="omg-film-card-title">
          {{ film.serialNumber }}
        </p>
      </div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'FilmCard',
  components: {},
  props: {
    film: {}
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  methods: {
    jumpToFilmDetail() {
      this.$router.push({path: '/filmDetail', query: {filmId: this.film.id}})
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
  font-size: 16px;
  color: white;
  opacity: 0.65;
}

</style>