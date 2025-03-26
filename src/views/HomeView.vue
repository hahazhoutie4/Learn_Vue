<template>
  <div class="home">
    <span style="font-size: 40px;line-height: 120px">造价成本主页</span>
    <div><router-link to="/labor"><strong>人工成本</strong></router-link></div>
    <div><router-link to="/material"><strong>材料成本</strong>
      </router-link></div>
    <div><router-link to="/proService"><strong>分包成本</strong></router-link></div>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
<style>
div{
  line-height: 22px;
}
.router-link{
  text-decoration: none;
}
</style>