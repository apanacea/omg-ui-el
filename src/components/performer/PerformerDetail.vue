<template>
  <div>
    <a-row :gutter="24" style="padding-bottom: 50px">
      <a-col :span="4">
        <a-card>
          <img
              slot="cover"
              alt="example"
              :src="performer.avatarUrl === '' ? performer.avatarUrl : 'https://justneo-omg.oss-cn-beijing.aliyuncs.com/performer-avatar/3df471bd3d88e1120ea2b0363981424b.jpeg'"
          />
        </a-card>
      </a-col>
      <a-col :span="20">
        <h1 style="margin: 0"> {{ performer.name }} </h1>
        <h3> {{ performer.nameZh }} </h3>
        <p> 评级：{{ performer.level }} </p>
        <p> 收录作品数量：{{ performer.filmCount }} </p>
      </a-col>
    </a-row>
    <a-divider orientation="left">
      收录作品
    </a-divider>
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
  name: 'PerformerDetail',

  props: {
    // performerId: Number
  },
  components: {
    FilmCard
  },
  created() {
    this.$axios.get(this.$urls.selectPerformer + this.$route.query.performerId)
        .then((resp) => {
          console.log(resp.data);
          this.performer = resp.data
        })
        .catch((error) => {
          console.log(error)
        })
    this.$axios.get(this.$urls.selectPerformer + this.$route.query.performerId +'/films?pageNum=' + this.pageNum + '&pageSize=8')
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
      pageNum: 1,
      totalElements: 1,
      performer: {},
      films: []
    };
  },
  methods: {
    onChange(pageNum) {
      this.$axios.get(this.$urls.selectPerformer + this.performer.id +'/films?pageNum=' + pageNum)
          .then((resp) => {
            this.totalElements = resp.data.totalElements
            this.films = resp.data.list
            console.log("change");
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