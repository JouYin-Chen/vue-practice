<script>
    //es6
  export default {
    el: "#app",
     data () {
      return {
          msg:"Hello world",
      }
    }
  }
</script>

<template>
  <h1 class="red">{{msg}}</h1>
</template>

<style>
.red {
  color: #f00;
}
</style>
