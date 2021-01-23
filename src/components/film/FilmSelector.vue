<template>
  <div>
    <el-button @click="show = !show" style="margin-bottom: 24px">筛选</el-button>
    <div v-if="show" style="margin-bottom: 24px; margin-left: 24px">
      <div style="margin-bottom: 18px">
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
      </div>
      <div style="margin-bottom: 18px">
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
        <a style="margin-right: 24px">武侠</a>
      </div>
      <div style="margin-bottom: 18px">
        <a style="margin-right: 24px" v-for="manufacturer in optionalManufacturerList" v-bind:key="manufacturer"> {{ manufacturer.name }} </a>
      </div>
    </div>



  </div>
</template>

<script>
export default {
  name: "FilmSelector",
  data() {
    return {
      show: false,
      selectedTagIndex: 0,
      optionalTagList: [],
      selectedSeriesIndex: 0,
      optionalSeriesList: [],
      selectedPerformerIndex: 0,
      optionalPerformerList: [],
      selectedManufacturerIndex: 0,
      optionalManufacturerList: []
    }
  }
}
</script>

<style scoped>

</style>