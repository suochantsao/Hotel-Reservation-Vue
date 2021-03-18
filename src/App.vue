<template>

  <div id="app">

    <div class="bgImg">
        <div class="headInfo">
          <index-header></index-header>
          <index-info></index-info>
          <contact-info></contact-info>
        </div>
    </div>

    <div class="content">
      <room-block></room-block>
      <room-block></room-block>
      <room-block></room-block>
      <room-block></room-block>
      <room-block></room-block>
      <room-block></room-block>
    </div>

  </div>

</template>


<script>

// Components
import indexHeader from './components/header.vue'
import indexInfo   from './components/headerInfo.vue'
import contactInfo from './components/contactInfo.vue'
import roomBlock   from './components/roomBlock.vue'

export default {
  name: 'App',
  components: {
    indexHeader,
    indexInfo,
    contactInfo,
    roomBlock

  }
}

</script>


<style>
/* SCSS */
@import "../css/main.min.css";

#app {
  margin: 0 auto;
  /* background-color: lightgrey; */
  /* border: 1px solid pink; */
}

</style>
