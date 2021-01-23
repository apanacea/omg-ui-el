<template>
  <div style="display: flex; justify-content: center; align-items: center">
    <i class="el-icon-d-arrow-left paging-button" @click="firstPage"></i>
    <i class="el-icon-arrow-left paging-button" @click="prePage"></i>
    <label>
      <input
          ref="input"
          class="paging-input"
          type="text"
          v-model="pageNum"
          @change="onPageChange">
    </label>
    <div style="display: flex; align-items: center">
      <span class="paging-page-num"> {{ totalPage }} </span>
    </div>
    <i class="el-icon-arrow-right paging-button" @click="nextPage"></i>
    <i class="el-icon-d-arrow-right paging-button" @click="lastPage"></i>
  </div>
</template>

<script>
export default {
  name: "Paging",
  props: {
    pageNum: {
      type: Number,
      default: 1
    },
    pageSize: Number,
    totalElements: Number
  },
  methods: {
    firstPage() {
      this.pageNum = 1
      this.onPageChange()
    },
    prePage() {
      this.pageNum = this.pageNum - 1
      this.onPageChange()
    },
    nextPage() {
      this.pageNum = this.parseInt(this.pageNum) + 1
      this.onPageChange()
    },
    lastPage() {
      this.pageNum = this.totalPage
      this.onPageChange()
    },
    onPageChange() {
      if (this.pageNum < 1) {
        this.pageNum = 1
      } else if (this.pageNum > this.totalPage) {
        this.pageNum = this.totalPage
      }
      return this.$emit('on-page-change', this.pageNum)
    },
    parseInt(s) {
      return parseInt(s)
    }
  },
  computed: {
    totalPage() {
      if (typeof this.totalElements === 'number') {
        return Math.max(1, Math.ceil(this.totalElements / this.pageSize));
      } else if (typeof this.pageCount === 'number') {
        return Math.max(1, this.pageCount);
      }
      return null;
    }
  }
}
</script>

<style scoped>

.paging-input {
  text-align: center;
  padding-top: 2px;
  margin: 0 5px;
  width: 40px;
  height: 28px;
  line-height: 28px;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  color: black;
  opacity: 0.85;
  /*background-color: black;*/

}

.paging-page-num {
  color: white;
  text-align: center;
  margin: 0 5px;
  /*padding: 0 5px;*/
  width: 26px;
  border: none;
  outline: none;
  font-size: 16px;
  opacity: 0.85;
}
.paging-button {
  color: white;
  opacity: 0.85;
  margin: 0 5px;
  font-size: 26px;
  font-weight: bold;
  width: 26px;
  height: 26px;
  border: none;
  outline: none;
}
</style>