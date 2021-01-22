<template>
  <el-container style="max-width: 1500px; margin: 0 auto">
    <el-header style="padding: 0; margin-bottom: 50px">
      <el-container>
        <span style="font-style: italic; font-weight: bold; font-size: 30px; margin: 20px auto 10px auto; color: #666666">OH MY GIRL</span>
      </el-container>
      <el-container>
        <el-menu
            :default-active="selectedIndex"
            style="border-style: none; margin: auto"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect">
          <el-menu-item index="/films">
            <span :style="selectedIndex === '/films' ? 'font-size: large' : ''">影片</span>
          </el-menu-item>
          <el-menu-item index="/series">
            <span :style="selectedIndex === '/series' ? 'font-size: large' : ''">系列</span>
          </el-menu-item>
          <el-menu-item index="/tags">
            <span :style="selectedIndex === '/tags' ? 'font-size: large' : ''">标签</span>
          </el-menu-item>
          <el-menu-item index="/performers">
            <span :style="selectedIndex === '/performers' ? 'font-size: large' : ''">演员</span>
          </el-menu-item>
        </el-menu>
      </el-container>

    </el-header>
    <el-main style="padding: 30px">
      <router-view/>
    </el-main>
  </el-container>
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

.page-title {
  margin: 0;
  padding: 50px 0;
  color: black;
}

.omg-menu-item {
  font-size: x-large;
}
</style>
