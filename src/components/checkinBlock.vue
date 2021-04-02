<template>
    <div class="checkInBlock">
        <li class="checkTitle">Check In</li>
        <li class="checkTitle">Check Out</li>
        <li class="checkInTime timeStyle">{{roomDetail.checkInAndOut.checkInEarly}} － {{roomDetail.checkInAndOut.checkInLate}} </li>
        <li class="checkOutTime timeStyle">{{roomDetail.checkInAndOut.checkOut}}</li>
    </div>
</template>

<script>
export default {
    name:'checkinBlock',
    props:['roomDetail']
}
</script>