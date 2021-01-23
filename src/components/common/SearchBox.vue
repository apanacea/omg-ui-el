<template>
  <div class="omg-search-box" slot="default">
    <label v-show="show" >
      <input
          ref="input"
          class="omg-search-box-input"
          type="text"
          v-model="inputValue"
          @change="onSearch"
          @blur="show = inputValue!==''">
    </label>
    <i class="el-icon-search" style="color: white; opacity: 0.65; margin-left: 15px; font-size: 26px; font-weight: bold"
       @click="onClick"></i>
    <i class="el-icon-collection-tag" style="color: white; opacity: 0.65; margin-left: 15px; font-size: 26px; font-weight: bold"
       @click="onSelectorShow"></i>
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
    onClick() {
      this.show = !this.show
      if (this.show) {
        this.$nextTick(() => {
          this.$refs.input.focus()
        });
      }
    },
    onSearch() {
      return this.$emit('onSearch', this.inputValue)
    },
    onSelectorShow() {
      console.log('sub')
      return this.$emit('onSelectorShow')
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
  padding: 0 5px;
}

.omg-search-box-input {
  padding-left: 5px;
  width: 120px;
  height: 26px;
  border: none;
  outline: none;
  font-size: 14px;
  border-radius: 5px;
  color: #666666;
  background-color: white;
  opacity: 0.85;
}

</style>