<template>
    <div class="amenitiesBlock" v-on:click="test()">
        <ul class="iconBlock" :class="{ 'grey': !wifi}">
            <li><img src="../assets/icon/wifi.svg" alt="wifi"></li>
            <li class="iconString">Wi-Fi</li>
        </ul>
        <ul class="iconBlock" :class="{ 'grey': !phone}">
            <li><img src="../assets/icon/phone.svg" alt="phone"></li>
            <li class="iconString">電話</li>
        </ul>
        <ul class="iconBlock" :class="{ 'grey': !view}">
            <li><img src="../assets/icon/mountain-range.svg" alt="moutainIcon"></li>
            <li class="iconString">漂亮的視野</li>
        </ul>
        <ul class="iconBlock" :class="{ 'grey': !breakfast}">
            <li><img src="../assets/icon/breakfast.svg" alt="breakfast"></li>
            <li class="iconString">早餐</li>
        </ul>
        <ul class="iconBlock" :class="{ 'grey': !aircon}">
            <li><img src="../assets/icon/breeze.svg" alt="aircon"></li>
            <li class="iconString">空調</li>
        </ul>
        <ul class="iconBlock" :class="{ 'grey': !smoke}">
            <li><img src="../assets/icon/no-smoke-symbol.svg" alt="noSmoke"></li>
            <li class="iconString">禁止吸煙</li>
        </ul>
        <ul class="iconBlock" :class="{ 'grey': !minibar}">
            <li><img src="../assets/icon/bar.svg" alt="bar"></li>
            <li class="iconString">Mini Bar</li>
        </ul>
        <ul class="iconBlock" :class="{ 'grey': !frige}">
            <li><img src="../assets/icon/fridge.svg" alt="fridge"></li>
            <li class="iconString">冰箱</li>
        </ul>
        <ul class="iconBlock" :class="{ 'grey': !child}">
            <li><img src="../assets/icon/crawling-baby-silhouette.svg" alt="baby"></li>
            <li class="iconString">適合兒童</li>
        </ul>
        <ul class="iconBlock" :class="{ 'grey': !service}">
            <li><img src="../assets/icon/room_service.svg" alt="room-service"></li>
            <li class="iconString">Room Service</li>
        </ul>
        <ul class="iconBlock" :class="{ 'grey': !sofa}">
            <li><img src="../assets/icon/sofa.svg" alt="sofa"></li>
            <li class="iconString">沙發</li>
        </ul>
        <ul class="iconBlock" :class="{ 'grey': !pets}">
            <li><img src="../assets/icon/dog.svg" alt="pets"></li>
            <li class="iconString">寵物攜帶</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'amenitiesBlock',
    props:{
        roomDetail:{
            type: null,
            default:'',
        }
    },
    data(){
        return{
            "amenities": {},
            "wifi" : {},
            "phone": {},
            "view" : {},
            "breakfast" : {},
            "aircon": {},
            "smoke" : {},
            "minibar": {},
            "frige": {},
            "child": {},
            "service": {},
            "sofa": {},
            "pets": {}
        }
    },
    watch:{
        roomDetail(){
            this.amenities = this.roomDetail.amenities;

            this.wifi = this.amenities['Wi-Fi'],
            this.phone= this.amenities['Television'],
            this.view = this.amenities['Great-View'],
            this.breakfast= this.amenities['Breakfast'],
            this.aircon= this.amenities['Air-conditioner'],
            this.smoke = this.amenities['Smoke-Free'],
            this.minibar= this.amenities['Mini-Bar'],
            this.frige= this.amenities['Refrigerator'],
            this.child= this.amenities['Child-Friendly'],
            this.service= this.amenities['Room-Service'],
            this.sofa= this.amenities['Sofa'],
            this.pets= this.amenities['Pet-Friendly']
        }
    }
}
</script>