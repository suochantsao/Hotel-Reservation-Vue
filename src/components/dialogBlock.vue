<template>
    <div class="dialogBlock" :class="renderObj">
        <div class="dialogBox">

            <h3 class="dialogTitle">預約時段</h3>  
            <li>姓名<input type="text" id="nameInput" class="basicInput inputStyle" value=""></li>
            <li>電話<input type="text" id="phoneNumInput" class="basicInput inputStyle" value=""></li>
            <li>預約起訖
                <input type="text" id='startDate' class="dateInput inputStyle" value="">~
                <input type="text" id='endDate' class="dateInput inputStyle" value="">
            </li>

            <div class="countArea"></div>

            <li class="priceArea"></li>

            <div class="btnBlock">
                <li class="cancleBtn btnStyle"><span class="cancleSpan">取消</span></li>
                <li class="confirmBtn btnStyle"><span>確定預約</span></li>    
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:"dialogBlock",
    data(){
        return{
            renderObj:{
                'dialogStyle': false,
                'dialogNone': false
            }
        }
    }
}
</script>