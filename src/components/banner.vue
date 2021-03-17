<template>

  <div class="bgImg">
    <h1 class="logo">
      <img src="../assets/icon/logo_white.svg" alt="WhiteSpaceLogo">
    </h1>
  </div>
  
</template>

<script>
export default {
  name: 'indexBanner',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bgImg{
  background-image: url('https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  
}

</style>
