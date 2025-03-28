<template>
  <div class="login-view">
    <div class="login-header pom">造价师成本查询系统登录入口</div>
    <el-form class="pom" id="login" ref="form" :model="form" label-width="120px">
      <el-form-item label="用户名:">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码:">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style>
.login-view{
  width: 100%;
  height: 100%;
}
.login-header{
  text-align: left;
  padding-bottom:25px;
  font-size: 24px;
  font-weight:bold;
  height: 33px;
  padding-top: 12%;
}
.pom{
  padding-left: 51.8%;
}
.el-form-item__label{
  color:#2c3e50;
}
.el-input__inner{
  width: auto;
}
#login{
  text-align: left;
  font-weight: bold;
  color: white;
  width: 30%;
  height: 30%;
  display: flex;
  flex-direction: column;
}
</style>
<script>
import {login} from "@/views/engineer/async";

export default {
  name: 'LoginView',
  data() {
    return {
      Header: "hello",
      form: {
        name: '',
       password:''
      },
      res: null
    };
  },
  methods: {
    onSubmit() {
      login(this,this.form.name,this.form.password);
    },
    onCancel() {
      this.form.name = '';
      this.form.password = '';
      console.log('cancel!');
    }
  },
  mounted() {
    console.log("LoginView.vue mounted");
  }
}
</script>