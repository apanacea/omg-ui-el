<template>
  <el-card class="omg-card" :body-style="{ padding: '0px' }" shadow="hover" @click.native="jumpToPerformerDetail">
    <div style="padding: 8px;">
      <p class="series-card-title"> {{ showName }} </p>
      <div class="series-card-body" style="text-align: right; font-size: 24px; color: #F56C6C">
        <span> {{ performer.filmCount }} </span>
      </div>

    </div>
  </el-card>
</template>

<script>
export default {
  name: 'PerformerCard',
  components: {},
  props: {
    performer: {}
  },
  data() {
    return {};
  },
  methods: {
    jumpToPerformerDetail() {
      this.$router.push({path:'/performerDetail', query: {performerId: this.performer.id}})
    },
  },
  computed: {
    showName() {
      return this.performer.nameZh === null ? this.performer.name : this.performer.nameZh
    }
  }
};
</script>