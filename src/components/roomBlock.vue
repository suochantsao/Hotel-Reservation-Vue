<template>
    
    <ul class="roomItem" v-on:click="test">
        <li class="singlePicture roomPicture"></li>
        <li class="roomDescribe">Single Room</li>
    </ul>

</template>


<script>
import eachRoomData from '../App'

export default {
    name: 'roomBlock',
    methods: {
        test(){
            console.log(eachRoomData.data().eachRoomInfo);
        }
    }
    
}

</script>

<style>


</style>