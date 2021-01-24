<template>
  <div>
    <div class="omg-header">
      <img src="../public/omg.png" alt="" style="margin: auto 24px; width: 50px; height: 50px">
      <button class="omg-menu-button" @click="handleSelect('/filmList', 1)" :style="selectedIndex === 1 ? 'opacity: 0.85' : 'font-weight: lighter'">影片</button>
      <button class="omg-menu-button" @click="handleSelect('/seriesList', 2)" :style="selectedIndex === 2 ? 'opacity: 0.85' : 'font-weight: lighter'">系列</button>
      <button class="omg-menu-button" @click="handleSelect('/tagList', 3)" :style="selectedIndex === 3 ? 'opacity: 0.85' : 'font-weight: lighter'">标签</button>
      <button class="omg-menu-button" @click="handleSelect('/performerList', 4)" :style="selectedIndex === 4 ? 'opacity: 0.85' : 'font-weight: lighter'">演员</button>
    </div>
    <div class="omg-body">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      selectedIndex: 1,
      optionalIndexes: ["film", "series", "tag", "performer"]
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
    handleSelect(s, index) {
      this.selectedIndex = index
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
  margin: 0 5px;
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
