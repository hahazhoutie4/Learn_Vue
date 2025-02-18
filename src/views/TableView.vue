<template>
  <div id="table">
    <table border="1px" cellspacing="0">
      <tr>
        <th>编号</th>
        <th>姓名</th>
        <th>班级</th>
        <th>学号</th>
        <th>性别</th>
      </tr>
      <tr v-for="(ms, idx) in msg" :key="idx">
        <td>{{ ms.id }}</td>
        <td>{{ ms.name }}</td>
        <td>{{ ms.class }}</td>
        <td>{{ ms.number }}</td>
        <td>{{ ms.gender }}</td>
      </tr>
    </table>
    <!-- element分页按钮示范 -->
    <el-pagination
      background
      layout="sizes , prev, pager, next , total ,slot ,->"
      :total="100"
      @size-change="sc"
      @current-change="cc"
    ></el-pagination>
    <el-row><el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>

      <!-- elementDIALOG示范 -->
      <el-button type="primary" @click="dialogFormVisible = true"
        >打开嵌套表单的 Dialog</el-button>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="f(), (dialogFormVisible = false)">确 定</el-button>
        </div>
      </el-dialog>
    </el-row>
    <el-button style="primary" @click="fe()">{{ button }}</el-button>
    <el-switch
      v-bind:change="sw()"
      v-model="switchData"
      active-color="#13ce66"
      inactive-color="#ff4949"
    ></el-switch>
    <span>&nbsp;&nbsp;是否确认</span>
    <el-alert :title="警告窗口" type="info" effect="light" show-icon closable></el-alert>
  </div>
</template>
<script>
export default {
  data() {
    return {
      closable:true,
      msg: [
        {
          id: 1,
          name: "zhangsan",
          class: "102",
          number: "2032",
          gender: "male",
        },
        { id: 1, name: "lisi", class: "102", number: "2032", gender: "male" },
        {
          id: 1,
          name: "wangwu",
          class: "102",
          number: "2032",
          gender: "female",
        },
      ],
      button: "按钮",
      switchData: true,
      gridData: [
        {
          date: "2016-05-02",

          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    fe: function () {
      console.log("点击button");
    },
    f: function () {
      console.log("显示表单数据" + this.form.region + this.form.name);
    },
    sw: function () {
      console.log(this.switchData);
    },
    sc: function (v) {
      console.log("每页数变化为" + v);
    },
    cc: function (v) {
      console.log("当前页为" + v);
    },
  },
};
</script>


<style>
table {
  margin: 0 20%;
}
#table {
  margin: 5% 20%;
  font: red;
  text-align: center;
  transition-duration: 2s ease;
}
</style>