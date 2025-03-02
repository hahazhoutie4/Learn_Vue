<template>
  <div id="app">
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    </nav> -->
    <!-- <router-view/> -->
    <!-- <table-view></table-view> -->
    <emp-view/>
    <video src="http://localhost:8070" controls width="500px" height="500px"></video>
  </div>
</template>
<script>
//import TableView from './views/TableView.vue';
import EmpView from './views/tilas/EmpView.vue';
export default {
  components: {  EmpView },
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
</style>
