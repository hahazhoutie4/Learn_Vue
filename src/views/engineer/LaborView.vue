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
      :data="tableData"
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
        :pager-count="11"
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
import Axios from 'axios';
import {laborFindByPage} from "@/views/engineer/async";
import {laborFindAll,login} from "@/views/engineer/async";
var href = window.location.origin;
export default {
  data() {
      return {
        tableData:[{
          id: 1,
          cost_name: 'cost_name',
          cost_sig: 'cost_sig',
          cost_count: 'cost_count',
          cost_price: 'cost_price',
          tax_rate: 'tax_rate',
          cost_content: 'cost_content'
        }],
        cost: {
          name: '',
          sig: ''
        },
        total: 20,
        loading : false
    }
  },
  methods: {
    submit() {
      console.log('submit!');
      console.log(localStorage.getItem("token"));
      Axios.get(href+"/api/engineer/labors",{headers:{"token":localStorage.getItem("token")}}).
      then(res=>{
        console.log(res.data);
      }).catch(err=>{
        console.log(err);
      })
    },
    handleCurrentChange(e){
      laborFindByPage(this,e,10);
      console.log(e);
    }
  },
  mounted() {
    login();
    laborFindAll(this);
  }
}
</script>
<style>
.el-table{
  display: block;
  text-align: center;

}
.el-container{
  display: flex;
}
.el-form{
  display: flex;
}
.el-table-column{
  height: 20px;
  text-align: center;
}
</style>