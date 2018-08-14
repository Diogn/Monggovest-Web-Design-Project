<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>

</template>

<script>
export default {
  name: 'app',

}
</script>

<style>
#app {
  font-family: 'AkzidenzGrotesk-Regular' ,'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 18px;
  padding-top: 66px;
}
@font-face{
    font-family: 'AkzidenzGrotesk-Regular';
    src: url("./assets/AkzidenzGrotesk-Regular.otf");
}
</style>
