<template>
    <ul class="room_price">
        <li class="priceTitle">NT.{{apiRoominfo.normalDayPrice}}</li>
        <li class="dateString">平日(一~四)</li>
        <li class="priceString">NT.{{apiRoominfo.holidayPrice}}</li>
        <li class="dateString">假日(五~日)</li>
    </ul>
</template>

<script>
export default {
    name: 'roomPrice',
    props: ['apiRoominfo']
}
</script>