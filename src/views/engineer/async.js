import Axios from 'axios'
import qs from "qs";
import Vue from "vue";
export function login(vueObject , userName,password){
    vueObject.loading = true;
    Axios.post(Vue.prototype.originhref+"/api/login",qs.stringify({userName:userName,password:password}),{headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }}).then(res=>{
        vueObject.loading = false;
        let data  = res.data;
        if(data.code == 0){
            vueObject.$alert(data.data);
        }else if(data.code ==1){
            localStorage.setItem("token",data.data);
            vueObject.$router.push("/emp");
        }
    })
}
export function proServiceFindAll(vueObject){
    vueObject.loading = true;
    Axios.get(Vue.prototype.originhref+"/api/engineer/proServices",{headers:{"token":localStorage.getItem("token")}}).then(res=>{
        console.log("mounted");
        console.log(res.data);
        vueObject.proServiceData = res.data.data;
        vueObject.total = res.data.total;
        vueObject.loading = false;
    })
}

export function proServiceFindByPage(vueObject,nowPage,pageSize){
    vueObject.loading = true;
    Axios.get(Vue.prototype.originhref+"/api/engineer/proServices?nowPage="+nowPage+"&pageSize="+pageSize,{headers:{"token":localStorage.getItem("token")}}).then(res=>{
        console.log("打开第"+nowPage+"页");
        console.log(res.data);
        vueObject.proServiceData = res.data.data;
        vueObject.total = res.data.total;
        vueObject.loading = false;
    })
}

export function laborFindByPage(vueObject,nowPage,pageSize){
    vueObject.loading = true;
    Axios.get(Vue.prototype.originhref+"/api/engineer/labors?nowPage="+nowPage+"&pageSize="+pageSize,{headers:{"token":localStorage.getItem("token")}}).then(res=>{
        console.log("打开第"+nowPage+"页");
        console.log(res.data);
        vueObject.tableData = res.data.data;
        vueObject.total = res.data.total;
        vueObject.loading = false;
    })
}


export function materialFindByPage(vueObject,nowPage,pageSize){
    vueObject.loading = true;
    Axios.get(Vue.prototype.originhref+"/api/engineer/materials?nowPage="+nowPage+"&pageSize="+pageSize,{headers:{"token":localStorage.getItem("token")}}).then(res=>{
        console.log("打开第"+nowPage+"页");
        console.log(res.data);
        vueObject.materialData = res.data.data;
        vueObject.total = res.data.total;
        vueObject.loading = false;
    })
}

export function laborFindAll(vueObject){
    vueObject.loading = true;
    Axios.get(Vue.prototype.originhref+"/api/engineer/labors",{headers:{"token":localStorage.getItem("token")}}).then(res=>{
        console.log("mounted");
        console.log(res.data);
        vueObject.tableData = res.data.data;
        vueObject.total = res.data.total;
        vueObject.loading = false;
    })
}

export function materialFindAll(vueObject){
    vueObject.loading = true;
    Axios.get(Vue.prototype.originhref+"/api/engineer/materials",
        {headers:{"token":localStorage.getItem("token")}}).then(res=>{
            console.log("mounted"+ res.data);
        vueObject.materialData = res.data.data;
        vueObject.total = res.data.total;
        vueObject.loading = false;
    })
}

