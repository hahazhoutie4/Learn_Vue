<template>
  <div style="display: inline;margin: auto">
    <div style="margin:auto;display: flow">
    <el-form ref="form" :model="form" label-width="120px" style="display: flex;flex-direction: column;margin-right: 50%">
    <el-form-item :key="a" label="二维码内容" v-for="a in arr" >
      <el-input   v-model="form.value[a-1]" ></el-input>
    </el-form-item>
    </el-form>
    </div>
  <div style="text-align: left">
    <el-button @click="incre" type="primary" size="small">增加行数</el-button>
    <el-button @click="decre" type="primary" size="small">减少行数</el-button>
    <el-button @click="generateCode" type="primary" size="small">显示图片</el-button>
    <el-button @click="clear" type="primary" size="small">清除二维码</el-button>
  </div>
    <div ref="images" style="text-align: left">
    </div>
  </div>
</template>

<script>
// import axios from "axios";

export default {
  name: 'QrcodeView',
  data() {
    return {
      arr: 1,
      form:{
        value:[],
        qrcode : "",
      },
      google:[]
    }
  },
  methods: {
    incre(){
      this.arr++;
    },
    decre(){
      if(this.arr<=1) return;
      this.arr--;
      this.form.value.pop();

    },
    generateCode(){
      console.log("generateCode");
      this.$refs.images.innerHTML=""; //先清除
      for(let k in this.form.value){
        this.google[k] = this.form.qrcode+this.form.value[k];
        const span = document.createElement('span');
        span.innerText = this.form.value[k];
       const img = document.createElement('img');
       img.src = this.google[k];
      //   axios.get(this.google[k],{async:false,headers:{"token":localStorage.getItem("token")}}).then(res=>{
      //     img.src = res.data.data;
      //   });
       span.appendChild(img);
       this.$refs.images.appendChild(span);
      }
    },
    clear(){
      this.$refs.images.innerHTML="";
    }
  },
  mounted() {
    this.form.qrcode = this.originhref+"/api/engineer/qrcode?content=";
    console.log(this.form.qrcode);
  }
}
</script>

<style>
.el-button{
  margin-left: 42px;
}
</style>