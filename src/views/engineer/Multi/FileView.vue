<template>
  <el-upload
      class="upload-demo"
      :action="action"
      :headers ="headers"
      :multiple = false
      :limit="1"
      :file-list="fileList">
    <el-button size="small" type="primary" >点击上传</el-button>
    <div slot="tip" class="el-upload__tip">只能按照格式文件上传</div>
  </el-upload>
</template>
<script>
export default {
  name : "FileView",
  methods: {

  },
  mounted() {
    this.headers={"token":localStorage.getItem("token")};
  },
  data(){
    return{
      headers:{},
      fileList: [],
      action: this.originhref+"/api/engineer/fileUpload"
    }
  },
}
</script>
<style>
.el-upload{
  width: 40%;
}
</style>