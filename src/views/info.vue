<template>
    <div id="app">
        <header>
            <info-header></info-header>
            <room-pic-nav></room-pic-nav>
        </header>
    </div>
</template>

<script>
// Components
import infoHeader from '../components/roomHeader.vue'
import RoomPicNav from '../components/roomPicNav.vue'


export default {
    name: 'info',
    components: {
        infoHeader,
        RoomPicNav,
    },
    created(){
        console.log('Fucking Vue');

        // const roomDetailsAPI = 'https://challenge.thef2e.com/api/thef2e2019/stage6/room/';
        // const token          = 'FYB131amsK8xaJqG19oUZV0ZSezrgUYo6oaNU3dCGQLmkYeLZtPiY0wVj3Np';
        // const config         = { headers: { Authorization: `Bearer ${token}` } };

        let currentId = window.location.hash.slice(2);
        console.log(currentId);

        
    }
}
</script>