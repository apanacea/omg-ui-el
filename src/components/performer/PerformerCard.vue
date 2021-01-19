<template>
  <el-card style="margin-bottom: 24px; border-style: none" :body-style="{ padding: '0px' }" shadow="never">
    <el-image
        style="width: 100%; border-radius: 5px"
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        fit="fit"/>
    <div style="padding: 8px 0; text-align: center; font-size: 14px">
      <span v-if="performer.nameZh !== null"> {{ performer.nameZh }} </span>
      <span v-else> {{ performer.name }} </span>
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
};
</script>