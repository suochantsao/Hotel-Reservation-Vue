<template>
    <div id="app">
        <header @click="test">
            <info-header></info-header>
            <room-pic-nav :api-roominfo="roomInfo" ></room-pic-nav>
        </header>

        <div class="room_content">
            <room-detail :api-roominfo="roomInfo"></room-detail>
            <room-price  :api-roominfo="roomInfo"></room-price>
            <calendar-block @classbool="addClass"></calendar-block>
        </div>

        <loader :apiRoominfo="roomInfo"></loader>

        <dialog-block :dialogBool="dialogClass"></dialog-block>

    </div>
</template>

<script>
// Components
import infoHeader from '../components/roomHeader.vue'
import RoomPicNav from '../components/roomPicNav.vue'
import RoomDetail from '../components/roomDetail.vue'
import RoomPrice from '../components/roomPrice.vue'
import CalendarBlock from '../components/calendarBlock.vue'
import Loader from '../components/loader.vue'
import dialogBlock from '../components/dialogBlock.vue'


export default {
    name: 'info',
    components: {
        infoHeader,
        RoomPicNav,
        RoomDetail,
        RoomPrice,
        CalendarBlock,
        Loader,
        dialogBlock
    },
    methods:{
        addClass(dialogBool){
            this.dialogClass = dialogBool;
        },
        test(){
            console.log(this);
        }
    },
    data(){
        return{
            "roomInfo": {},
            "dialogClass": {}
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

        console.log(this);
    }
}
</script>