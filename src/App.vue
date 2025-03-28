<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data(){
    return{
    }
  },
  mounted() {
    console.log("App.vue mounted");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
div#app{
  width: 100%;
  height: 695px;
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
  background-color: rgba(0,0,0,1);
  background-repeat: no-repeat;
}
body{
  margin: 0px;
}
</style>
