<template>
    <div class="dialogBlock dialogStyle" :class="{ 'dialogNone': classBool}">
        <div class="dialogBox">

            <h3 class="dialogTitle">預約時段</h3>  
            <li>姓名<input type="text" id="nameInput" class="basicInput inputStyle" value=""></li>
            <li>電話<input type="text" id="phoneNumInput" class="basicInput inputStyle" value=""></li>
            <li>預約起訖
                <input type="text" id='startDate' class="dateInput inputStyle" value="">~
                <input type="text" id='endDate' class="dateInput inputStyle" value="">
            </li>

            <days-count></days-count>
            <price-block></price-block>
            <btn-block></btn-block>

        </div>
    </div>
</template>

<script>
import BtnBlock from './btnBlock.vue'
import daysCount from './daysCount.vue'
import PriceBlock from './priceBlock.vue'

export default {
    name:"dialogBlock",
    props:['dialogBool'],
    components: { 
        daysCount,
        PriceBlock,
        BtnBlock 
    },
    data(){
        return{
            'classBool':{}

        }
    },
    watch:{
        dialogBool(){
            this.classBool = !this.dialogBool
        }
    }
}
</script>