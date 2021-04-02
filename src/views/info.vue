<template>
    <div id="app">
        <header>
            <info-header></info-header>
            <room-pic-nav :api-roominfo="roomInfo" ></room-pic-nav>
        </header>

        <div class="room_content">
            <room-detail :api-roominfo="roomInfo"></room-detail>
        </div>
    </div>
</template>

<script>
// Components
import infoHeader from '../components/roomHeader.vue'
import RoomPicNav from '../components/roomPicNav.vue'
import RoomDetail from '../components/roomDetail.vue'


export default {
    name: 'info',
    components: {
        infoHeader,
        RoomPicNav,
        RoomDetail,
    },
    data(){
        return{
            "roomInfo": {}
        }
    },
    created(){
        console.log('Fucking Vue');

        const roomDetailsAPI = 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/';
        const token          = 'FYB131amsK8xaJqG19oUZV0ZSezrgUYo6oaNU3dCGQLmkYeLZtPiY0wVj3Np';
        const config         = { headers: { Authorization: `Bearer ${token}` } };

        let currentId = window.location.hash.slice(2);
        console.log(currentId);

        this.$http
          .get(roomDetailsAPI+currentId,config)
          .then(res => {
              this.roomInfo = res.data.room[0];
              console.log(this.roomInfo);
          })
          .catch(console.error());


    }
}
</script>