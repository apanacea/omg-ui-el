<template>
  <el-card style="margin-bottom: 24px; border-style: none" :body-style="{ padding: '0px' }" shadow="never" @click.native="jumpToPerformerDetail">
    <el-image
        style="width: 100%; border-radius: 5px"
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        fit="fit"/>
    <div style="padding: 8px 0; text-align: center; font-size: 14px">
      <span> {{ showName }} </span>
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