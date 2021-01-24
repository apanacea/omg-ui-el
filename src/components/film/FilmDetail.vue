<template>
  <div>
    <PageTitle :title="film.title"></PageTitle>
    <div style="display: flex; justify-content: center; padding: 24px 0">
      <img :src="film.coverUrl" :alt="film.title" style="width: 100%; max-width: 800px; border-radius: 5px;">
    </div>
    <div style="padding-top: 24px">
      <p style="padding: 0 4px; margin: 0; font-size: 20px; color: white; opacity: 0.85">
        {{ film.serialNumber }}
        <el-divider direction="vertical"/>
        {{ film.manufacturer.name }}
        <el-divider direction="vertical"/>
        {{ film.releaseDateStr }}
      </p>
      <el-tag v-if="film.series !== null" class="omg-film-tag" size="medium"> {{film.series.name}} </el-tag>
      <p style="padding: 24px  4px; margin: 0; font-size: 16px; color: white; opacity: 0.65">
        {{ film.description }}
      </p>
    </div>

    <PageTitle title="标签列表"></PageTitle>
<!--    <h1 class="page-title"> 标签列表 </h1>-->
    <el-row :gutter="24">
      <el-col :xs="8" :sm="8" :md="6" :lg="3" :xl="3" v-for="tag in film.tags" v-bind:key="tag">
        <TagCard :tag="tag"/>
      </el-col>
    </el-row>
    <PageTitle title="演员列表"></PageTitle>
    <el-row :gutter="24">
      <el-col :xs="8" :sm="8" :md="6" :lg="3" :xl="3" v-for="performer in film.performers" v-bind:key="performer">
        <PerformerCard :performer="performer"/>
      </el-col>
    </el-row>
    <PageTitle title="磁力链接"></PageTitle>
    <a :href="'http://clg0.biz/search?word=' + film.serialNumber" target="_blank">
      <el-button class="omg-magnet-link">磁力狗</el-button>
    </a>
    <a :href="'https://0cili.com/search?q=' + film.serialNumber" target="_blank">
      <el-button class="omg-magnet-link">无极磁链</el-button>
    </a>
    <PageTitle title="影片图集"></PageTitle>
    <ScreenshotList :screenshots="film.screenshots"/>

  </div>
</template>

<script>
import PerformerCard from "@/components/performer/PerformerCard";
import ScreenshotList from "@/components/film/ScreenshotList";
import TagCard from "@/components/tag/TagCard";
import PageTitle from "@/components/common/PageTitle";


export default {
  name: 'FilmDetail',
  props: {
    filmId: Number
  },
  components: {
    PageTitle,
    TagCard,
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
  }
};
</script>
<style>

.film-detail-title {
  font-size: 22px;
  margin: 0;
  padding: 0 0 10px 0;
  color: white;
  opacity: 0.85;
}

.omg-film-tag {
  color: #666666;
  margin-top: 24px;
  margin-left: 5px;
}

.omg-magnet-link {
  border: none;
  margin: 0 24px 0 0;
  background-color: #141414;
  opacity: 0.65;
  color: white;
}
</style>