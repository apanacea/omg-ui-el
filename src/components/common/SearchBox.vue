<template>
  <div class="omg-search-box" slot="default">
    <label v-show="show">
      <input class="omg-search-box-input" type="text"
             v-model="inputValue"
             @change="onSearch"
             @blur="show = inputValue!==''">
    </label>
    <i class="el-icon-search" style="color: white; opacity: 0.65; margin-left: 10px; font-size: 26px; font-weight: bold"
       @click="show = !show"></i>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      inputValue: '',
      show: false
    }
  },
  // props: {
  //   value: String
  // },
  methods: {
    onSearch() {
      console.log(this.inputValue)
      return this.$emit('onSearch', this.inputValue)
    }
  }
}
</script>

<style scoped>

.omg-search-box {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 150px;
  height: 30px;
  border: none;
  outline: none;
  /*background-color: white;*/
  border-radius: 8px;
  padding: 0 5px;
}

.omg-search-box-input {
  width: 120px;
  height: 26px;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 3px;
  /*color: #666666;*/
  /*background-color: white;*/
}

</style>