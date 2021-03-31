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

  },
  data(){
    return{
      eachRoomInfo : []
    }
  },
  created(){
    console.log('John Doe');
    console.log('MDFK');

    const allRoomsAPI = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';
    const token       = 'FYB131amsK8xaJqG19oUZV0ZSezrgUYo6oaNU3dCGQLmkYeLZtPiY0wVj3Np';
    const config      = { headers: { Authorization: `Bearer ${token}` } };
    const that        = this;

    this.$http
      .get(allRoomsAPI, config)
      .then( res =>{
        that._data.eachRoominfo = res.data.items;
        console.log(that._data.eachRoominfo);
      })
      .catch( err => {console.log(err)});

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
