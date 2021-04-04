<template>
    <div class="loader" :class="{ 'hidden': hide }">
        <div class="duo duo1">
          <div class="dot dot-a"></div>
          <div class="dot dot-b"></div>
        </div>
        <div class="duo duo2">
          <div class="dot dot-a"></div>
          <div class="dot dot-b"></div>
        </div>
    </div>
</template>

<script>
export default {
    name:"loader",
    props:['apiRoominfo'],
    watch:{
        apiRoominfo(){
            this.hide = true;
        }
    },
    data(){
        return{
            hide:{},
        }
    }
}
</script>