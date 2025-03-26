<template>
  <el-menu v-show="isNotMobile" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-message"></i>成本查询
      </template>
      <el-menu-item index="1-1"><router-link to="/labor" style="text-decoration: none;color: inherit">人工成本查询</router-link></el-menu-item>
      <el-menu-item index="1-2"><router-link to="/material" style="text-decoration: none;color: inherit">材料成本查询</router-link></el-menu-item>
      <el-menu-item index="1-3"><router-link to="/proService" style="text-decoration: none;color: inherit">分包成本查询</router-link></el-menu-item>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-notebook-2"></i>文件服务</template>
      <el-menu-item index="2-1"><router-link to="/fileUpload" style="text-decoration: none;color: inherit">上传成本数据</router-link></el-menu-item>
    </el-submenu>
  </el-menu>

</template>

<script>
export default {
  data() {
    return {
      isNotMobile:false,
      activeIndex : '1'
    }
  },
  methods: {

  },
  mounted() {

  }
}
</script>
<style>

</style>