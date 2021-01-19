<template>
  <el-row :gutter="24">
    <el-col :xs="8" :sm="6" :md="6" :lg="6" :xl="6" v-for="screenshot in screenshots" v-bind:key="screenshot.id">
      <el-image
          style="height: 300px; margin: 0; padding-bottom: 24px;"
          :src="screenshot.url"
          :preview-src-list="[screenshot.url]"
          fit="cover"/>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'ScreenshotList',
  components: {},
  props: {
    screenshots: []
  },
  created() {
  },
  data() {
    return {
      screenshotUrls: []
    };
  },
};
</script>