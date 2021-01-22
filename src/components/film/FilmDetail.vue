<template>
  <div>
    <h1 class="page-title">影片详情</h1>
    <el-row :gutter="24">
      <el-col :span="10">
        <el-image
            style="width: 100%; border-radius: 5px"
            :src="coverUrlToShow"
            fit="fit"/>
      </el-col>
      <el-col :span="14">
        <p class="film-detail-title"> {{ film.title }} </p>
        <p style="padding: 0 4px; margin: 0; font-size: 16px; color: #666666">
          {{ film.serialNumber }}
          <el-divider direction="vertical"/>
          {{ film.manufacturer.name }}
          <el-divider direction="vertical"/>
          {{ film.releaseDateStr }}
        </p>
        <p style="padding: 24px  4px; margin: 0; font-size: 14px; color: #666666">
          {{ film.description }}
        </p>
        <el-tag class="film-tag" type="info" size="small" v-for="tag in film.tags" v-bind:key="tag.id"> {{ tag.name }} </el-tag>
      </el-col>

    </el-row>
    <h1 class="page-title"> 演员列表 </h1>
    <el-row :gutter="24">
      <el-col :xs="4" :sm="4" :md="4" :lg="2" :xl="2" v-for="performer in film.performers" v-bind:key="performer">
        <PerformerCard :performer="performer"/>
      </el-col>
    </el-row>
    <h1 class="page-title"> 磁力链接 </h1>
    <a :href="'http://clg0.biz/search?word=' + film.serialNumber" target="_blank">
      <el-button>磁力狗</el-button>
    </a>
    <a :href="'https://0cili.com/search?q=' + film.serialNumber" target="_blank">
      <el-button>无极磁链</el-button>
    </a>
    <h1 class="page-title"> 电影图集 </h1>
    <ScreenshotList :screenshots="film.screenshots"/>

  </div>
</template>

<script>
import PerformerCard from "@/components/performer/PerformerCard";
import ScreenshotList from "@/components/film/ScreenshotList";


export default {
  name: 'FilmDetail',
  props: {
    filmId: Number
  },
  components: {
    PerformerCard,
    ScreenshotList
  },
  created() {
    this.$axios.get(this.$urls.selectFilmDetail + this.$route.query.filmId)
        .then((resp) => {
          this.film = resp.data
        })
        .catch((error) => {
          console.log(error)
        })
  },
  data() {
    return {
      film: {}
    };
  },
  computed: {
    coverUrlToShow() {
      let w = window.innerWidth
      return w < 992 ? this.film.halfCoverUrl : this.film.coverUrl
    }
  }
};
</script>
<style>
.film-detail-title {
  font-size: 20px;
  margin: 0;
  padding: 0 0 10px 0;
}

.film-tag {
  margin: 0 10px 0 0;
}
</style>