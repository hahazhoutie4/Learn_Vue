<template>
  <!-- 查询表单 -->
  <div>
    <el-form :inline="true" :model="cost" class="demo-form-inline">
      <el-form-item label="名称">
        <el-input v-model="cost.name" placeholder="输入模糊名称"></el-input>
      </el-form-item>
      <el-form-item label="规格/特征">
        <el-input v-model="cost.sig" placeholder="特征"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">查询成本数据</el-button>
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table
        :data="tableData"
        border=true
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
        :pager-count="page_count"
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  name:"MaterialView",
  data() {
    return {
      cost: {
        name: '',
        sig: ''
      },
      tableData: [],
      total: 200,
      page_count: 10
    }
  },
  methods: {
    handleCurrentChange(e){
      console.log(e);
    },

  },
  mounted() {
    Axios.get("http://localhost:8090/api/engineer/materials",{headers:{"token":localStorage.getItem("token")}}).then(res=>{
    this.tableData = res.data.data;
    })
  }
}

</script>
<style>


</style>