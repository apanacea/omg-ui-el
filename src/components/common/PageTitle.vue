<template>
  <div style="display: flex; justify-content: space-between; align-items: center; margin: 24px 0;">
    <span style="font-size: 28px; color: white; opacity: 0.85"> {{ title }} </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    title: String
  }
}
</script>

<style scoped>

</style>