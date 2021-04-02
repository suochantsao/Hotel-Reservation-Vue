<template>
    <ul class="room_detail">
        <roominfo-block :roomDetail="apiRoominfo"></roominfo-block>
        <checkin-block :roomDetail="apiRoominfo"></checkin-block>
        <amenities-block :roomDetail="apiRoominfo"></amenities-block>
    </ul>
</template>

<script>
import roominfoBlock from './roominfoBlock.vue'
import checkinBlock from './checkinBlock.vue'
import AmenitiesBlock from './amenitiesBlock.vue'

export default {
    name: 'roomDetail',
    props:['apiRoominfo'],
    components: { 
        roominfoBlock, 
        checkinBlock, 
        AmenitiesBlock 
    },
}
</script>