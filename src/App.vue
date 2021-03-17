<template>

  <div id="app">
    <index-banner msg="White Space"/>
  </div>

</template>


<script>

import indexBanner from './components/banner.vue'

export default {
  name: 'App',
  components: {
    indexBanner
  }
}

</script>


<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  border: 1px solid pink;
}

</style>
