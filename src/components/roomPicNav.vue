<template>
    <ul class="pictureBlock">
        <li class="detail_pic1 room_picture" :style="{'background-image': 'url('+apiRoominfo.imageUrl[0]+')'}" ></li>
        <div class="s_pic">
            <li class="detail_pic2 room_picture" :style="{'background-image': 'url('+apiRoominfo.imageUrl[1]+')'}"></li>
            <li class="detail_pic3 room_picture" :style="{'background-image': 'url('+apiRoominfo.imageUrl[2]+')'}"></li>
        </div>
    </ul>
</template>

<script>
export default {
    name: 'RoomPicNav',
    props:["apiRoominfo"]
}
</script>

// 這邊報錯說無法找到陣列中的0.1.2為何(undefined)?
// 但是結果有跑出來?

