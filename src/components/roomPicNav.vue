<template>
    <ul class="pictureBlock">
        <li class="detail_pic1 room_picture" style="background-image: url('${roomInfo.imageUrl[2]}');" ></li>
        <div class="s_pic">
            <li class="detail_pic2 room_picture" style="background-image: url('${roomInfo.imageUrl[1]}');"></li>
            <li class="detail_pic3 room_picture" style="background-image: url('${roomInfo.imageUrl[0]}');"></li>
        </div>
    </ul>
</template>

<script>
export default {
    name: 'RoomPicNav'
}
</script>