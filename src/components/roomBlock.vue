<template>

    <div class="content">
        <ul class="roomItem" v-for="item in eachRoomInfo" :key="item.name"> 
            <router-link :to="{path:'/'+item.id}">
                <li class="roomPicture" :id="item.id" :style="{'background-image': 'url('+item.imageUrl+')'}"></li>
                <li class="roomDescribe" :id="item.id">{{item.name}}</li>
            </router-link>
        </ul>
    </div>

</template>


<script>

export default {
    name: 'roomBlock',
    // props: {
    //     id: {
    //         type: String,
    //         required: true
    //     }
    // },
    data(){
        return{
            "eachRoomInfo": [],
        }
    },
    created(){
        console.log('John Doe');

        const allRoomsAPI = 'https://challenge.thef2e.com/api/thef2e2019/stage6/rooms';
        const token       = 'FYB131amsK8xaJqG19oUZV0ZSezrgUYo6oaNU3dCGQLmkYeLZtPiY0wVj3Np';
        const config      = { headers: { Authorization: `Bearer ${token}` } };
        const that        = this;

        this.$http
        .get(allRoomsAPI, config)
        .then( res =>{
            that.eachRoomInfo = res.data.items;
            // that.eachRoomPic  = res.data.items;
            console.log(res);
            console.log(that.eachRoomInfo);
        })
        .catch( err => {console.log(err)});

    }
    
}

</script>

<style>


</style>