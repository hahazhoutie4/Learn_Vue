<template>
  <div id="tilas">
    <el-container style="height: 700px">
      <!-- head -->
      <el-header style="text-align: left; font-weight: bold"
        >记录学习辅助学习系统</el-header
      >
      <el-container>
        <!-- aside -->
        <el-aside width="200px">
          <el-menu :default-openeds="['1']" @select="selc">
            <el-submenu index="1">
              <template slot="title">
                ><i class="el-icon-message"></i>查询</template
              >
              <!-- <el-menu-item-group title=""> -->
              <!-- <template slot="title">分组一</template> -->
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
              <!-- </el-menu-item-group> -->
              <!-- <el-menu-item-group title="分组2"> -->
              <el-menu-item index="1-3">选项3</el-menu-item>
              <!-- </el-menu-item-group> -->
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"
                ><i class="el-icon-menu"></i>导航二</template
              >
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="2-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"
                ><i class="el-icon-setting"></i>导航三</template
              >
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="3-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="3-4">
                <template slot="title">选项4</template>
                <el-menu-item index="3-4-1">选项4-1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-aside>

        <!-- main -->
        <el-main> </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Header: "hello",
    };
  },
  methods: {
    selc(index, indexpath) {
      alert(index, indexpath);
    },
  },
};
</script>
<style>
.el-container {
  margin-bottom: 40px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>