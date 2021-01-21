<template>
  <el-card style="margin-bottom: 24px; border-style: none" :body-style="{ padding: '0px' }" shadow="never" @click.native="jumpToFilmDetail">

<!--    <img :src="film.coverUrl">-->
    <el-image
        style="width: 100%; border-radius: 5px"
        :src="film.coverUrl"
        fit="fit">
<!--      <div slot="placeholder" class="image-slot">-->
<!--        <div style="width: 800px; height: 538px; background-color: white">-->
<!--&lt;!&ndash;          <span style="margin: auto">加载中...</span>&ndash;&gt;-->
<!--          <el-image-->
<!--              style="width: 100%; border-radius: 5px"-->
<!--              src="https://justneo-omg.oss-cn-beijing.aliyuncs.com/film-cover/background.jpeg"-->
<!--              fit="fit"/>-->
<!--        </div>-->
<!--      </div>-->
    </el-image>
    <div style="padding: 8px 0;">
      <p style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin: 0; font-size: 14px; color: #666666">
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
      console.log('click')
      this.$router.push({path:'/film', query: {filmId: this.film.id}})
    }
  }
};
</script>