<template>
  <div id="app">
    <emp-view/>
  </div>
</template>
<script>
import EmpView from "@/views/engineer/EmpView.vue";
import Axios  from 'axios';
import qs from  'qs';
export default {
  components: {EmpView },
  data(){
    return{
    }
  },
  mounted() {
    Axios.post("http://localhost:8090/api/login",qs.stringify({userName:"zhoutong",password:"jintian123"}),{headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }}).then(res=>{
      let token = res.data.data;
      localStorage.setItem("token",token);
    })
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
</style>
