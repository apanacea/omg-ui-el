<template>
  <div>
    <PageTitle :title="film.title"></PageTitle>
    <el-row :gutter="24">
      <el-col :span="10">
        <el-image
            style="width: 100%; border-radius: 5px"
            :src="film.coverUrl"
            fit="fit"/>
      </el-col>
      <el-col :span="14">
<!--        <p class="film-detail-title"> {{ film.title }} </p>-->
        <p style="padding: 0 4px; margin: 0; font-size: 18px; color: #666666">
          {{ film.serialNumber }}
          <el-divider direction="vertical"/>
          {{ film.manufacturer.name }}
          <el-divider direction="vertical"/>
          {{ film.releaseDateStr }}
        </p>
        <el-tag v-if="film.series !== null" class="omg-film-tag" size="medium"> {{film.series.name}} </el-tag>
        <p style="padding: 24px  4px; margin: 0; font-size: 14px; color: #666666">
          {{ film.description }}
        </p>
<!--        <el-tag class="film-tag" type="info" size="small" v-for="tag in film.tags" v-bind:key="tag.id"> {{ tag.name }} </el-tag>-->
      </el-col>
    </el-row>
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
  margin: 10px;
}

.omg-magnet-link {
  margin: 0 24px 0 0;
  background-color: #2980b9;
  opacity: 0.6;
  color: white;
}

.omg-magnet-link:hover {
  background-color: #2980b9;
  color: white;
  opacity: 0.4;
}
</style>