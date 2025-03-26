import Axios from 'axios'
import qs from "qs";
var href = window.location.origin;
export function login(){
    Axios.post(href+"/api/login",qs.stringify({userName:"zhoutong",password:"jintian123"}),{headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }}).then(res=>{
        let token = res.data.data;
        localStorage.setItem("token",token);
    })
}
export function proServiceFindAll(vueObject){
    vueObject.loading = true;
    Axios.get(href+"/api/engineer/proServices",{headers:{"token":localStorage.getItem("token")}}).then(res=>{
        console.log("mounted");
        console.log(res.data);
        vueObject.proServiceData = res.data.data;
        vueObject.total = res.data.total;
        vueObject.loading = false;
    })
}

export function proServiceFindByPage(vueObject,nowPage,pageSize){
    vueObject.loading = true;
    Axios.get(href+"/api/engineer/proServices?nowPage="+nowPage+"&pageSize="+pageSize,{headers:{"token":localStorage.getItem("token")}}).then(res=>{
        console.log("打开第"+nowPage+"页");
        console.log(res.data);
        vueObject.proServiceData = res.data.data;
        vueObject.total = res.data.total;
        vueObject.loading = false;
    })
}

export function laborFindByPage(vueObject,nowPage,pageSize){
    vueObject.loading = true;
    Axios.get(href+"/api/engineer/labors?nowPage="+nowPage+"&pageSize="+pageSize,{headers:{"token":localStorage.getItem("token")}}).then(res=>{
        console.log("打开第"+nowPage+"页");
        console.log(res.data);
        vueObject.tableData = res.data.data;
        vueObject.total = res.data.total;
        vueObject.loading = false;
    })
}


export function materialFindByPage(vueObject,nowPage,pageSize){
    vueObject.loading = true;
    Axios.get(href+"/api/engineer/materials?nowPage="+nowPage+"&pageSize="+pageSize,{headers:{"token":localStorage.getItem("token")}}).then(res=>{
        console.log("打开第"+nowPage+"页");
        console.log(res.data);
        vueObject.materialData = res.data.data;
        vueObject.total = res.data.total;
        vueObject.loading = false;
    })
}

export function laborFindAll(vueObject){
    vueObject.loading = true;
    Axios.get(href+"/api/engineer/labors",{headers:{"token":localStorage.getItem("token")}}).then(res=>{
        console.log("mounted");
        console.log(res.data);
        vueObject.tableData = res.data.data;
        vueObject.total = res.data.total;
        vueObject.loading = false;
    })
}

export function materialFindAll(vueObject){
    vueObject.loading = true;
    Axios.get(href+"/api/engineer/materials",
        {headers:{"token":localStorage.getItem("token")}}).then(res=>{
            console.log("mounted"+ res.data);
        vueObject.materialData = res.data.data;
        vueObject.total = res.data.total;
        vueObject.loading = false;
    })
}
