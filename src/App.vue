<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
.page {
  min-height: 100vh;

  .full-width {
    min-height: calc(100vh - 32px);
  }
}
</style>
