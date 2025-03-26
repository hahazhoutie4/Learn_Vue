<template>
  <!-- 查询表单 -->
  <div>
    <el-form :inline="true" :model="cost" class="demo-form-inline">
      <el-form-item label="名称">
        <el-input v-model="cost.name" placeholder="输入名称"></el-input>
      </el-form-item>
      <el-form-item label="规格/特征">
        <el-input v-model="cost.sig" placeholder="输入特征"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">查询成本数据</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table
        v-loading="loading"
        :data="materialData"
        style="width: 100%;height: auto">
      <el-table-column
          prop="id"
          label="序号"
          width="60">
      </el-table-column>
      <el-table-column
          prop="costName"
          label="名称"
          width="120">
      </el-table-column>
      <el-table-column
          prop="costSig"
          label="规格/特征"
          width="180">
      </el-table-column>
      <el-table-column
          prop="costUni"
          label="单位"
          width="80">
      </el-table-column>
      <el-table-column
          prop="costCount"
          label="工程量"
          width="80">
      </el-table-column>
      <el-table-column
          prop="costPrice"
          label="单价"
          width="80">
      </el-table-column>
      <el-table-column
          prop="taxRate"
          label="税率"
          width="80">
      </el-table-column>
      <el-table-column
          prop="costContent"
          label="内容"
          width="330">
      </el-table-column>
      <el-table-column
          prop="updateTime"
          label="更新日期">
      </el-table-column>
    </el-table>
    <div></div>
    <!-- 分页 -->
    <el-pagination
        :page-size="10"
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>
<script>
import Axios from 'axios';
import {materialFindAll, materialFindByPage} from "@/views/engineer/async";
var href = window.location.origin;
export default {
  name:"MaterialView",
  data() {
    return {
      cost: {
        name: '',
        sig: ''
      },
      materialData: [],
      total: 20,
      loading : false
    }
  },
  methods: {
    handleCurrentChange(e){
      materialFindByPage(this,e,10);
      console.log(e);
    },
    submit(){
      Axios.get(href+"/api/engineer/materials/findByConditions?"+"costName="+this.cost.name+"&costSig="+this.cost.sig,{headers:{"token":localStorage.getItem("token")}}).then(res=>{
      this.materialData = res.data.data;
      })
    }

  },
  mounted() {
    materialFindAll(this);
  }
}

</script>
<style>


</style>