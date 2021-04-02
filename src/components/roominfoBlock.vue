<template>
    <div class="roomInfoBlock">
        <h2 class="room_title">{{roomDetail.name}}</h2>
        <li>房客人數限制： {{roomDetail.descriptionShort.GuestMin}}~{{roomDetail.descriptionShort.GuestMax}} 人</li>
        <li>床型：{{roomDetail.descriptionShort.Bed["0"]}}</li>
        <li>衛浴數量： {{roomDetail.descriptionShort['Private-Bath']}} 間</li>    
        <li>房間大小： {{roomDetail.descriptionShort.Footage}} 平方公尺</li>
        <li class="en_roominfo">{{roomDetail.description}}</li>
    </div>
</template>

<script>
export default {
    name:'roominfoBlock',
    props:['roomDetail']
}
</script>