<template>
  <div>
    <div class="omg-header">
      <img src="../public/omg.png" alt="" style="margin: auto 24px; width: 50px; height: 50px">
      <button class="omg-menu-button" @click="handleSelect('/filmList')">影片</button>
      <button class="omg-menu-button" @click="handleSelect('/seriesList')">系列</button>
      <button class="omg-menu-button" @click="handleSelect('/tagList')">标签</button>
      <button class="omg-menu-button" @click="handleSelect('/performerList')">演员</button>

    </div>
    <div class="omg-body">
      <router-view/>
    </div>
<!--    <div class="omg-footer">-->

<!--    </div>-->
  </div>
<!--  <el-container style="max-width: 1500px; margin: 0 auto;">-->
<!--    <el-header style="padding: 0; margin-bottom: 24px">-->
<!--      <el-container style="margin-top: 20px">-->
<!--        <img src="../public/omg.png" alt="" style="margin: auto 20px; width: 50px; height: 50px">-->
<!--        <el-menu-->
<!--            :default-active="selectedIndex"-->
<!--            style="border-style: none; margin: auto 0"-->
<!--            class="el-menu-demo"-->
<!--            mode="horizontal"-->
<!--            @select="handleSelect">-->
<!--          <el-menu-item index="/filmList">-->
<!--            <span class="omg-menu-item">影片</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="/seriesList">-->
<!--            <span class="omg-menu-item">系列</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="/tagList">-->
<!--            <span class="omg-menu-item">标签</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="/performerList">-->
<!--            <span class="omg-menu-item">演员</span>-->
<!--          </el-menu-item>-->
<!--        </el-menu>-->
<!--      </el-container>-->

<!--    </el-header>-->
<!--    <el-main style="padding: 30px">-->
<!--      <router-view/>-->
<!--    </el-main>-->
<!--  </el-container>-->
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      selectedIndex: "/films",
      optionalIndexes: ["/films", "/series", "/tags", "/performers"]
    }
  },
  watch: {
    $route(to) {
      if (this.optionalIndexes.includes(to.path)) {
        this.selectedIndex=to.path
      }
    }
  },
  methods: {
    handleSelect(s) {
      this.$router.push(s)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.omg-header {
  display: flex;
  margin: 0;
  padding: 0;
  height: 68px;
}

.omg-menu-button {
  color: white;
  opacity: 0.65;
  background-color: black;
  border: none;
  outline: none;
  margin: 0 12px;
  font-size: 16px;
}

.omg-body {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}



.span {
  font-size: 16px;
  color: white;
  opacity: 0.65;
}

.omg-card {
  margin-bottom: 24px;
  height: 70px;
  background-color: #141414;
  border: none
}
</style>
