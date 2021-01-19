<template>
  <el-container>
    <el-header style="padding: 0 100px">
      <el-container>
        <el-menu
            :default-active="selectedIndex"
            style="border-style: none; margin: auto;"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect">
          <el-menu-item index="/films">
            <span :style="selectedIndex === '/films' ? 'font-size: large' : ''">电影</span>
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
    <el-main style="padding: 30px 100px">
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
</style>
