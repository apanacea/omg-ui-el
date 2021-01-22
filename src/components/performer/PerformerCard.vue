<template>
<!--  <el-card style="margin-bottom: 24px; border-style: none" :body-style="{ padding: '0px' }" shadow="never" @click.native="jumpToPerformerDetail">-->
<!--    <el-image-->
<!--        style="width: 100%; border-radius: 5px"-->
<!--        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"-->
<!--        fit="fit"/>-->
<!--    <div style="padding: 8px 0; text-align: center; font-size: 14px">-->
<!--      <span> {{ showName }} </span>-->
<!--    </div>-->
<!--  </el-card>-->
  <el-card style="margin-bottom: 24px; height: 70px" :body-style="{ padding: '0px' }" shadow="hover" @click.native="jumpToPerformerDetail">
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
      this.$router.push({path:'/performer', query: {performerId: this.performer.id}})
    },
  },
  computed: {
    showName() {
      return this.performer.nameZh === null ? this.performer.name : this.performer.nameZh
    }
  }
};
</script>