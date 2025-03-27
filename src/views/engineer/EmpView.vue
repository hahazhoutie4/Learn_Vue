<template>
  <div id="tilas">
    <el-container style="height: 700px">
      <!-- head -->
      <el-header style="text-align: left; font-weight: bold;">
        <el-row :gutter="20" style="background-color: rgba(1,1,1,0)">
          <!-- 手机浏览器不显示标题 -->
          <el-col :span="4" v-show="!isNotMobile">
            <div class="grid-content bg-purple"><div>造价师成本库</div></div>
          </el-col>
          <el-col :span="10">
            <div class="grid-content bg-purple">
            <el-menu v-show="isNotMobile" class="el-menu-demo" mode="horizontal" style="background-color: rgba(1,1,1,0);">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-message"></i>成本查询
                </template>
                <el-menu-item index="1-1"><router-link to="/emp/labor"   style="text-decoration: none;color: inherit">人工成本查询</router-link></el-menu-item>
                <el-menu-item index="1-2"><router-link to="/emp/material"  style="text-decoration: none;color: inherit">材料成本查询</router-link></el-menu-item>
                <el-menu-item index="1-3"><router-link to="/emp/proService" style="text-decoration: none;color: inherit">分包成本查询</router-link></el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
          </el-col>
          <el-col :span="10">
          <el-menu v-show="isNotMobile" class="el-menu-demo" mode="horizontal" style="background-color: rgba(1,1,1,0);">
            <div class="grid-content bg-purple">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-notebook-2"></i>文件服务</template>
                <el-menu-item index="2-1"><router-link to="/emp/fileUpload" style="text-decoration: none;color: inherit">上传成本数据</router-link></el-menu-item>
              </el-submenu>
          </div>
          </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <!-- aside -->
         <!-- Git test-->
        <el-aside width="200px" v-show="!isNotMobile">
          <el-menu :default-openeds="['1']" :default-actives="['1-1']">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>成本查询
              </template>
              <el-menu-item index="1-1"><router-link to="/emp/labor" style="text-decoration: none;color: inherit">人工成本查询</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/emp/material" style="text-decoration: none;color: inherit">材料成本查询</router-link></el-menu-item>
              <el-menu-item index="1-3"><router-link to="/emp/proService" style="text-decoration: none;color: inherit">分包成本查询</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-notebook-2"></i>上传模板文件
              </template>
              <el-menu-item index="2-1"><router-link to="/emp/fileUpload" style="text-decoration: none;color: inherit">上传成本数据</router-link></el-menu-item>
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
      isNotMobile:true,
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' }
      ]
    };
  },
  methods: {
    labor(){
      console.log(this.$router)
      this.$router.push({ path: '/emp/labor' })
    },
    material(){
      this.$router.push({ path: '/emp/material' })
    },
    proService(){
      this.$router.push({ path: '/emp/proService' })
    }
  },
  components:{

  },
  mounted() {
    this.isNotMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
};
</script>
<style>
.el-container {
  margin-bottom: 0;
}
.el-header {
  background-color: rgb(21,72,137);
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
  line-height: 40px;
}
.el-main {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 10px;
}
</style>