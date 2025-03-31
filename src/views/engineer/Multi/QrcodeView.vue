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
import axios from "axios";

export default {
  name: 'QrcodeView',
  data() {
    return {
      arr: 1,
      form:{
        value:[],
        href : "",
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
    async generateCode(){
      console.log("generateCode");
      this.$refs.images.innerHTML=""; //先清除
      const head = "data:img/png;base64,";
      for(let k in this.form.value){
        this.google[k] = this.form.href+this.form.value[k];
        const span = document.createElement('span');
        span.innerText = this.form.value[k];
       const img = document.createElement('img');
     //  img.src = head+"iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQAAAABRBrPYAAABD0lEQVR42u3aOxKDIBCAYaw8BkfVo3qElFZueEO00CIsk8xP4YT4Ue24DxMjT9bLwGAwGAz2U2w3aVm3WY2Z/CWsCabH4k5W6w9Yt11tewOmxGKIarDKAZg+czeXsIUNZHLABrKcuNynbZbb/AbrwEoRj3G6rfWwDqxZ/pF50PfCvs/2FJiQvdwj42y6wFRZ/D5kqi0OGEecMmCqLARsPlL2Mj5O2yW/wfoyKfXb5GAt1yIO68hqB5vb2HjglLhgPVld57BNMDXWNLQpe8UJz8wC02NluMuXUDlg2iy/bsoNrdT3r7ABrC3isFFMPnIWTJPVH4OWMtxdRmxYV9YW8aaVsgLTY/wdAgaDwWB/w94RbVksI0KiBgAAAABJRU5ErkJggg==";
      const res = await axios.get(this.google[k],{async:false,headers:{"token":localStorage.getItem("token")}});
          if(res.data.code == 1){
            img.src = head+res.data.data;
            console.log(res.data.data);
          }else{
            this.$alert(res.data);
          }
      //
       span.appendChild(img);
       this.$refs.images.appendChild(span);
      }
    },
    clear(){
      this.form.value = [];
      this.$refs.images.innerHTML="";
    }
  },
  mounted() {
    this.form.href = this.originhref+"/api/engineer/qrcode?content=";
    console.log(this.form.href);
  }
}
</script>

<style>
.el-button{
  margin-left: 42px;
}
</style>