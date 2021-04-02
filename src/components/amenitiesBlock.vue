<template>
    <div class="amenitiesBlock" v-on:click="test()">
        <ul class="iconBlock ${!amenityItems['Wi-Fi'] ? 'grey' : ''}">
            <li><img src="../assets/icon/wifi.svg" alt="wifi"></li>
            <li class="iconString">Wi-Fi</li>
        </ul>
        <ul class="iconBlock ${!amenityItems['Television'] ? 'grey' : ''}">
            <li><img src="../assets/icon/phone.svg" alt="phone"></li>
            <li class="iconString">電話</li>
        </ul>
        <ul class="iconBlock ${!amenityItems['Great-View'] ? 'grey' : ''}">
            <li><img src="../assets/icon/mountain-range.svg" alt="moutainIcon"></li>
            <li class="iconString">漂亮的視野</li>
        </ul>
        <ul class="iconBlock ${!amenityItems['Breakfast'] ? 'grey' : ''}">
            <li><img src="../assets/icon/breakfast.svg" alt="breakfast"></li>
            <li class="iconString">早餐</li>
        </ul>
        <ul class="iconBlock ${!amenityItems['Air-Conditioner'] ? 'grey' : ''}">
            <li><img src="../assets/icon/breeze.svg" alt="aircon"></li>
            <li class="iconString">空調</li>
        </ul>
        <ul class="iconBlock ${!amenityItems['Smoke-Free'] ? 'grey' : ''}">
            <li><img src="../assets/icon/no-smoke-symbol.svg" alt="noSmoke"></li>
            <li class="iconString">禁止吸煙</li>
        </ul>
        <ul class="iconBlock">
            <li><img src="../assets/icon/bar.svg" alt="bar"></li>
            <li class="iconString">Mini Bar</li>
        </ul>
        <ul class="iconBlock ${!amenityItems['Refrigerator'] ? 'grey' : ''}">
            <li><img src="../assets/icon/fridge.svg" alt="fridge"></li>
            <li class="iconString">冰箱</li>
        </ul>
        <ul class="iconBlock ${!amenityItems['Child-Friendly'] ? 'grey' : ''}">
            <li><img src="../assets/icon/crawling-baby-silhouette.svg" alt="baby"></li>
            <li class="iconString">適合兒童</li>
        </ul>
        <ul class="iconBlock ${!amenityItems['Room-Service'] ? 'grey' : ''}">
            <li><img src="../assets/icon/room_service.svg" alt="room-service"></li>
            <li class="iconString">Room Service</li>
        </ul>
        <ul class="iconBlock ${!amenityItems['Sofa'] ? 'grey' : ''}">
            <li><img src="../assets/icon/sofa.svg" alt="sofa"></li>
            <li class="iconString">沙發</li>
        </ul>
        <ul class="iconBlock ${!amenityItems['Pet-Friendly'] ? 'grey' : ''}">
            <li><img src="../assets/icon/dog.svg" alt="pets"></li>
            <li class="iconString">寵物攜帶</li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'amenitiesBlock',
    props:['roomDetail'],
    data(){
        return{
            "amenities": {}
        }
    },
    created(){
        // this.amenities = this.roomDetail;
        console.log(this.roomDetail);
        // return{
        //     wifi : this.roomDetail.amenities['Wi-Fi'],
        //     phone: this.roomDetail.amenities.Television,
        //     view : this.roomDetail.amenities['Great-View'],
        //     breakfast: this.roomDetail.amenities.Breakfast,
        //     aircon: this.roomDetail.amenities['Air-conditioner'],
        //     smoke : this.roomDetail.amenities['Smoke-Free'],
        //     minibar: this.roomDetail.amenities['Mini-Bar'],
        //     frige: this.roomDetail.amenities.Refrigerator,
        //     child: this.roomDetail.amenities['Child-Friendly'],
        //     service: this.roomDetail.amenities['Room-Service'],
        //     sofa: this.roomDetail.amenities.Sofa,
        //     pets: this.roomDetail.amenities['Pet-Friendly']
        // }
    },
    methods:{
        
        test(){
            console.log(this.roomDetail);
        }
        
    }
}
</script>