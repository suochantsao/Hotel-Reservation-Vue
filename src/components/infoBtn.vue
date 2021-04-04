<template>
    <li class="reserveBtn" :class="{ 'delAllBtn': btnstr[1]}">
        <span>{{btnstr[0]}}</span>
    </li>
</template>

<script>
export default {
    name:"infoBtn",
    props:['btnstr'],
}
</script>