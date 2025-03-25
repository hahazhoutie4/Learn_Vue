<template>
  <div id="tilas">
    <el-container style="height: 700px">
      <!-- head -->
      <el-header style="text-align: left; font-weight: bold"
        >造价师成本库</el-header>
      <el-container>
        <!-- aside -->
         <!-- Git test-->
        <el-aside width="200px">
          <el-menu :default-openeds="['1']" @select="selc">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>成本查询
              </template>
              <el-menu-item index="1-1"><router-link to="/labor" style="text-decoration: none;color: inherit">人工成本查询</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/material" style="text-decoration: none;color: inherit">材料成本查询</router-link></el-menu-item>
              <el-menu-item index="1-3"><router-link to="/proService" style="text-decoration: none;color: inherit">分包成本查询</router-link></el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <!-- main -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Header: "hello",
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' }
      ]
    };
  },
  methods: {
    selc(index) {

      switch (index) {
        case "1-1":
          console.log("1-1"+"人工成本查询");
          break;
        case "1-2":
          console.log("1-2"+"材料成本查询");
          break;
        case "1-3":
          console.log("1-3"+"分包成本查询");
          break;
      }
    },
  },
  components:{
  }
};
</script>
<style>
.el-header{
  background-color: rgb(0,0,0);
}
.el-container {
  margin-bottom: 40px;
}
.el-header {
  background-color: RGB(21,72,137);
  opacity: 70%;
  border-radius: 4px;
  color: white;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  border-radius: 12px;
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 10px;
}
</style>