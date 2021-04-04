<template>
    <ul class="calendarBlock">

        <li class="calendar">
            <input type="text" id="calendar-zhtw">
        </li>

        <info-btn :btnstr="confirmStr" @click.native="dialogRender"></info-btn>
        <info-btn :btnstr="cancleStr" @click.native="haha"></info-btn>

    </ul>
</template>

<script>
import infoBtn from './infoBtn.vue'
export default {
    name:"calendarBlock",
    components: { 
        infoBtn 
    },
    methods:{
        dialogRender(){
            this.dialogBool = true;
            // console.log(this);
            this.$emit('classbool',this.dialogBool);

        },
        haha(){
            console.log(this);
        }
    },
    data(){
        return{
            "confirmStr": ['預約時段', false],
            "cancleStr": ['取消預約',true],
            "dialogBool": {}
        }
    }
}
</script>