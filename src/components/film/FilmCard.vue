<template>
  <el-card style="margin-bottom: 24px; border-style: none" :body-style="{ padding: '0px' }" shadow="never" @click.native="jumpToFilmDetail">

<!--    <img :src="film.coverUrl">-->
    <el-image
        style="width: 100%; border-radius: 5px"
        :src="film.coverUrl"
        fit="fit">
      <div slot="placeholder" class="image-slot">
        加载中<span class="dot">...</span>
      </div>
    </el-image>
    <div style="padding: 8px 0;">
      <p style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin: 0; font-size: 14px; color: #666666">{{ film.title }}</p>
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
      console.log('click')
      this.$router.push({path:'/film', query: {filmId: this.film.id}})
    }
  }
};
</script>